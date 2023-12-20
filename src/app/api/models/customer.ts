/* tslint:disable */
/* eslint-disable */
import { Invoice } from '../models/invoice';
export interface Customer {
  address?: string | null;
  country?: string | null;
  id?: string | null;
  invoices?: Array<Invoice> | null;
  name?: string | null;
  state?: string | null;
  subscriptionState?: number;
}
