import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoTransparenteBordaBrancaComponent } from './botao-transparente-borda-branca/botao-transparente-borda-branca.component';
import { InicioRoutingModule } from '../features/inicio/inicio-routing.module';



@NgModule({
  declarations: [
    BotaoTransparenteBordaBrancaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports: [
    BotaoTransparenteBordaBrancaComponent
  ]
})
export class SharedModule { }
