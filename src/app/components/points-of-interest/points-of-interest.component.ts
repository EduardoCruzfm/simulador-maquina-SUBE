import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-points-of-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points-of-interest.component.html',
  styleUrl: './points-of-interest.component.css'
})
export class PointsOfInterestComponent {

   puntos = [
    { lugar: 'Sagrado Corazón', parada: 'California' },
    { lugar: 'Estación Buenos Aires', parada: 'Miravé' },
    { lugar: 'Instituto Malbrán', parada: 'Miravé' },
    { lugar: 'SAME / Cancha Huracán', parada: 'Amancio Alcorta' },
    { lugar: 'Hospital Muñiz', parada: 'Uspallata' },
    { lugar: 'Hospital Udaondo / Británico', parada: 'Caseros' },
    { lugar: 'Hospital Garrahan', parada: '15 de Noviembre' },
    { lugar: 'Hospital de ojos Santa Lucía', parada: 'San Juan' },
    { lugar: 'Fundación Favaloro', parada: 'Belgrano' },
    { lugar: 'Facultad de medicina / económicas', parada: 'Córdoba' },
    { lugar: 'Hospital de Clínicas', parada: 'Córdoba' },
    { lugar: 'Comisaría 17 / Cementerio Recoleta / Shopping Recoleta', parada: 'Junín' },
    { lugar: 'Facultad de Ingeniería / Sanatorio Anchorena', parada: 'Pueyrredón' },
    { lugar: 'Hospital Rivadavia', parada: 'Tagle' },
    { lugar: 'Hospital Fernández', parada: 'Parque Las Heras' },
    { lugar: 'Jardín Japonés', parada: 'Casares y Figueroa Alcorta (ramal 3 y 4)' },
    { lugar: 'Rosedal', parada: 'Embajada (ramal 1) | Figueroa Alcorta y Sarmiento (ramal 3 y 4)' },
    { lugar: 'Planetario', parada: 'Figueroa Alcorta y Sarmiento (ramal 3 y 4) | Planetario (ramal 4)' }
  ];

  goBack() {
    window.history.back();
  }
}

