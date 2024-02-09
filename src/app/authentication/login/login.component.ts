import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string

  login() {
    // Add your login logic here
    console.log('Login clicked');
  }
}
