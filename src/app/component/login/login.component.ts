import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignIn = true;
  Constructor(){}
  ngOnInit() {}
  onChange(){
    this.isSignIn = !this.isSignIn;
  }
  onChangeLogin(){
    this.isSignIn = !this.isSignIn;
  }
}
