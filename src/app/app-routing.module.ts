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
import { DesignSobrancelhasComponent } from './produtos/design-sobrancelhas/design-sobrancelhas.component';
import { EscovaComponent } from './produtos/escova/escova.component';
import { HidratacaoCapilarComponent } from './produtos/hidratacao-capilar/hidratacao-capilar.component';
import { ManicureComponent } from './produtos/manicure/manicure.component';
import { MaquiagemComponent } from './produtos/maquiagem/maquiagem.component';
import { PedicureComponent } from './produtos/pedicure/pedicure.component';
import { ColoracaoComponent } from './produtos/coloracao/coloracao.component';
import { SpaDosPesComponent } from './produtos/spa-dos-pes/spa-dos-pes.component';

const routes: Routes = [

      { path: '', component: CorpoComponent},
      { path: 'galeriadefotos', component: GaleriadefotosComponent},
      { path: 'agendamento', component: AgendamentoComponent, canActivate: [AuthGuard] },

      // links dps serviços
  { path: 'cortes-masculinos', component: CortesMasculinosComponent },
  { path: 'cortes-femininos', component: CortesFemininosComponent },
  { path: 'coloracao', component: ColoracaoComponent },
  { path: 'spa-dos-pes', component: SpaDosPesComponent },
  { path: 'design-sobrancelhas', component: DesignSobrancelhasComponent },
  { path: 'escova', component: EscovaComponent },
  { path: 'hidratacao-capilar', component: HidratacaoCapilarComponent },
  { path: 'manicure', component: ManicureComponent },
  { path: 'maquiagem', component: MaquiagemComponent },
  { path: 'pedicure', component: PedicureComponent },

  { path: '**', component: CorpoComponent }  // Wildcard route for a 404 page
                                             //   (Rota curinga para uma página 404)


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
