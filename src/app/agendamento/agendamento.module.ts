//agendamento.module.ts
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerInlineCalendarComponent } from './datepicker-inline-calendar/datepicker-inline-calendar.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DatepickerInlineCalendarComponent,
    AgendamentoComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule
  ],

  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },

  ],

  bootstrap: [DatepickerInlineCalendarComponent],
  exports: [DatepickerInlineCalendarComponent],
})
export class AgendamentoModule { }
