import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SparrowOrgComponent,
  OrgsComponent,
  RolesComponent,
  LevelsComponent,
  OrggroupsComponent,
  EmployeesComponent,
} from '@sparrowmini/sparrow-org';
import {
  SparrowPermissionComponent,
  MenuComponent,
  SysrolesComponent,
  ScopesComponent,
  SprmodesComponent,
  PemgroupsComponent,
  DataPermissionsComponent
} from '@sparrowmini/sparrow-permission';
import { RuleCreateComponent, RuleTemplatesComponent } from '@sparrowmini/sparrow-rule';

const routes: Routes = [
  {
    path: 'permission',
    data: { title: '权限管理' },
    component: SparrowPermissionComponent,
    children: [
      { path: 'menu', data: { title: '菜单管理' }, component: MenuComponent },
      {
        path: 'sysrole',
        data: { title: '角色管理' },
        component: SysrolesComponent,
      },
      {
        path: 'scope',
        data: { title: '功能管理' },
        component: ScopesComponent,
      },
      {
        path: 'model',
        data: { title: '模型管理' },
        component: SprmodesComponent,
      },
      {
        path: 'pemgroup',
        data: { title: '群组管理' },
        component: PemgroupsComponent,
      },
      {
        path: 'data-permissions',
        data: { title: '权限管理' },
        component: DataPermissionsComponent,
      },
    ],
  },
  {
    path: 'organization',
    data: { title: '组织管理' },
    component: SparrowOrgComponent,
    children: [
      {
        path: 'organizations',
        data: { title: '机构列表' },
        component: OrgsComponent,
      },
      { path: 'roles', data: { title: '岗位列表' }, component: RolesComponent },
      {
        path: 'levels',
        data: { title: '级别列表' },
        component: LevelsComponent,
      },
      {
        path: 'groups',
        data: { title: '群组列表' },
        component: OrggroupsComponent,
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        data: { title: '员工列表' },
      },
    ],
  },
  {
    path: 'rule',
    data: { title: '规则管理' },
    component: SparrowOrgComponent,
    children: [
      {
        path: 'templates',
        data: { title: '规则模版列表' },
        component: RuleTemplatesComponent,
      },
      {
        path: 'rule-create',
        data: { title: '新建规则' },
        component: RuleCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
