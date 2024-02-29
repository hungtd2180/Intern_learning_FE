import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
const API_URL = 'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getUser(id:string) : Observable<User>{
    return this.httpClient.get<User>(API_URL + '/users/' + id);
  }

  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL + '/users')
  }
  updateUser(user : User) : Observable<User>{
    return this.httpClient.put<User>(API_URL + '/users', user);
  }
  deleteUser(id : string) : Observable<User>{
    return this.httpClient.delete<User>(API_URL + '/users/' + id)
  }
}
