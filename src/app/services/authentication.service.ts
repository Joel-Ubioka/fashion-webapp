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
    // When using Api you will be making the http call here which the calling function subscribes to.
    const newToken = this.generateUniqueToken(32);
    // I will console this when you click the submit button . when you check, go to your
    console.log(newToken);
    localStorage.setItem('ACCESS_TOKEN', newToken);
    // application tab in your dev tool and locate the local storage menu.
    // You should see a key of ACCESS_TOKEN with the value {newToken} which was consoled
    // Return to the caller the string.
    return 'You have sucessfully logged in';
  }

  // Generate random alphanumreic string between a specific range
  private generateUniqueToken(length:number){
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i){
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
