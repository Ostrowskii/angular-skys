import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-first-animation',
  templateUrl: './inicio-first-animation.component.html',
  styleUrls: ['./inicio-first-animation.component.css']
})
export class InicioFirstAnimationComponent implements OnInit {
  constructor(private router: Router){

  }

  ngOnInit(): void {

    let classe = document.querySelector('.container-animation')

    setTimeout(() => {
      classe?.setAttribute('class','container-animation fade-out')
      setTimeout(() =>{
        this.router.navigate(["/dreams"])
      }, 3000)

    }, 3000 );
  }

}
