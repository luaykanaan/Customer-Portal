import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  loggedInUser: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(value => this.isLoggedIn = value );
    this.authService.loggedInUserBasicInfo$.subscribe(value => this.loggedInUser = value );
  }

}
