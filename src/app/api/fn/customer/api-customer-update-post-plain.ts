/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';

export interface ApiCustomerUpdatePost$Plain$Params {
      body?: Customer
}

export function apiCustomerUpdatePost$Plain(http: HttpClient, rootUrl: string, params?: ApiCustomerUpdatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerUpdatePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Customer>;
    })
  );
}

apiCustomerUpdatePost$Plain.PATH = '/api/Customer/Update';
