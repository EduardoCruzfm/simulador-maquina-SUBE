import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {

  ramales = [
    {
      nombre: 'Ramal 1 - Plaza Italia',
      secciones: [
        'Cabecera Lanús (empresa) – Puente Arenas',
        'Puente Arenas – Zepita',
        'Zepita – Amancio Alcorta',
        'Amancio Alcorta – Av. Belgrano',
        'Av. Belgrano – Av. Pueyrredón',
        'Av. Pueyrredón – Plaza Italia',
        'Embajada EEUU – Pueyrredón (vuelta)'
      ]
    },
    {
      nombre: 'Ramal 3 - Ciudad Universitaria por Figueroa Alcorta',
      secciones: [
        'Cabecera Lanús (empresa) – Puente Arenas',
        'Puente Arenas – Zepita',
        'Zepita – Amancio Alcorta',
        'Amancio Alcorta – Av. Belgrano',
        'Av. Belgrano – Av. Pueyrredón',
        'Av. Pueyrredón – Plaza Italia',
        'Plaza Italia – GEBA',
        'GEBA – Ciudad Universitaria',
        'Ciudad Universitaria – Dorrego (vuelta)',
      ]
    },
    {
      nombre: 'Ramal 4 - Ciudad Universitaria por Aeroparque',
      secciones: [
        'Cabecera Lanús (empresa) – Puente Arenas',
        'Puente Arenas – Zepita',
        'Zepita – Amancio Alcorta',
        'Amancio Alcorta – Av. Belgrano',
        'Av. Belgrano – Av. Pueyrredón',
        'Av. Pueyrredón – Plaza Italia',
        'Plaza Italia – Aeroparque',
        'Aeroparque – Ciudad Universitaria',
        'Ciudad Universitaria – Aeroparque (vuelta)',
      ]
    }
  ];

  selectedIndex = 0; // por defecto Ramal 1

  seleccionarRamal(index: number) {
    this.selectedIndex = index;
  }
   goBack() {
    window.history.back();
  }
}
