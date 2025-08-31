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
  currentQuestion: any;
  section: number = 1;
  displayText: string = 'SECC. DESTINO _';
  date = new Date();
  hour = this.date.getHours().toString().padStart(2, '0');
  minutes = this.date.getMinutes().toString().padStart(2, '0');

  day = this.date.getDate();
  month = this.date.getMonth() + 1;
  shortDate = `${this.day}/${this.month}`;

  currenTime = `${this.hour}:${this.minutes}`;

  respuestaSeleccionada: number | null = null;
  esCorrecta: boolean | null = null;

  ngOnInit() {
    this.loadQuestion();
  }

  get currentValues(): Boleto[] {
    return this.boletos.map((valor, index) => {
      // Cada sección puede modificar los valores si es necesario
      return valor;
    });
  }

  pressButton(index: number) {
    const value: string | number = this.currentValues[index];
    this.respuestaSeleccionada = index;

    if (value == 'SECCIÓN INVÁLIDA') {
      this.displayText = `${value}`;
      console.log(`Botón ${index + 1} presionado. ${value}`);
    }
    else{
      this.displayText = `IMPORTE A PAGAR:\n $${value}`;
      console.log(`Botón ${index + 1} presionado. Valor: $${value}`);
      this.backgroundColor(index);
      // otra ves cargar la pregunta
      // this.loadQuestion();
    }
  }

  backgroundColor(index: number){
    // cambiar el color al presionar el boton
    if (this.currentQuestion && this.currentQuestion.respuesta == index + 1) {
      console.log('Respuesta correcta');
      this.esCorrecta = true;

      setTimeout(() => {
        this.esCorrecta = null;
        this.loadQuestion();
      }, 1000); // Espera 1 segundo antes de cambiar a la siguiente sección
    }
    else{
      console.log('Respuesta incorrecta');
      this.esCorrecta = false;
    }

    // si el la respuesta es correcta cambiar el color a verde el fondo del div

    
  }

  cancel(){
    this.displayText = 'SECC. DESTINO _';
  }

  nextSection() {
    this.section++;
    this.esCorrecta = null;

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

    this.loadQuestion()
    console.log(`Sección cambiada: ${this.section}`);
    console.log('Nuevos valores de boletos:', this.boletos);
  }

  invalidSeccion() {
    this.displayText = `SECCIÓN INVÁLIDA`;
    console.log('Sección inválida');
  }

  loadQuestion() {
    const allSections = Object.keys(PREGUNTAS);

    // Filtrar solo secciones posteriores a la actual
    const filteredSections = allSections.filter(key => {
      const numSection = Number(PREGUNTAS[key][0].seccion);
      return numSection > this.section; // posterior a la actual
    });

    if (filteredSections.length === 0) {
      this.currentQuestion = null;
      return;
    }

    // Elegir sección al azar
    const RandomKeySection = filteredSections[Math.floor(Math.random() * filteredSections.length)];
    const questionBase = PREGUNTAS[RandomKeySection][0];

    // Elegir lugar al azar
    const lugares = questionBase.Lugares;
    const lugarRandom = lugares[Math.floor(Math.random() * lugares.length)];

    // Guardar pregunta actual con respuesta incluida
    this.currentQuestion = {
      seccion: questionBase.seccion,
      lugar: lugarRandom,
      respuesta: questionBase.respuesta
    };
  }

  goBack() {
  window.history.back();
}

}
