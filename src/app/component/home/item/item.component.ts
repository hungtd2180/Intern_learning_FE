import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/User";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() user! : User;
  @Output() delete = new EventEmitter<User>();
  @Output() update = new EventEmitter<User>();
  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
  }
  remove(){
    this.delete.emit(this.user);
  }
  updateItem(){
    this.storageService.set('edit', this.user.id!);
    this.update.emit();
  }
  checkItem() : boolean{
    return this.storageService.get('user') !== this.user.id;
  }
}
