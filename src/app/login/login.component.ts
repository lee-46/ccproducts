import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router, private _snackBar: MatSnackBar) {
    this.loginForm = this.createLoginForm(_fb);
  }

  ngOnInit(): void {
  }

  createLoginForm(formBuilder: FormBuilder) {
    return formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.userid == 'admin' && this.loginForm.value.password == 'admin') {
        this._router.navigate(['/dashboard']);
      }
      else {
        this._snackBar.open("Invalid User Name or Password!", '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000
        });
      }
    }
  }

}
