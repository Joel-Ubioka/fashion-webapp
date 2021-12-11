import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../../user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authenticationService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm  =  this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['',[ Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]]
  },
  {
    Validators: this.MustMatch('password', 'confirmpassword')
  })
  }

  get formControls() { return this.registerForm.controls}

  MustMatch(controlName:string , matchingControlName:string){
return(formGroup:FormGroup)=>{
  const control = formGroup.controls[controlName];
  const matchingControl = formGroup.controls[matchingControlName];
  if(matchingControl.errors && !matchingControl.errors.MustMatch){
    return
  }
  if(control.value !== matchingControl.value){
    matchingControl.setErrors({MustMatch:true});
  }
  else{
    matchingControl.setErrors(null);
  }
}
  }

  register(){
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.authenticationService.login(this.registerForm.value);
    this.router.navigateByUrl('/login');
  }

}
