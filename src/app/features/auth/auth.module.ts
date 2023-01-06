import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { SharedModule } from "../../shared/shared.module";
import { AuthSwiperComponent } from './components/auth-swiper/auth-swiper.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
    declarations: [
        AuthHomeComponent,
        AuthSwiperComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        SwiperModule
    ]
})
export class AuthModule { }
