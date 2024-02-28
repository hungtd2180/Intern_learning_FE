import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ItemListComponent } from './component/home/item-list/item-list.component';
import { ItemComponent } from './component/home/item/item.component';
import { HeaderComponent } from './component/home/header/header.component';
import { NavbarComponent } from './component/home/navbar/navbar.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { FormComponent } from './component/home/form/form.component';
import { MainComponent } from './component/home/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SigninComponent } from './component/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ItemListComponent,
    ItemComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    MainComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
