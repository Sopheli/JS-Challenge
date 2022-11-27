/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];



//1- Mostrar en formato de tabla todos los alumnos.    |||  console.table(variable);

console.table(students);
break;

//2- Mostrar por consola la cantidad de alumnos que hay en clase. ||| length alumnos
console.log('Número total de alumnos: ', students.length);
break;

///3- Mostrar por consola todos los nombres de los alumnos. ||| listar alumnos
students.map(student => console.log(student.name));
break;

///4- Eliminar el último alumno de la clase. |||  let ultimo ejm = frutas.pop()
students.pop();
console.log('Estudiantes después de eliminar al último de la lista: ');
console.table(students);
break;

///5- Eliminar un alumno aleatoriamente de la clase. ||| funcion que le pasas 2 numeros y te devuelve un # aleatorio en ese rango: 
//function calculateRandomNumber(min, max) { //  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;//  return randomNumber; //}
//students.splice(calculateRandomNumber(0, students.length), 1);
students.splice((Math.random() * students.length), 1);
console.log('\nEstudiantes que quedan en la clase:\n');
console.table(students);
break;

///6- Mostrar por consola todos los datos de los alumnos que son chicas. // con filter
femaleNames = students.filter(student => student.gender === "female");
const girls = femaleNames.length > 0 ? console.table(femaleNames) : 'No hay alumnas en la clase.'
break;

///7- Mostrar por consola el número de chicos y chicas que hay en la clase. 


///8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.


///9-Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años. //filter

let studentsagefilter = students.filter(student => student.age >= 20 && student.age <= 25);
if (studentsagefilter.length > 0) {
console.table(studentsagefilter);
} else {
console.log('No existen estudiantes con esas edades')
}
break;

///10- Añadir un alumno nuevo con los siguientes datos: ||| let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
