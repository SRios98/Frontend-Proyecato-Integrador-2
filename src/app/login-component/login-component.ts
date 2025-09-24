import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
