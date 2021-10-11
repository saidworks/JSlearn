import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

const routes: Routes = [
  {path:"",component:UserSettingsFormComponent},
  {path:"bind",component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
