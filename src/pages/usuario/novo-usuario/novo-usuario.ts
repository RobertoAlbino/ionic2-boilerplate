import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Restangular } from 'ng2-restangular';

import { IUsuarioModel, EPerfil } from '../../../interfaces/IUsuarioModel';
import { ToastService } from '../../../services/ToastService';

@Component({
    selector: 'page-novo_usuario',
    templateUrl: 'novo-usuario.html'
})
export class NovoUsuarioPage {

  public espera: boolean = true;
  public usuario: IUsuarioModel = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    segundaSenha: "",
    perfil: EPerfil.Usuario
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastService: ToastService,
              public restangular: Restangular) { }

  public validarSenhas(): Boolean {
    return this.usuario.senha === this.usuario.segundaSenha;
  }

  public cadastrarNovoUsuario() {
    this.espera = false;
    if (!this.validarSenhas()) {
      this.toastService.createToast("Divergência nas senhas digitadas.");
      this.espera = true;
      return;
    }

    let criarUsuario = this.restangular.all("usuarios/criar");
    criarUsuario.post(this.usuario).subscribe((response) => {
      response.sucesso ? this.toastService.createToast(response.mensagem) : this.toastService.createToast(response.mensagem);
      this.espera = true;
    }),
    (error) => {
      this.toastService.createToast(error);
      this.espera = true;
    };
  }
}
  
