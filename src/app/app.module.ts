import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RestangularModule, Restangular } from 'ng2-restangular';

// Componentes da aplicação
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { NovoUsuarioPage } from '../pages/usuario/novo-usuario/novo-usuario';
import { MenuUsuarioPage } from '../pages/usuario/menu-usuario/menu-usuario';
import { GerenciarProdutosPage } from '../pages/produto/gerenciar-produtos/gerenciar-produtos';
import { NovoProdutoPage } from '../pages/produto/novo-produto/novo-produto';
import { ToastService } from '../services/ToastService';

// Configurações globais do Restangular
export function RestangularConfigFactory(RestangularProvider) {
  //RestangularProvider.setBaseUrl('http://localhost:8080/api/'); // Desenvolvimento
  RestangularProvider.setBaseUrl('https://cota-easy-api.herokuapp.com/api/'); // Produção
  RestangularProvider.setDefaultHeaders({ "Content-Type": 'application/json' });
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NovoUsuarioPage,
    MenuUsuarioPage,
    GerenciarProdutosPage,
    NovoProdutoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NovoUsuarioPage,
    MenuUsuarioPage,
    GerenciarProdutosPage,
    NovoProdutoPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ToastService ]
})
export class AppModule {}
