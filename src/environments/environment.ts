// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  orgApiBase: 'http://192.168.1.25:4421/org-service',
  ruleApiBase: 'http://192.168.1.25:8070/rule-service',
  keycloakUrl: 'https://keycloak.sportunione.cn',
  formApiBase: 'http://192.168.1.25:4421/org-service',
  bpmApiBase: 'http://192.168.1.25:4421/org-service/rest',
  userServiceApi: 'http://192.168.1.25:6080/keycloak-admin-service',
  flowApiBase: 'http://192.168.1.25:4421/org-service',
  realm: 'liyun-dev',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
