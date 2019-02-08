import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'addcustomer', component: AddCustomerComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
