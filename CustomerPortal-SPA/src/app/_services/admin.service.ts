import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _apiUrl = environment.apiUrl + 'customers/';

  constructor(private http: HttpClient) { }

  addCustomer(user: User) {
    return this.http.post(this._apiUrl + 'add', user);
  }

}
