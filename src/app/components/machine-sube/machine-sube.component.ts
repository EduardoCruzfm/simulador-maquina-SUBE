import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Boleto } from '../../types/boleto.type';
import { PREGUNTAS } from '../../data/preguntas.data';

@Component({
  selector: 'app-machine-sube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-sube.component.html',
  styleUrl: './machine-sube.component.css'
})
export class MachineSUBEComponent {

  boletos: Boleto[] = [451.01, 502.43, 541.13, 541.13, 579.87, 579.87, 579.87, 579.87];
  data: {} = PREGUNTAS;
  preguntaActual: any;
  section: number = 1;
  displayText: string = 'SECC. DESTINO _';
  date = new Date();
  hour = this.date.getHours().toString().padStart(2, '0');
  minutes = this.date.getMinutes().toString().padStart(2, '0');

  day = this.date.getDate();
  month = this.date.getMonth() + 1;
  shortDate = `${this.day}/${this.month}`;

  currenTime = `${this.hour}:${this.minutes}`;

  get currentValues(): Boleto[] {
    return this.boletos.map((valor, index) => {
      // Cada sección puede modificar los valores si es necesario
      return valor;
    });
  }

  pressButton(index: number) {
    const value: string | number = this.currentValues[index];

    if (value == 'SECCIÓN INVÁLIDA') {
      this.displayText = `${value}`;
      console.log(`Botón ${index + 1} presionado. ${value}`);
    }
    else{
      this.displayText = `IMPORTE A PAGAR:\n $${value}`;
      console.log(`Botón ${index + 1} presionado. Valor: $${value}`);
    }
  }

  cancel(){
    this.displayText = 'SECC. DESTINO _';
  }

  nextSection() {
    this.section++;

    if (this.section > this.boletos.length) {
      this.invalidSeccion();
      return;
    }

    // Actualizamos los boletos: desplazamos los valores
    const newValue = 'SECCIÓN INVÁLIDA';
    this.boletos = [
      newValue,
      ...this.boletos.slice(0, this.boletos.length - 1)
    ];

    console.log(`Sección cambiada: ${this.section}`);
    console.log('Nuevos valores de boletos:', this.boletos);
  }

  invalidSeccion() {
    this.displayText = `SECCIÓN INVÁLIDA`;
    console.log('Sección inválida');
  }

}
