export interface Pregunta {
  seccion: string;
  Lugares: string[];
  respuesta: number;
}

export const PREGUNTAS: Record<string, Pregunta[]> = 
{
  "Cabecera Lanús": [
    {
      "seccion": "1",
      "Lugares": ["Estacion Lanus", "Municipalidad", "Andrade", "Clinica Modelo", "Puente de Arena"],
      "respuesta": 1
    }
  ],
  "Puente de Arena": [
    {
      "seccion": "2",
      "Lugares": ["Puente Gerli", "Cabildo", "Cabildo y Santa Fe", "Galicia", "Rivadavia", 
                  "Shopping", "Andreani", "Puente velez sarfield", "Avellaneda", "Piñeiro", "Zepita"],
      "respuesta": 2
    }
  ],
  "Zepita": [
    {
      "seccion": "3",
      "Lugares": ["Osvaldo Cruz", "Plaza", "Iriarte", "Alvarado", "California", "Suarez", 
                  "Amancio Alcorta", "Estacion Buenos Aires", "Cancha de Huracan"],
      "respuesta": 3
    }
  ],
  "Av. Alcorta": [
    {
      "seccion": "4",
      "Lugares": ["Caseros", "Av. Garay", "Av. San Juan", "Av. Independencia", "Entre Rios",
                   "Los Patos", "Uspallata", "Mexico", "Av. Belgrano"],
      "respuesta": 4
    }
  ],
   "Av. Belgrano": [
    {
      "seccion": "5",
      "Lugares": ["Congreso", "Av. Rivadavia", "Av. Corrientes", "Av. Cordoba", "Viamonte", "Juncal", 
                  "Callao", "Las Heras", "Village Recoleta", "Cementerio de Recoleta", "Junin", "Av. Pueyrredón"],
      "respuesta": 5
    }
  ],
   "Av. Pueyrredón": [
    {
      "seccion": "6",
      "Lugares": ["Tagle", "Hospital Rivadavia", "Sanchez de Bustamante", "Hospital Fernandez", "Ocampo", 
                  "Av. Coronel Diaz", "CEMIC", "Salguero", "Eco Parque", "Plaza Italia"],
      "respuesta": 6
    }
  ],
   "Plaza Italia": [
    {
      "seccion": "7",
      "Lugares": ["Av. Sarmiento", "Plaza Alemania", "Club de Amigos", "Jardin Japones", "Planetario", 
                  "Av. Figueroa Alcorta", "Los Bosques de Palermo", "Av. Dorrego", "Geba"],
      "respuesta": 7
    }
  ],
   "GEBA": [
    {
      "seccion": "8",
      "Lugares": ["Av. de Los Ombus", "Aysa Plata San Martin", "La Pampa",
                  "Ciudad Universitaria"],
      "respuesta": 8
    }
  ]
}
