// produtos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CortesMasculinosComponent } from './cortes-masculinos/cortes-masculinos.component';
import { CortesFemininosComponent } from './cortes-femininos/cortes-femininos.component';
import { ColoracaoComponent } from './coloracao/coloracao.component';
import { ManicureComponent } from './manicure/manicure.component';
import { PedicureComponent } from './pedicure/pedicure.component';
import { DepilacaoComponent } from './depilacao/depilacao.component';
import { DesignSobrancelhasComponent } from './design-sobrancelhas/design-sobrancelhas.component';
import { HidratacaoCapilarComponent } from './hidratacao-capilar/hidratacao-capilar.component';
import { EscovaComponent } from './escova/escova.component';
import { MaquiagemComponent } from './maquiagem/maquiagem.component';
import { MassagemComponent } from './massagem/massagem.component';
import { LimpezaPeleComponent } from './limpeza-pele/limpeza-pele.component';
import { SpaDosPesComponent } from './spa-dos-pes/spa-dos-pes.component';



@NgModule({
  declarations: [
    CortesMasculinosComponent,
    CortesFemininosComponent,
    ColoracaoComponent,
    ManicureComponent,
    PedicureComponent,
    DepilacaoComponent,
    DesignSobrancelhasComponent,
    HidratacaoCapilarComponent,
    EscovaComponent,
    MaquiagemComponent,
    MassagemComponent,
    LimpezaPeleComponent,
    SpaDosPesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
