import { APP_INITIALIZER, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  ApiModule as OrgApiModule,
  BASE_PATH as OrgApi_BASE_PATH,
} from '@sparrowmini/org-api';
import { SparrowOrgModule } from '@sparrowmini/sparrow-org';
import {
  MenuRouteGuard,
  SparrowPermissionModule,
} from '@sparrowmini/sparrow-permission';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { SparrowBreadcrumbModule } from '@sparrowmini/breadcrumb';
import { AngularMaterialModule } from './angular-material.module';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { ErrorDialogComponent } from './common/error-dialog/error-dialog.component';
// import { SparrowRuleModule } from '@sparrowmini/sparrow-rule';
// import {
//   ApiModule as RuleApiModule,
//   BASE_PATH as RuleApi_BASE_PATH,
// } from '@sparrowmini/rule-api';

import {
  ApiModule as FormApiModule,
  BASE_PATH as FormApi_BASE_PATH,
} from '@sparrowmini/form-api';
import {
  ApiModule as JbpmApiModule,
  BASE_PATH as JbpmApi_BASE_PATH,
} from '@sparrowmini/jbpm-api';

import {
  ApiModule as FlowApiModule,
  BASE_PATH as FlowApi_BASE_PATH,
} from '@sparrowmini/flow-api';

import {
  ApiModule as UserApiModule,
  BASE_PATH as UserApi_BASE_PATH,
} from '@sparrowmini/sparrow-keycloak-admin-api';

import {
  ApiModule as CamundaApiModule,
  BASE_PATH as CamundaApi_BASE_PATH,
} from '@sparrowmini/camunda-api';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthInterceptor } from './auth.interceptor';
import { SparrowFlowModule } from '@sparrowmini/sparrow-flow';
import { ErrorCatchingInterceptor } from './error-catching-interceptor';
import { LoadingDialogComponent } from './common/loading-dialog/loading-dialog.component';

// import {SparrowTestLibModule } from 'sparrow-test-lib'

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloakUrl,
        realm: environment.realm,
        clientId: 'sparrow-web-server',
      },
      initOptions: {
        onLoad: 'check-sso',
      },
      bearerExcludedUrls: ['/assets'],
    }).then(res=>{
      console.log(res)
      if(res){
        keycloak.loadUserProfile().then(res=>{
          sessionStorage.setItem('username',res.username)
          sessionStorage.setItem("user", JSON.stringify(res))

        })
      }else{
        keycloak.login({scope: 'openid email profile microprofile-jwt'})

      }
    });
}

@NgModule({
  declarations: [AppComponent, LoadingDialogComponent, ErrorDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrgApiModule,
    SparrowPermissionModule,
    SparrowOrgModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
    SparrowBreadcrumbModule,
    AngularMaterialModule,
    // SparrowTestLibModule,
    // SparrowRuleModule,
    // RuleApiModule,
    FormApiModule,
    JbpmApiModule,
    UserApiModule,
    SparrowFlowModule,
    FlowApiModule,
    CamundaApiModule,
  ],
  providers: [
    { provide: OrgApi_BASE_PATH, useValue: environment.orgApiBase },
    // { provide: RuleApi_BASE_PATH, useValue: environment.ruleApiBase },
    { provide: FormApi_BASE_PATH, useValue: environment.formApiBase },
    { provide: JbpmApi_BASE_PATH, useValue: environment.bpmApiBase },
    { provide: UserApi_BASE_PATH, useValue: environment.userServiceApi },
    { provide: FlowApi_BASE_PATH, useValue: environment.flowApiBase },
    { provide: CamundaApi_BASE_PATH, useValue: environment.flowApiBase + '/engine-rest/engine/default'},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MenuRouteGuard },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
