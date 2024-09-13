import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";  // Uncomment if needed

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const username = this.loginFormGroup.value.username;
    const password = this.loginFormGroup.value.password;
    let auth = this.authService.login(username, password);
    if (auth == true) {
      this.router.navigateByUrl("/admin");
    }
  }
}
