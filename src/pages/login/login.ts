import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NovoUsuarioPage } from '../usuario/novo-usuario/novo-usuario';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) { }

  public cadastrarNovoUsuario() {
    this.navCtrl.push(NovoUsuarioPage);
  }
}
