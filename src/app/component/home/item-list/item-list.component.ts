import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  users! : Observable<User[]>;
  @Output() itemEdit = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers()
  }
  onDeleteUser(user: User){
    this.userService.deleteUser(user.id!).subscribe(
      ()=>{
        console.log("User deleted")
        this.users = this.userService.getAllUsers();
      },
      (error) =>{
        console.log("error: ", error)
      }
    );
  }
  itemForEdit(){
    this.itemEdit.emit();
  }
}
