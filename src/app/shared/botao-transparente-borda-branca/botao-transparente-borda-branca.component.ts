import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-transparente-borda-branca',
  templateUrl: './botao-transparente-borda-branca.component.html',
  styleUrls: ['./botao-transparente-borda-branca.component.css']
})
export class BotaoTransparenteBordaBrancaComponent{
  @Input() isComBorda: boolean = false;

}
