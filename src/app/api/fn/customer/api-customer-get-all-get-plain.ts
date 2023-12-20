/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerVm } from '../../models/customer-vm';

export interface ApiCustomerGetAllGet$Plain$Params {
}

export function apiCustomerGetAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiCustomerGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CustomerVm>>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerGetAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CustomerVm>>;
    })
  );
}

apiCustomerGetAllGet$Plain.PATH = '/api/Customer/GetAll';
