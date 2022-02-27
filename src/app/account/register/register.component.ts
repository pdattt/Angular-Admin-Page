import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = {};
  constructor() { }

  ngOnInit(): void { }

  Register() {
    console.log(this.newUser);
  }

}
