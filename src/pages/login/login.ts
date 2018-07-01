import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Restangular } from 'ng2-restangular';

import { NovoUsuarioPage } from '../usuario/novo-usuario/novo-usuario';
import { MenuUsuarioPage } from '../usuario/menu-usuario/menu-usuario';
import { ILoginModel } from '../../interfaces/ILoginModel';
import { ToastService } from '../../services/ToastService';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

  public espera: boolean = true;
  public login: ILoginModel = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public toastService: ToastService, public restangular: Restangular) { }

  private loginValido = function () {
    return this.login.email || this.login.senha ? true : false;
  }

  private armazenarLocalmenteUsuarioLogado = function (retornoLogin) {
    window.localStorage.setItem('usuarioLogado', JSON.stringify(retornoLogin.objeto.id));
  }

  private processoPosLoginSucesso(objetoLogin: any) {
    this.armazenarLocalmenteUsuarioLogado(objetoLogin);
    objetoLogin.objeto.perfil === "USUARIO" ? this.navCtrl.push(MenuUsuarioPage) : null;
    this.espera = true;
  }

  private processoPosLoginProblema(objetoLogin: any) {
    this.toastService.createToast(objetoLogin.mensagem);
    this.espera = true;
  }

  public cadastrarNovoUsuario() {
    this.navCtrl.push(NovoUsuarioPage);
  }

  public logar = function () {
    let classContext = this;
    this.espera = false;
    if (!this.loginValido()) {
      this.toastService.createToast("Nem todas as informações de login estão corretas.");
      this.espera = true;
      return;
    }

    var logar = this.restangular.all("login/logar");
    logar.post(this.login).subscribe((retornoLogin) => {
      if (retornoLogin.sucesso) {
        classContext.processoPosLoginSucesso(retornoLogin);
      } else {
        classContext.processoPosLoginProblema(retornoLogin);
      }
    });
  }
}
