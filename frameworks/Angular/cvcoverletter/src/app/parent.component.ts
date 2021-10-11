import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  CurrentItem : string = "";


  constructor() { }

  ngOnInit(): void {
  }
  addItem(value:string){
    this.CurrentItem = value;
  }

}
