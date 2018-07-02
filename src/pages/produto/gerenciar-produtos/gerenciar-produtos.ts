import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NovoProdutoPage } from '../novo-produto/novo-produto';

@Component({
    selector: 'page-gerenciar_produtos',
    templateUrl: 'gerenciar-produtos.html'
})
export class GerenciarProdutosPage {

  public usuarioLogado: string = JSON.parse(window.localStorage.getItem('usuarioLogado'));

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public cadastarNovoProduto() {
    this.navCtrl.push(NovoProdutoPage);
  }


}
