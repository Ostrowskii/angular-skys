import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        AuthHomeComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
    ]
})
export class AuthModule { }
