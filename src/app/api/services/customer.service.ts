/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCustomerCreatePost } from '../fn/customer/api-customer-create-post';
import { ApiCustomerCreatePost$Params } from '../fn/customer/api-customer-create-post';
import { apiCustomerCreatePost$Plain } from '../fn/customer/api-customer-create-post-plain';
import { ApiCustomerCreatePost$Plain$Params } from '../fn/customer/api-customer-create-post-plain';
import { apiCustomerGetAllGet } from '../fn/customer/api-customer-get-all-get';
import { ApiCustomerGetAllGet$Params } from '../fn/customer/api-customer-get-all-get';
import { apiCustomerGetAllGet$Plain } from '../fn/customer/api-customer-get-all-get-plain';
import { ApiCustomerGetAllGet$Plain$Params } from '../fn/customer/api-customer-get-all-get-plain';
import { apiCustomerGetByIdGet } from '../fn/customer/api-customer-get-by-id-get';
import { ApiCustomerGetByIdGet$Params } from '../fn/customer/api-customer-get-by-id-get';
import { apiCustomerGetByIdGet$Plain } from '../fn/customer/api-customer-get-by-id-get-plain';
import { ApiCustomerGetByIdGet$Plain$Params } from '../fn/customer/api-customer-get-by-id-get-plain';
import { apiCustomerUpdatePost } from '../fn/customer/api-customer-update-post';
import { ApiCustomerUpdatePost$Params } from '../fn/customer/api-customer-update-post';
import { apiCustomerUpdatePost$Plain } from '../fn/customer/api-customer-update-post-plain';
import { ApiCustomerUpdatePost$Plain$Params } from '../fn/customer/api-customer-update-post-plain';
import { Customer } from '../models/customer';
import { CustomerVm } from '../models/customer-vm';

@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCustomerGetAllGet()` */
  static readonly ApiCustomerGetAllGetPath = '/api/Customer/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetAllGet$Plain$Response(params?: ApiCustomerGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CustomerVm>>> {
    return apiCustomerGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetAllGet$Plain(params?: ApiCustomerGetAllGet$Plain$Params, context?: HttpContext): Observable<Array<CustomerVm>> {
    return this.apiCustomerGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CustomerVm>>): Array<CustomerVm> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetAllGet$Response(params?: ApiCustomerGetAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CustomerVm>>> {
    return apiCustomerGetAllGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetAllGet(params?: ApiCustomerGetAllGet$Params, context?: HttpContext): Observable<Array<CustomerVm>> {
    return this.apiCustomerGetAllGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CustomerVm>>): Array<CustomerVm> => r.body)
    );
  }

  /** Path part for operation `apiCustomerGetByIdGet()` */
  static readonly ApiCustomerGetByIdGetPath = '/api/Customer/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetByIdGet$Plain$Response(params?: ApiCustomerGetByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return apiCustomerGetByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetByIdGet$Plain(params?: ApiCustomerGetByIdGet$Plain$Params, context?: HttpContext): Observable<Customer> {
    return this.apiCustomerGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetByIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetByIdGet$Response(params?: ApiCustomerGetByIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return apiCustomerGetByIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetByIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetByIdGet(params?: ApiCustomerGetByIdGet$Params, context?: HttpContext): Observable<Customer> {
    return this.apiCustomerGetByIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /** Path part for operation `apiCustomerCreatePost()` */
  static readonly ApiCustomerCreatePostPath = '/api/Customer/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreatePost$Plain$Response(params?: ApiCustomerCreatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return apiCustomerCreatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreatePost$Plain(params?: ApiCustomerCreatePost$Plain$Params, context?: HttpContext): Observable<Customer> {
    return this.apiCustomerCreatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreatePost$Response(params?: ApiCustomerCreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return apiCustomerCreatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreatePost(params?: ApiCustomerCreatePost$Params, context?: HttpContext): Observable<Customer> {
    return this.apiCustomerCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /** Path part for operation `apiCustomerUpdatePost()` */
  static readonly ApiCustomerUpdatePostPath = '/api/Customer/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdatePost$Plain$Response(params?: ApiCustomerUpdatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return apiCustomerUpdatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdatePost$Plain(params?: ApiCustomerUpdatePost$Plain$Params, context?: HttpContext): Observable<Customer> {
    return this.apiCustomerUpdatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerUpdatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdatePost$Response(params?: ApiCustomerUpdatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return apiCustomerUpdatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerUpdatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdatePost(params?: ApiCustomerUpdatePost$Params, context?: HttpContext): Observable<Customer> {
    return this.apiCustomerUpdatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

}
