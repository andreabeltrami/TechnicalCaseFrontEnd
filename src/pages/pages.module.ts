import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/shared/shared.module";
import { CustomerComponent } from "./customer/customer.component";

@NgModule({
    declarations: [CustomerComponent],
    imports: [SharedModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [CustomerComponent],

  })

export class PagesModule{}