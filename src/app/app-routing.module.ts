// app.routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AgendamentoComponent } from './componentes/agendamento/agendamento.component';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { GaleriadefotosComponent } from './componentes/galeriadefotos/galeriadefotos.component';

// componentes  de serviços
import { CortesMasculinosComponent } from '../app/produtos/cortes-masculinos/cortes-masculinos.component';
import { CortesFemininosComponent } from '../app/produtos/cortes-femininos/cortes-femininos.component';
import { DepilacaoComponent } from './produtos/depilacao/depilacao.component';
import { DesignSobrancelhasComponent } from './produtos/design-sobrancelhas/design-sobrancelhas.component';
import { EscovaComponent } from './produtos/escova/escova.component';
import { HidratacaoCapilarComponent } from './produtos/hidratacao-capilar/hidratacao-capilar.component';
import { LimpezaPeleComponent } from './produtos/limpeza-pele/limpeza-pele.component';
import { ManicureComponent } from './produtos/manicure/manicure.component';
import { MaquiagemComponent } from './produtos/maquiagem/maquiagem.component';
import { PedicureComponent } from './produtos/pedicure/pedicure.component';

const routes: Routes = [

      { path: '', component: CorpoComponent},
      { path: 'galeriadefotos', component: GaleriadefotosComponent},
      { path: 'agendamento', component: AgendamentoComponent, canActivate: [AuthGuard] },

      // links dps serviços
  { path: 'cortes-masculinos', component: CortesMasculinosComponent },
  { path: 'cortes-femininos', component: CortesFemininosComponent },
  { path: 'depilacao', component: DepilacaoComponent },
  { path: 'design-sobrancelhas', component: DesignSobrancelhasComponent },
  { path: 'escova', component: EscovaComponent },
  { path: 'hidratacao-capilar', component: HidratacaoCapilarComponent },
  { path: 'limpeza-pele', component: LimpezaPeleComponent },
  { path: 'manicure', component: ManicureComponent },
  { path: 'maquiagem', component: MaquiagemComponent },
  { path: 'pedicure', component: PedicureComponent },

      { path: '**', component: CorpoComponent }  // Wildcard route for a 404 page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
