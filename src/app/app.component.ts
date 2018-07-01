import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = LoginPage;
  public pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: 'Login', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  public abrirPagina(pagina) {
    this.nav.setRoot(pagina.component);
  }
}
