import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {userRoutes} from './user.routes'
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
