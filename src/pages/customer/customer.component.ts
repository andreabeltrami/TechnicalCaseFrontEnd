import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ApiCustomerCreatePost$Params } from 'src/app/api/fn/customer/api-customer-create-post';
import { ApiCustomerGetByIdGet$Params } from 'src/app/api/fn/customer/api-customer-get-by-id-get';
import { ApiCustomerUpdatePost$Params } from 'src/app/api/fn/customer/api-customer-update-post';
import { Customer, CustomerVm, Invoice } from 'src/app/api/models';
import { CustomerService } from 'src/app/api/services';
import { ModalComponent } from 'src/shared/components/modal/modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private modalRef?: NgbModalRef;
  public currentAction : "CREATE"|"UPDATE" = "CREATE";
  public customers: CustomerVm[] = [];
  public invoices: Invoice[] | null | undefined = [];
  public hideColumn: string[] = ["id"];
  public customerForm: FormGroup = new FormGroup({});



  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal, 
    private fb: FormBuilder){}


  @ViewChild('modal')
  protected modal!: TemplateRef<ModalComponent>;

  ngOnInit(): void {
    this.loadCustomers();

    this.customerForm = this.fb.group({
      address: [],
      country: [],
      id: [],
      name: [],
      state: [],
      subscriptionState: [],
      invoices: []
    });
  }

  loadCustomers() {
    this.customerService.apiCustomerGetAllGet().subscribe(x => {
      this.customers = x;
    })
  }

  onRowEdited(event: any) {
    this.updateItem(event.id);
  }    

  updateItem(id: string){
    this.currentAction = "UPDATE";
    this.customerService.apiCustomerGetByIdGet(<ApiCustomerGetByIdGet$Params>{id: id}).subscribe(x => {
      this.customerForm.setValue(x);
      this.invoices = x.invoices;
      this.openModal();
    })
  }

  createItem(){
    this.customerForm.reset();
    this.currentAction = "CREATE";
    this.invoices = null;
    this.openModal();
  }


  openModal(){
    if(this.modalRef)
      this.modalRef.dismiss();

     this.modalRef = this.modalService.open(this.modal,{
      size: "lg",
      centered: true,
      scrollable: true,
      backdrop: 'static',
      keyboard: false
    });
  }

  closeModal(){
    if(this.modalRef)
      this.modalRef.dismiss();
  }
  
  save(){
    const customer: Customer = this.customerForm.getRawValue();
    let action: Observable<Customer> = new Observable<Customer>();
    switch(this.currentAction){
      case "CREATE":
        action =  this.customerService.apiCustomerCreatePost(<ApiCustomerCreatePost$Params>{body: customer});
        break;
      case "UPDATE":
        action =  this.customerService.apiCustomerUpdatePost(<ApiCustomerUpdatePost$Params>{body: customer});
    }

    action.subscribe(x => {
      this.closeModal();
      this.loadCustomers();
    })
  }

}
