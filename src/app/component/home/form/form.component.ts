import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { User } from 'src/app/models/User';
import {StorageService} from "../../../services/storage.service";
import {UserService} from "../../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user! : User;
  editUser! : string;
  editForm! :FormGroup
  @Output() isEdited = new EventEmitter();
  constructor(private storageService:StorageService,
              private userService:UserService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      id: new FormControl(),
      username: new FormControl([Validators.required]),
      email: new FormControl([Validators.required], Validators.pattern('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/')),
      avatar:new FormControl(),
      description: new FormControl()
    })
    this.getInformation();
  }
  getUser(){
    if (!this.storageService.get('edit')){
      this.editUser = this.storageService.get('user');
    } else{
      this.editUser = this.storageService.get('edit');
    }
  }
  getInformation(){
    this.getUser()
    this.userService.getUser(this.editUser).subscribe((user) =>{
      this.user = user;
      this.fillDataToForm();
      console.log('this user',this.user)
    },(err) =>{
      console.log(err);
    });
  }
  fillDataToForm(){
    this.editForm.setValue({
      id: this.editUser,
      username: this.user.name,
      email: this.user.email,
      avatar: this.user.avatar,
      description: this.user.description,
    });
  };
  save(){
    this.user.name = this.editForm.get('username')?.value;
    this.user.email = this.editForm.get('email')?.value;
    this.user.avatar = this.editForm.get('avatar')?.value;
    this.user.description = this.editForm.get('description')?.value;
    this.userService.updateUser(this.user).subscribe(()=>{
      console.log('Success');
      this.cancel();
    },(err) =>{
      console.log(err);
    })
  }
  cancel(){
    this.storageService.remove('edit');
    this.isEdited.emit();
  }
}
