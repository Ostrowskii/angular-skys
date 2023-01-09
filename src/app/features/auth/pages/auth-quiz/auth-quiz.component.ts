import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-quiz',
  templateUrl: './auth-quiz.component.html',
  styleUrls: ['./auth-quiz.component.css']
})
export class AuthQuizComponent {


  constructor(private router: Router){

  }
  acessarPagina(){
    this.router.navigate(["/register"])
  }
}
