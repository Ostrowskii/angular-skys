import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { SharedModule } from "../../shared/shared.module";
import { AuthSwiperComponent } from './components/auth-swiper/auth-swiper.component';
import { SwiperModule } from "swiper/angular";
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';
import { AuthQuizComponent } from './pages/auth-quiz/auth-quiz.component';
import { AuthBarraPaginaComponent } from './components/auth-barra-pagina/auth-barra-pagina.component';

@NgModule({
    declarations: [
        AuthHomeComponent,
        AuthSwiperComponent,
        AuthRegisterComponent,
        AuthQuizComponent,
        AuthBarraPaginaComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        SwiperModule
    ]
})
export class AuthModule { }
