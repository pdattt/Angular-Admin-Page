import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project';
  user!: User

  constructor(private router: Router, private signInService: UserService) { 

    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if(this.user.Name != null)
      console.log(this.user.Name);

    // console.log(window.location.pathname);
    // if(this.user != null) {
    //   if(!window.location.pathname.match('http://localhost:4200/') || !window.location.pathname.match('http://localhost:4200/login')) {
    //     this.router.navigate(['/home']);
    //     //window.location.href='/home';
    //   }
    // }
    // else {
    //   if(!window.location.pathname.match('http://localhost:4200/login')) {
    //     this.router.navigate(['/login']);
    //     //window.location.href='/home';
    //   }
    // }
  }

  ngOnInit() { }
}
