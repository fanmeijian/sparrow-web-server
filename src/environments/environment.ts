// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  orgApiBase: 'http://localhost:8300/toupiao-service',
  ruleApiBase: 'http://localhost:8070/rule-service',
  keycloakUrl: 'https://keycloak.linkair-tech.cn',
  formApiBase: 'http://localhost:8300/toupiao-service',
  bpmApiBase: 'http://localhost:4421/org-service/rest',
  userServiceApi: 'http://localhost:6080/keycloak-admin-service',
  flowApiBase: 'http://localhost:8300/toupiao-service',
  realm: 'liyun-prd',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
