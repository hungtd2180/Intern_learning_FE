import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../models/Login";
const API_URL='http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  register(login : Login){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<any>(API_URL + '/register', login, {headers});
  }
}
