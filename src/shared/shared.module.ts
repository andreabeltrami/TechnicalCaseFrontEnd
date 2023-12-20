import { NgModule } from "@angular/core";
import { TableComponent } from "./components/table/table.component";
import { CommonModule } from "@angular/common";
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [TableComponent, ModalComponent],
    imports: [CommonModule],
    exports: [TableComponent, ModalComponent],

  })

export class SharedModule{}