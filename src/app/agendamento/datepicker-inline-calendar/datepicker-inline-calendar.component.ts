// datepicker-inline-calendar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker-inline-calendar',
  templateUrl: './datepicker-inline-calendar.component.html',
  styleUrls: ['./datepicker-inline-calendar.component.css']
})
export class DatepickerInlineCalendarComponent {
  selected!: Date | null;
  minDate = new Date();

  dateFilter = (d: Date | null): boolean => {
    if (!d) {
      return false;
    }

    const dayOfWeek = d.getDay(); // Obtenha o dia da semana (0 = domingo, 1 = segunda-feira, etc.)

    // Bloqueie domingos e segundas-feiras
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      return false;
    }

    const date = d.getDate();
    const month = d.getMonth() + 1; // Os meses são baseados em zero, então precisamos adicionar 1

    // Verifique se a data é um feriado, ignorando o ano
    switch (`${date}/${month}`) {
      case '1/1': // Ano Novo
      case '20/1': // Feriado no Rio de Janeiro
      case '21/4': // Tiradentes
      case '23/4': // Dia de São Jorge
      case '1/5': // Dia do Trabalho
      case '7/9': // Independência do Brasil
      case '12/10': // Nossa Senhora Aparecida
      case '16/10': // Dia do Comerciário
      case '2/11': // Finados
      case '15/11': // Proclamação da República
      case '25/12': // Natal
        return false; // Retorne false se for um feriado
      default:
        return true; // Retorne true se não for um feriado
    }
  };

  startAt = new Date(2023, 0, 1);
  maxDate: Date | null = new Date();

  constructor() {
    if (this.maxDate) {
      this.maxDate.setDate(this.maxDate.getDate() + 31);
    }
  }

  onDateChange(selectedDate: Date | null) {
    if (selectedDate !== null) {
      this.selected = selectedDate;
      console.log('Data selecionada:', this.selected);
      // Faça algo com a data selecionada
    }
  }
}
