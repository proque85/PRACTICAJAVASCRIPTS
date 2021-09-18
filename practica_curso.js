const datosPersonales = [
  {
    nombres: 'roque jesus',
    apellidos: 'potenza sanchez',
    edad: '36',
    fechaNacimiento: '09/01/1985',
    telefono: '0424-000000',
    direccion: 'venezuela',
    peliculas: [
      'matrix',
      'volver al futuro',
      'jumanji',
      'jurasic park',
      'rapidos y furiosos',
      'sheldon'
    ]
  },
  {
    nombres: 'marcos jesus',
    apellidos: 'perez sanchez',
    edad: '39',
    fechaNacimiento: '09/01/1981',
    telefono: '0424-000000',
    direccion: 'venezuela',
    peliculas: [
      'matrix',
      'volver al futuro',
      'jumanji',
      'jurasic park',
      'rapidos y furiosos',
      'sheldon'
    ]
  }
];

const temp1 = 'Este es un texto ficticio1';
const temp2 = 'Este es un texto ficticio2';
let datePerson = {
  Nombre: 'roque',
  Apellido: 'Potenza'
};
let cadenaStringLiteral = `Mi Nombre: ${datePerson.Nombre} y mi apellido es: ${datePerson.Apellido}`;

function rest(...parametros) {
  return parametros;
}

let parametrosRest = rest(1, 2, 3, 4, 5);

export { temp1, temp2, datosPersonales, parametrosRest, cadenaStringLiteral };
/**/
/*Desestructuracion

let {nombres, apellidos, direccion, peliculas}=datosPersonales;
console.log("Mi nombre es: "+nombres+" y mi apellidos es: "+apellidos+"y vivo en:"+direccion);
console.log("Mis Peliculas Preferidas es:"); 
for(let i=0; i<peliculas.length; i++){

    console.log(peliculas[i]);
}


for(let i=0; i<datosPersonales.length;i++){
    console.log("Mi nombre es: "+datosPersonales[i].nombres+" y mi apellidos es: "+datosPersonales[i].apellidos+"y vivo en:"+datosPersonales[i].direccion);
    console.log("Mis Peliculas Preferidas es:"); 
    for(let j=0; j<datosPersonales[i].peliculas.length; j++){
    
        console.log(datosPersonales[i].peliculas[j]);
    }
}
*/
