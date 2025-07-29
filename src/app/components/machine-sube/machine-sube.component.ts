import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-sube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-sube.component.html',
  styleUrl: './machine-sube.component.css'
})
export class MachineSUBEComponent {

  boletos: any[] = [451.01, 502.43, 541.13, 541.13, 579.87, 579.87, 579.87, 579.87];
  seccion: number = 1;
  date = new Date();
  hour = this.date.getHours().toString().padStart(2, '0');
  minutes = this.date.getMinutes().toString().padStart(2, '0');

  day = this.date.getDate();
  month = this.date.getMonth() + 1;
  shortDate = `${this.day}/${this.month}`;

  currenTime = `${this.hour}:${this.minutes}`;

  get currentValues(): number[] {
    return this.boletos.map((valor, index) => {
      // Cada sección puede modificar los valores si es necesario
      return valor;
    });
  }

  presionarBoton(index: number) {
    const valor = this.currentValues[index];
    console.log(`Botón ${index + 1} presionado. Valor: $${valor}`);
  }


  nextSection() {
    this.seccion++;

    if (this.seccion > this.boletos.length) {
      this.invalidSeccion();
      return;
    }

    // Actualizamos los boletos: desplazamos los valores
    const nuevoValor = 'Sección inválida';
    this.boletos = [
      nuevoValor,
      ...this.boletos.slice(0, this.boletos.length - 1)
    ];

    console.log(`Sección cambiada: ${this.seccion}`);
    console.log('Nuevos valores de boletos:', this.boletos);
  }

  invalidSeccion() {
    console.log('Sección inválida');
  }
}
