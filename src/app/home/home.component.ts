import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  title = 'Project';
  user!: User

  constructor(private router: Router, private signInService: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    // if(this.user.Name != null) {
    //   if(window.location.href.match('http://localhost:4200/') || window.location.href.match('http://localhost:4200/login'))
    //     //this.router.navigate(['/home']);
    //     window.location.href='http://localhost:4200/home';
    // }
    if(this.user.Name == null) {
      if(!window.location.href.match('http://localhost:4200/') || !window.location.href.match('http://localhost:4200/login')) 
        //this.router.navigate(['/login']);
        window.location.href='http://localhost:4200/login';
    }
  }

}
