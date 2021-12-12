import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../../user';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  // Add an object variable to show error and success messages'
  message:any = {
    error: null,
    success: null
  };
  constructor(private authenticationService: AuthenticationService, private router: Router, private formBuilder: FormBuilder ) {

   }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }
  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    // Set them back to false
    this.message.error = null;
    this.message.success = null;
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      this.message.error = "Opps something went wrong. Ensure you fill in the right email format and a password up to 5 characters";
      return;
    }
    let form = new FormData();
    form.append('email', this.loginForm.controls.email.value);
    form.append('password', this.loginForm.controls.password.value);
    // Get the returned value and assign it to the success key in the message variable
    this.message.success = this.authenticationService.login(this.loginForm.value);
    // Just setting a timer to make it  more realistic when things go over the network for delay
    // Settimeout is a global function in javascrit that runs a specific function after a certain interval
    alert(this.message);
    setTimeout(()=>{
      // I will alert for now, if you want it to redirect you to the home page,
      // Comment the alert and Uncomment the return router line
      // return alert(this.message.success);
      return this.router.navigateByUrl('/');
    }, 3000);
  }

  createNewlogin() {
    this.authenticationService.createlogin('Testing').subscribe((response: any) =>{
      console.log(response);
    });
  }

}
