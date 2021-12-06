import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
