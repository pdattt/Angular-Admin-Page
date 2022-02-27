import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { CustomersComponent } from './home/content/customers/customers.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', component: AccountComponent, children: [    
    {path:'', component: LoginComponent}
  ]},
  {path:'login', component: AccountComponent, children: [
    {path:'', component: LoginComponent}
  ]},
  {path:'register', component: AccountComponent, children: [
    {path:'', component: RegisterComponent}
  ]},
  {path: 'home', component: HomeComponent, children: [
    {path: 'customers', component: CustomersComponent},
    {path: 'dashboard', component: DashboardComponent}
  ]},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
