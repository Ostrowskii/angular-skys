import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent {

  constructor(private router: Router){

  }
  acessarPagina(){
    this.router.navigate(["/register"])
  }
}
