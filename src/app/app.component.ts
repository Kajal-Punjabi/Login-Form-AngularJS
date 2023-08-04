import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Form';
  loginForm= new FormGroup(
    {
      user: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      email: new FormControl('',[Validators.required, Validators.email])
    }
  )
  
  userLogin()
  {
    console.warn(this.loginForm.value);
  }
  get user()
  {
    return this.loginForm.get('user')
  }
  get password()
  {
    return this.loginForm.get('password')
  }
  get email()
  {
    return this.loginForm.get('email')
  }
}
