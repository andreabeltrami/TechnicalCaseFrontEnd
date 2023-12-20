import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() sourceData: any;
  @Input() showAction: boolean = false;
  @Input() hideColumns: string[] = [];

  @Output() editRowEvent = new EventEmitter<any>();
  
  columns: string[] = [];
  rows: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.refreshData();
  }

  ngOnChanges() {
    this.refreshData();
  }

  refreshData() {
    if(this.sourceData){
      let firstElement: any[] = this.sourceData[0];
      const columTemp = Object.getOwnPropertyNames(firstElement);
      this.columns = columTemp.
        filter(x => !this.hideColumns.includes(x));
    }
  }

  editRow(data: any){
    this.editRowEvent.emit(data);
  }

  toSentenceCase(inputString: string): string {
    if (!inputString.trim()) {
      return '';
    }
    const sentenceCaseString = inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
    const finalString = sentenceCaseString.replace(/\s+/g, ' ');
  
    return finalString;
  }
}
