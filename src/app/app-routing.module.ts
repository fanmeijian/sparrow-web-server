import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FormDesignComponent,
  ProcessDefinitionsComponent,
  ProcessInstacesComponent,
  SparrowBpmComponent,
  TaskInstancesComponent,
  ProcessFormComponent,
} from '@sparrowmini/sparrow-bpm';
import { FlowDesignComponent } from '@sparrowmini/sparrow-flow';
import {
  FormCreateComponent,
  FormDataCreateComponent,
  FormDataListComponent,
  FormListComponent,
  MyFormDataListComponent,
  MyFormListComponent,
  SparrowFormComponent,
  FormDataViewComponent,
} from '@sparrowmini/sparrow-form';
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
  DataPermissionsComponent,
  RequestLogComponent,
  DeleteLogComponent,
  EditLogComponent,
  UserListComponent,
} from '@sparrowmini/sparrow-permission';
import {
  RuleCreateComponent,
  RuleTemplatesComponent,
} from '@sparrowmini/sparrow-rule';

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
      {
        path: 'users',
        data: { title: '用户管理' },
        component: UserListComponent,
      },
    ],
  },
  {
    path: 'log',
    data: { title: '系统管理' },
    component: SparrowPermissionComponent,
    children: [
      {
        path: 'request-logs',
        data: { title: '请求日志' },
        component: RequestLogComponent,
      },
      {
        path: 'delete-logs',
        data: { title: '删除日志' },
        component: DeleteLogComponent,
      },
      {
        path: 'edit-logs',
        data: { title: '更新日志' },
        component: EditLogComponent,
      },
    ],
  },
  { path: 'builder', component: FormDesignComponent },
  { path: 'my-forms', component: MyFormListComponent },
  { path: 'my-form-datas', component: MyFormDataListComponent },
  {
    path: 'form-data-view',
    data: { title: '查看数据' },
    component: FormDataViewComponent,
  },
  {
    path: 'form-data-create',
    data: { title: '填写数据' },
    component: FormDataCreateComponent,
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
    path: 'flow',
    data: { title: '流程管理' },
    component: SparrowBpmComponent,
    children: [
      {
        path: 'flowlist',
        data: { title: '流程列表' },
        component: ProcessDefinitionsComponent,
      },
      {
        path: 'flow-instances',
        data: { title: '流程实例' },
        component: ProcessInstacesComponent,
      },
      {
        path: 'tasks',
        data: { title: '任务列表' },
        component: TaskInstancesComponent,
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
  {
    path: 'form',
    data: { title: '表单管理' },
    component: SparrowFormComponent,
    children: [
      {
        path: 'form-datas',
        data: { title: '数据' },
        component: FormDataListComponent,
      },
      {
        path: 'sparrow-forms',
        data: { title: '设计' },
        component: FormListComponent,
      },
      {
        path: 'sparrow-form-create',
        data: { title: '设计表单' },
        component: FormCreateComponent,
      },
      {
        path: 'form-data-create',
        data: { title: '表单数据' },
        component: FormDataCreateComponent,
      },
      {
        path: 'process-form',
        data: { title: '流程表单' },
        component: ProcessFormComponent,
      },
    ],
  },
  {
    path: 'flow-design',
    data: { title: 'flow-design' },
    component: FlowDesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
