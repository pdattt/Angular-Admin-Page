import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: gapi.auth2.GoogleUser;
  
  constructor(private signInService: UserService, private router: Router) { }

  ngOnInit() {
    var user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if(user.Name != null) {
      if(window.location.href.match('http://localhost:4200/') || window.location.href.match('http://localhost:4200/login'))
        this.router.navigate(['/home/dashboard']);
        //window.location.href='http://localhost:4200/home';
    }
  }

  signIn () {
    // return new Promise((resolve, reject) => {
    //   this.signInService.signIn();
    // }).then( res => {
    //   console.log('login with google');
    //   window.location.href = "http://localhost:4200/home"
    // }); 


    this.signInService.signIn().then( res => {
      var auth2 = gapi.auth2.getAuthInstance();
      var profile = auth2.currentUser.get().getBasicProfile();
      var user = {
      Name: profile.getName(),
      Email: profile.getEmail()
      };
      sessionStorage.setItem('user', JSON.stringify(user));
      }).then(res => 
        this.router.navigate(['/home/dashboard'])
      );
    
    // var authInstance = gapi.auth2.getAuthInstance();
    // authInstance.then(function() {
      
    //   console.log("something");
    // });

    // if(this.user != null)
    //   window.location.href = "http://localhost:4200/home";

    //this.router.navigate(['/home']);

    
    // console.log(profile.getName());
    // console.log(profile.getEmail());
    // window.location.reload();
  }

}
