/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';

export interface ApiCustomerCreatePost$Plain$Params {
      body?: Customer
}

export function apiCustomerCreatePost$Plain(http: HttpClient, rootUrl: string, params?: ApiCustomerCreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerCreatePost$Plain.PATH, 'post');
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

apiCustomerCreatePost$Plain.PATH = '/api/Customer/Create';
