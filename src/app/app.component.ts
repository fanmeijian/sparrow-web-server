import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Connect from './model/Connect';
import Stage from './model/Stage';
import TextElm from './model/TextElm';
import { KeycloakService } from 'keycloak-angular';
import {
  AuditlogService,
  EmployeeService,
  OrganizationService,
  RestApiServiceService,
  RoleService,
} from '@sparrowmini/org-api';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, switchMap, zip } from 'rxjs';


import { CamundaModdleDescriptor } from './model/CamundaModdleDescriptor';
// import BpmnEditor from '@kogito-tooling/kie-editors-standalone/dist/bpmn'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('stage') stage!: ElementRef<any>;
  curUser: any;
  organizationRoleId: any;

  modeler!: any;



  constructor(
    private keycloakService: KeycloakService,
    private employeeService: EmployeeService,
    private http: HttpClient,
    private rest: RestApiServiceService,
    private logService: AuditlogService,
    private orgService: OrganizationService,
    private roleService: RoleService
  ) {
    this.keycloakService.loadUserProfile().then((res) => {
      this.curUser = res;
      this.employeeService
        .employeeByUsername(res.username)
        .subscribe((a: any) => {
          if(a){
            this.employeeService
            .employeeRoles(a.id)
            .pipe(
              switchMap((m) =>
                zip(
                  ...m.map((r) => {
                    const $org = this.orgService.org(
                      r?.id?.organizationRoleId.organizationId
                    );
                    const $role = this.roleService.role(
                      r.id.organizationRoleId.roleId
                    );
                    return combineLatest($org, $role).pipe(
                      map((p: any) =>
                        Object.assign(r, { org: p[0], role: p[1] })
                      )
                    );
                  })
                )
              )
            )
            .subscribe((b) => {
              // console.log(b);
              this.curUser.roles = b;
              let orgRoleId = JSON.parse(
                sessionStorage.getItem('organizationId')
              );
              this.organizationRoleId = b.filter(
                (f) =>
                  f.id.organizationRoleId.organizationId ===
                    orgRoleId.organizationId &&
                  f.id.organizationRoleId.roleId === orgRoleId.roleId
              )[0].id.organizationRoleId;

              // console.log(b[0].id.organizationRoleId);
            });
          }

        });
    });
  }
  ngAfterViewInit(): void {

  }


  ngOnInit(): void {

  }
  title = 'sparrow-web-server';

  logout() {
    this.keycloakService.logout();
  }

  onChange(e: any) {
    sessionStorage.setItem('organizationId', JSON.stringify(e.value));
  }
}
