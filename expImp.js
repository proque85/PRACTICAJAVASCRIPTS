import {
  temp1,
  temp2,
  datosPersonales,
  parametrosRest,
  cadenaStringLiteral
} from './practica_curso.js';

for (const key in datosPersonales) {
  console.log(datosPersonales[key].nombres);
}

/*console.log(temp1);
console.log(temp2);
console.log(parametrosRest[0]);
console.log(cadenaStringLiteral);


for (let i = 0; i < datosPersonales.length; i++) {
  console.log(
    'Mi nombre es: ' +
      datosPersonales[i].nombres +
      ' y mi apellidos es: ' +
      datosPersonales[i].apellidos +
      'y vivo en:' +
      datosPersonales[i].direccion
  );
  console.log('Mis Peliculas Preferidas es:');
  for (let j = 0; j < datosPersonales[i].peliculas.length; j++) {
    console.log(datosPersonales[i].peliculas[j]);
  }
}*/
