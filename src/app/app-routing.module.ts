import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FormDesignComponent,
  MyProcessInstancesComponent,
  ProcessDefinitionsComponent,
  ProcessFormComponent,
  ProcessInstacesComponent,
  ProcessPublishedComponent,
  QueryListComponent,
  SparrowBpmComponent,
  TaskDoneComponent,
  TaskInstancesComponent,
  TaskTodoComponent,
} from '@sparrowmini/sparrow-bpm';
// import {
//   FormDesignComponent,
//   ProcessDefinitionsComponent,
//   ProcessInstacesComponent,
//   SparrowBpmComponent,
//   TaskInstancesComponent,
//   ProcessFormComponent,
// } from '@sparrowmini/sparrow-bpm';
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
  FilesComponent,
  PageElementsComponent,
  DictsComponent,
  ReportTemplatesComponent,
  ViewReportComponent
} from '@sparrowmini/sparrow-permission';

// import {
//   RuleCreateComponent,
//   RuleTemplatesComponent,
// } from '@sparrowmini/sparrow-rule';

const routes: Routes = [
  {
    path: 'permission',
    data: { title: '权限管理' },
    component: SparrowPermissionComponent,
    children: [
      {
        path: 'menu',
        data: { title: '菜单管理' },
        component: MenuComponent,
      },
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
      {
        path: 'files',
        data: { title: '文件管理' },
        component: FilesComponent,
      },
      {
        path: 'page-elements',
        data: { title: '页面元素管理' },
        component: PageElementsComponent,
      },
    ],
  },
  {
    path: 'log',
    data: { title: '审计日志' },
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
  {
    path: 'setting',
    data: { title: '系统配置' },
    component: SparrowPermissionComponent,
    children: [
      {
        path: 'dicts',
        data: { title: '数据字典' },
        component: DictsComponent,
      },
    ],
  },
  // { path: 'builder', component: FormDesignComponent },
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
      {
        path: 'form-design',
        data: { title: '表单设计' },
        component: FormDesignComponent,
      },
      {
        path: 'process-form',
        data: { title: '启动流程' },
        component: ProcessFormComponent,
      },
      {
        path: 'my-flow',
        data: { title: '我发起的' },
        component: MyProcessInstancesComponent,
      },
      {
        path: 'start-flow',
        data: { title: '发起流程' },
        component: ProcessPublishedComponent,
      },
      {
        path: 'query-list',
        data: { title: '自定义查询'},
        component: QueryListComponent
      }
    ],
  },
  // {
  //   path: 'rule',
  //   data: { title: '规则管理' },
  //   component: SparrowOrgComponent,
  //   children: [
  //     {
  //       path: 'templates',
  //       data: { title: '规则模版列表' },
  //       component: RuleTemplatesComponent,
  //     },
  //     {
  //       path: 'rule-create',
  //       data: { title: '新建规则' },
  //       component: RuleCreateComponent,
  //     },
  //   ],
  // },
  {
    path: 'form',
    data: { title: '表单管理' },
    component: SparrowFormComponent,
    children: [
      {
        path: 'form-data-list',
        data: { title: '表单数据' },
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
        path: 'form-data-view',
        data: { title: '表单详情' },
        component: FormDataViewComponent,
      },
      // {
      //   path: 'process-form',
      //   data: { title: '流程表单' },
      //   component: ProcessFormComponent,
      // },
    ],
  },
  {
    path: 'task',
    data: { title: '任务中心' },
    component: SparrowBpmComponent,
    children: [
      {
        path: 'todo',
        data: { title: '待办任务' },
        component: TaskTodoComponent,
      },
      {
        path: 'done',
        data: { title: '已办任务' },
        component: TaskDoneComponent,
      },
    ],
  },
  {
    path: 'report',
    data: { title: '报表分析' },
    component: SparrowPermissionComponent,
    children: [
      {
        path: 'view-report',
        data: { title: '报表详情' },
        component: ViewReportComponent,
      },
      {
        path: 'templates',
        data: { title: '模版列表' },
        component: ReportTemplatesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
