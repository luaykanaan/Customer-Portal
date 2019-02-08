import { JwtInterceptor } from './_services/jwt-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './_services/auth.service';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TopAlertComponent } from './top-alert/top-alert.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { SidenavCustomersComponent } from './sidenav-customers/sidenav-customers.component';
import { SidenavSupportComponent } from './sidenav-support/sidenav-support.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { AvatarModule } from 'ngx-avatar';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AdminService } from './_services/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    CustomersComponent,
    HomeComponent,
    AdminComponent,
    TopAlertComponent,
    TopNavComponent,
    SidenavComponent,
    SidenavAdminComponent,
    SidenavCustomersComponent,
    SidenavSupportComponent,
    NotFoundComponent,
    MainAreaComponent,
    AddCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'en-DE' },
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
