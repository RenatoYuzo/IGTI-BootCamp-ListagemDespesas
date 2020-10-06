import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasSenadorComponent } from './despesas-senador/despesas-senador.component';
import { SenadorComponent } from './senador/senador.component';

const routes: Routes = [
  { path: 'senadores', component: SenadorComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
  { path: 'senadores/:id', component: DespesasSenadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
