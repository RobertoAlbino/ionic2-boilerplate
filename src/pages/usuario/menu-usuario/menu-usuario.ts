import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../../login/login';
import { GerenciarProdutosPage } from '../../produto/gerenciar-produtos/gerenciar-produtos';

@Component({
    selector: 'page-menu_usuario',
    templateUrl: 'menu-usuario.html'
})
export class MenuUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public redirecionarCotacao() {

  }

  public redirecionarProdutos() {
    this.navCtrl.push(GerenciarProdutosPage);
  }

  public redirecionarFornecedores() {

  }

  public sair() {
    this.navCtrl.push(LoginPage);
  }
}
