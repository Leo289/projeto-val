// app.routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AgendamentoComponent } from './componentes/agendamento/agendamento.component';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { GaleriadefotosComponent } from './componentes/galeriadefotos/galeriadefotos.component';

const routes: Routes = [

      { path: '', component: CorpoComponent},
      { path: 'galeriadefotos', component: GaleriadefotosComponent},
      { path: 'agendamento', component: AgendamentoComponent, canActivate: [AuthGuard] },
      { path: '**', component: CorpoComponent }  // Wildcard route for a 404 page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
