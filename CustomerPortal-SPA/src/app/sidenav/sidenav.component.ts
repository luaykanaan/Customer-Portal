import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isLoggedIn = false;
  loggedInUser: User;
  isCustomer = false;
  isAdmin = false;
  isSupport = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.setValues();
  }

  setValues() {
    this.authService.isLoggedIn$.subscribe(value => this.isLoggedIn = value );
    this.authService.loggedInUserBasicInfo$.subscribe(value => {
      this.loggedInUser = value;
      if (!(Object.keys(value).length === 0 && value.constructor === Object)) {
        if (value.role === 'Admin') {
          this.isAdmin = true;
        }
        if (value.role === 'Support') {
          this.isSupport = true;
        }
        if (value.role === 'Customer') {
          this.isCustomer = true;
        }
      }
    });
  }

}
