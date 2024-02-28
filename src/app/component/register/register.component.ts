import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Login} from "../../models/Login";
import {RegisterService} from "../../services/register.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup
  user! :Login
  isError : number = 200
  @Output() changeLogin = new EventEmitter()
  constructor(private registerService: RegisterService,
              private router : Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(32),
        Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,32}$/),]),
      confirmPassword: new FormControl(),
      })
  }

  register() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      console.error('Password and Confirm Password do not match.');
      this.isError = 500;
      return;
    }
    this.user = this.registerForm.value;
    new Promise<boolean>((resolve, reject) => {
      this.registerService.register(this.user).subscribe((user)=>{
        console.log("register successfully");
        resolve(true);
        this.changeLogin.emit();
      }, (error: HttpErrorResponse) => {
        console.log("register failed");
        this.isError = error.status;
        resolve(false);
      });
    }).catch((error) => {
      console.log("error when login: ", error);
    });
  }

}
