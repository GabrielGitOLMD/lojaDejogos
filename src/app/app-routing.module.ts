import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'restrito',component: RestritoComponent, canActivate: [GuardGuard]},
  { path: 'produtos/:id', component: AtualizaProdutoComponent }, 
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
