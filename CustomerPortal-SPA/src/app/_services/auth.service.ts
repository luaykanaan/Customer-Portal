import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../_models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _jwtHelper = new JwtHelperService();
  private _authUrl = environment.apiUrl + 'auth/';
  private _isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;
  private _loggedInUserBasicInfoSubject: BehaviorSubject<User>;
  public loggedInUserBasicInfo$: Observable<User>;
  private _undecodedTokenSubject: BehaviorSubject<any>;
  public undecodedToken$: Observable<any>;

  constructor(private http: HttpClient) {
    this._isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedIn$ = this._isLoggedInSubject.asObservable();
    this._loggedInUserBasicInfoSubject = new BehaviorSubject<User>({});
    this.loggedInUserBasicInfo$ = this._loggedInUserBasicInfoSubject.asObservable();
    this._undecodedTokenSubject = new BehaviorSubject<any>({});
    this.undecodedToken$ = this._undecodedTokenSubject.asObservable();
   }

   checkLoginStatus() {
    this._isLoggedInSubject.next(false);
    const token = localStorage.getItem('currentToken');
    if (token) {
      if (!this._jwtHelper.isTokenExpired(token)) {
        this.setLoggedInUserBasicInfo(token);
        this._isLoggedInSubject.next(true);
      } else {
        localStorage.removeItem('currentToken');
      }
    }
    return;
  }

  login(model: any) {
    return this.http.post(this._authUrl + 'login', model).pipe(
      map( (response: any) => {
        if (response) {
          localStorage.setItem('currentToken', response.token);
          this.setLoggedInUserBasicInfo(response.token);
          this._isLoggedInSubject.next(true);
        }
      })
    );
  }

  setLoggedInUserBasicInfo(token: any) {
    this._undecodedTokenSubject.next(token);
    const dt = this._jwtHelper.decodeToken(token);
    const user: User = { id: dt.nameid, knownAs: dt.unique_name, role: dt.role, email: dt.email };
    this._loggedInUserBasicInfoSubject.next(user);
  }

  logout() {
      localStorage.removeItem('currentToken');
      this._isLoggedInSubject.next(false);
      this._loggedInUserBasicInfoSubject.next(null);
      this._undecodedTokenSubject.next(null);

  }

}
