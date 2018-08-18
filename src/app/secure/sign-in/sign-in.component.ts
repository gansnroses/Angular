import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  private model={
                  username:"ravi",
                  password:"P@ssw0rd123",
                };

  message: string;
  
  constructor(private authService: AuthService) {
    this.message = '';
  }

  ngOnInit() { }

  login(form:any): boolean {
    this.message = '';
    if (!this.authService.login(form.username, form.password)) {
      this.message = 'Invalid User';
      setTimeout(function() {
                              this.message = '';
                            }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}