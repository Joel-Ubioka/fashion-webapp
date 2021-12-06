import { Injectable } from '@angular/core';
import { User } from '../user';
import { WebrequestService } from '../webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private webrequestservice: WebrequestService) { }

  createlogin(title: string) {
    // we want to send a webrequest to create a list
    return this.webrequestservice.post('login', {title});
  }

  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}