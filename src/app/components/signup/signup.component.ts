import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password"

  constructor(){}

  ngOnInit(): void {

  }

  hideShowPass(){

  }
}
