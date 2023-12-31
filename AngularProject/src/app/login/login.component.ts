import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder) {
   
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:  ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
    })
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if(this.loginForm.invalid) {
      return;
    }
     // display form values on success
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }
  

}
