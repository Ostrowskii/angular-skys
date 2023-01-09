import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoTransparenteBordaBrancaComponent } from './botao-transparente-borda-branca/botao-transparente-borda-branca.component';
import { InicioRoutingModule } from '../features/inicio/inicio-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ListSelectComponent } from './list-select/list-select.component';
// import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [
    BotaoTransparenteBordaBrancaComponent,
    ListSelectComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ReactiveFormsModule,
    // SwiperModule
  ],
  exports: [
    BotaoTransparenteBordaBrancaComponent,
    ReactiveFormsModule,
    ListSelectComponent,
    // SwiperModule
  ]
})
export class SharedModule { }
