import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioFirstAnimationComponent } from './pages/inicio-first-animation/inicio-first-animation.component';
import { InicioSecondAnimationComponent } from './pages/inicio-second-animation/inicio-second-animation.component';

const routes: Routes = [
  {path:"", component: InicioFirstAnimationComponent },
  {path:"dreams", component: InicioSecondAnimationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
