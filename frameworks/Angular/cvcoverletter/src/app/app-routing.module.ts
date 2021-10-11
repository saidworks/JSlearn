import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

const routes: Routes = [
  {path:"",component:UserSettingsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
