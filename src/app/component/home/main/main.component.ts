import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private storageService:StorageService,
              private route:Router) { }

  isEditing = false;
  ngOnInit(): void {
    this.checkUserLogin();
  }

  checkUserLogin(){
    if (this.storageService.isStorageEmpty){
      this.route.navigate(['/']);
    }
  }
}
