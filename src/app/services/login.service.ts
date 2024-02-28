import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../models/Login";
import {Observable} from "rxjs";
const API_URL='http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  login(login: Login) : Observable<Login>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<any>(API_URL + '/login/check', login, {headers});
  }
}
