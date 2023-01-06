import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSwiperComponent } from './components/auth-swiper/auth-swiper.component';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';

const routes: Routes = [
  {path:"home", component: AuthHomeComponent},
  {path:"sw", component: AuthSwiperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
