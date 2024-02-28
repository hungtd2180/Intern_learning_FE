import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {MainComponent} from "./component/home/main/main.component";
import {FormComponent} from "./component/home/form/form.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home/index', component: MainComponent},
  {path: 'home', component: MainComponent},
  {path: 'home/edit', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
