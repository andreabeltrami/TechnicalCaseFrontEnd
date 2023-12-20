import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from './api/services';
import { ModalComponent } from 'src/shared/components/modal/modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiCustomerGetByIdGet$Params } from './api/fn/customer/api-customer-get-by-id-get';
import { Customer, CustomerVm, Invoice } from './api/models';
import { ApiCustomerUpdatePost$Params } from './api/fn/customer/api-customer-update-post';
import { Observable } from 'rxjs';
import { ApiCustomerCreatePost$Params } from './api/fn/customer/api-customer-create-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
      this.invoices =[];
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
