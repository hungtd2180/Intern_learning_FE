import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../../models/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username! : string;
  avatar! : string;
  user! : User;
  constructor(private storageService: StorageService,
              private route :Router,
              private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUser(this.storageService.get('user')).subscribe((user) => {
      this.username = user.name!;
      this.avatar = user.avatar!;
    }, (err)=>{
      this.username = 'Gouba';
      this.avatar = 'avt.png';
    })
  }
  logout(){
    this.storageService.clear();
    this.route.navigate(['/login']);
  }
}
