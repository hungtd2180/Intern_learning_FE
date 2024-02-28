import { Injectable } from '@angular/core';
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
const API_URL = 'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getUser(id:number) : Observable<User>{
    return this.httpClient.get<User>(API_URL + '/users/' + id);
  }

  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL + '/users')
  }
}
