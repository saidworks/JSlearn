import { Component, OnInit } from '@angular/core';
import { User } from '../models/user/user';
@Component({
  selector: 'cv-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user: User | undefined;
  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

}
