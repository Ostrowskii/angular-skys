import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-second-animation',
  templateUrl: './inicio-second-animation.component.html',
  styleUrls: ['./inicio-second-animation.component.css']
})
export class InicioSecondAnimationComponent implements OnInit {
  constructor(private router: Router){

  }
  ngOnInit(): void {


    let mudarclasse = document.querySelector('.main-container')

    setTimeout(() => {
      mudarclasse?.setAttribute('class','main-container fade-in fade-out')
      setTimeout(() =>{
        this.router.navigate(["/home"])
      }, 3000)

    }, 3000 );
  }


}
