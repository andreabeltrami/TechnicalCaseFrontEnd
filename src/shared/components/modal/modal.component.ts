import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string = "";
  @Output() onCloseEvent = new EventEmitter();
  @Output() onSaveEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.onCloseEvent.emit();
  }

  save(){
    this.onSaveEvent.emit();
  }
}
