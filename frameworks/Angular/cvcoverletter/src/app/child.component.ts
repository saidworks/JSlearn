import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'cv-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewItem(value:string){
    this.newItemEvent.emit(value)
  }
}
