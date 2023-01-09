import { Component } from '@angular/core';

@Component({
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent {
  listaDeOpcoes: string[] = ["Marketing", "Biz Strategy", "Acquistion", "Franchising", "Biz Development", "Leadership", "Human Resources", "Logistics", "Finances", "E-Commerce", "opcao 1", "opcao 2", "opcao 3", "opcao 4"];
  listaDeOpcoesSelecionadas: string[] = [];



  selecionarItem(item:string){
    if(!this.listaDeOpcoesSelecionadas.includes(item)){
      this.listaDeOpcoesSelecionadas.push(item);
    }else{
      let index = this.listaDeOpcoesSelecionadas.indexOf(item);
      this.listaDeOpcoesSelecionadas.splice(index, 1);
    }
  }
}
