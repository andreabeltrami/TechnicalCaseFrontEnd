import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from './api/services';
import { ModalComponent } from 'src/shared/components/modal/modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private data: any;
  public hideColumn: string[] = ["id"];

  customerForm: FormGroup = new FormGroup({});

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
    });
  }

  loadCustomers() {
    this.customerService.apiCustomerGetAllGet().subscribe(x => {
      this.data = x;
    })
  }

  onRowEdited(event: any) {
    this.customerService.apiCustomerGetByIdGet(event.id).subscribe(x => {
      
    })
    this.openModal();
  }    

  openModal(){
    this.modalService.open(this.modal,{
      size: "lg",
      centered: true,
      scrollable: true,
      backdrop: 'static',
      keyboard: false
    });
  }
}
