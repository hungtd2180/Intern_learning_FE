import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() status = false;
  @Output() isShowing = new EventEmitter();
  constructor(private storageService : StorageService) { }

  ngOnInit(): void {
  }
  dashboardClick(){
    this.isShowing.emit();
    this.storageService.remove('edit');
  }
}
