import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardapiosComponent } from './cardapios/cardapios.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { ListHamburguersComponent } from './cardapios-hamburgueres/list-hamburguers/list-hamburguers.component';
import { ListarBebidasComponent } from './cardapios-bebidas/listar-bebidas/listar-bebidas.component';
import { ListarPratosComponent } from './cardapios-pratos/listar-pratos/listar-pratos.component';
import { ListarAperitivosComponent } from './cardapios-aperitivos/listar-aperitivos/listar-aperitivos.component';
import { FritasComponent } from './fritas/fritas.component';
import { CarrinhoComponent } from "./carrinho/carrinho.component";




const routes: Routes = [

  { pathMatch: 'full', path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar', component: RecuperarSenhaComponent },
  { path: 'cardapio-hamburgueres', component: ListHamburguersComponent },
  { path: 'cardapio-bebidas', component: ListarBebidasComponent },
  { path: 'cardapio-pratos', component: ListarPratosComponent },
  { path: 'cardapio-aperitivos', component: ListarAperitivosComponent },
  { path: 'cardapio', component:CardapiosComponent },
  { path: 'porcao-de-fritas', component:FritasComponent },
  { path: 'carrinho', component:CarrinhoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
