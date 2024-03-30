import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private keycloak: KeycloakService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let curOrg = sessionStorage.getItem("organizationId")
    if (curOrg) {
      const authReq = request.clone({
        setHeaders: { 'Organization-Id': curOrg },
      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}
