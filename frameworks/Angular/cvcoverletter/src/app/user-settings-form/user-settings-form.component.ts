import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {finalize} from 'rxjs/operators';
import { User } from '../models/user/user';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'cv-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }
  user: User = {
    name:"Said",
    premium : true,
    interfaceStyle: "light",
    subscriptionType: "Annual",
    notes: "Flask"
  
  } ;
  f = NgForm;
  submitted = false;
  onSubmit(){
    this.usersService.sendForm(this.user).subscribe(
      success => console.log('success: ', success),
    error => console.log('error')
    )
    
  }


}
