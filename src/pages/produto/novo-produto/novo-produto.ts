import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Restangular } from 'ng2-restangular';

import { IProdutoModel } from '../../../interfaces/IProdutoModel';
import { ToastService } from '../../../services/ToastService';

@Component({
    selector: 'page-novo_produto',
    templateUrl: 'novo-produto.html'
})
export class NovoProdutoPage {

  public espera: boolean = true;
  public produto: IProdutoModel = {
    id: 0,
    nome: "",
    cotado: false,
    usuario: JSON.parse(window.localStorage.getItem('usuarioLogado'))
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toast: ToastService,
              public restangular: Restangular) { }

  public cadastrarNovoProduto() {
    this.espera = false;

    var produto = this.restangular.all("produtos/cadastrarProduto");
    produto.post(this.produto).subscribe((response) => {
      if (response.sucesso) {
        this.toast.createToast("Produto cadastrado com suceso.");
      } else {
        this.toast.createToast(response.mensagem);
      }
    }),
    (error) => {
      this.toast.createToast(error);
    };
  }
}
