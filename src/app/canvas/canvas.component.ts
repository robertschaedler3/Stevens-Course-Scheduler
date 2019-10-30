import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    // public auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@stevens\.edu$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  async onSubmit() {
    const formValue = this.signinForm.value;
    var email = formValue.email;
    var pass = formValue.password;
    // this.auth.signIn(email, pass);
  }

}
