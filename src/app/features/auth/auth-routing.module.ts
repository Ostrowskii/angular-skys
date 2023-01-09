import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSwiperComponent } from './components/auth-swiper/auth-swiper.component';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { AuthQuizComponent } from './pages/auth-quiz/auth-quiz.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';

const routes: Routes = [
  {path:"home", component: AuthHomeComponent},
  {path:"register", component: AuthRegisterComponent},
  {path:"sw", component: AuthSwiperComponent},
  {path:"quiz", component: AuthQuizComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
