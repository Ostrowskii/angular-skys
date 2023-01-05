import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioFirstAnimationComponent } from './pages/inicio-first-animation/inicio-first-animation.component';
import { InicioSecondAnimationComponent } from './pages/inicio-second-animation/inicio-second-animation.component';



@NgModule({
  declarations: [
    InicioFirstAnimationComponent,
    InicioSecondAnimationComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
