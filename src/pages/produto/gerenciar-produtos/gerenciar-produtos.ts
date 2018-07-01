import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-gerenciar_produtos',
    templateUrl: 'gerenciar-produtos.html'
})
export class GerenciarProdutosPage {
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
