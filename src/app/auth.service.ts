import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {environment} from 'src/environments/environment'

const apiUrlAuth = environment.apiUrlAuth

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  isAuth = new BehaviorSubject<boolean>(false);
  postLogin(dataToken){ 
    
    return this.http.post(`${apiUrlAuth}` , dataToken);
   }
}
