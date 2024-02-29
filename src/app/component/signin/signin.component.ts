import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../models/Login";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm! : FormGroup
  user! : Login
  isError : number = 200;
  @Output() changeRegister = new EventEmitter();
  constructor(private loginService: LoginService,
              private router : Router,
              private storageService: StorageService){ }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl('',[Validators.minLength(6), Validators.maxLength(32)])
    });
  }

  login(){
    this.user = this.loginForm.value;
    new Promise<boolean>((resolve, reject) => {
      this.loginService.login(this.user).subscribe((data : any)=>{
        console.log("login successfully");
        this.storageService.set('user', data.userId)
        resolve(true);
        this.router.navigate(['/home']);
      }, (error: HttpErrorResponse) => {
        console.log("login failed");
        this.isError = error.status;
        resolve(false);
      });
    }).catch((error) => {
      console.log("error when login: ", error);
    });
  }
}
