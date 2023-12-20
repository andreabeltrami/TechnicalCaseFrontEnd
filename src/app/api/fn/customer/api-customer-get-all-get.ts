/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerVm } from '../../models/customer-vm';

export interface ApiCustomerGetAllGet$Params {
}

export function apiCustomerGetAllGet(http: HttpClient, rootUrl: string, params?: ApiCustomerGetAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CustomerVm>>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerGetAllGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CustomerVm>>;
    })
  );
}

apiCustomerGetAllGet.PATH = '/api/Customer/GetAll';
