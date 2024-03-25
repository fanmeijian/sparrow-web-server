import { APP_INITIALIZER, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  ApiModule as OrgApiModule,
  BASE_PATH as OrgApi_BASE_PATH,
} from '@sparrowmini/org-api';
import { SparrowOrgModule } from '@sparrowmini/sparrow-org';
import { SparrowPermissionModule } from '@sparrowmini/sparrow-permission';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { SparrowBreadcrumbModule } from '@sparrowmini/breadcrumb';
import { AngularMaterialModule } from './angular-material.module';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SparrowRuleModule } from '@sparrowmini/sparrow-rule';
import {
  ApiModule as RuleApiModule,
  BASE_PATH as RuleApi_BASE_PATH,
} from '@sparrowmini/rule-api';

// import {SparrowTestLibModule } from 'sparrow-test-lib'

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloakUrl,
        realm: environment.realm,
        clientId: 'sparrow-web-form',
      },
      initOptions: {
        onLoad: 'login-required',
      },
      bearerExcludedUrls: ['/assets'],
    });
}

@NgModule({
  declarations: [AppComponent, ErrorDialogComponent],
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
    SparrowRuleModule,
    RuleApiModule,
  ],
  providers: [
    { provide: OrgApi_BASE_PATH, useValue: environment.orgApiBase },
    { provide: RuleApi_BASE_PATH, useValue: environment.ruleApiBase },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
