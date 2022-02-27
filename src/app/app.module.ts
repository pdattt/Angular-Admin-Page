import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { NavMainComponent } from './nav-main/nav-main.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { UserService } from './services/user.service';
import { CustomerService } from './services/customer.service';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavHomeComponent } from './home/nav-home/nav-home.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { FooterHomeComponent } from './home/content/footer-home/footer-home.component';
import { NavSideComponent } from './home/nav-side/nav-side.component';
import { ContentComponent } from './home/content/content.component';
import { CustomersComponent } from './home/content/customers/customers.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterMainComponent,
    NavMainComponent,
    PagenotfoundComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavHomeComponent,
    HeaderHomeComponent,
    FooterHomeComponent,
    NavSideComponent,
    ContentComponent,
    CustomersComponent,
    DashboardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [
    UserService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
