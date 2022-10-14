//Autoguardado de TS
//comando ==>tsc / indicamos el directorio, RECORDAR LOS GUIONES --outDir/ qué fichero queremos vigilar (dist) y luego el comando --watch
//tsc --outDir dist app.ts --watch
let message: string = "Hello World!";

const userName = "Yei_Alb";
const age = 40;

console.log(`${message}, my name is ${userName}, I'm ${age} years old.`);

let myTypeString: string = 'Hello World!!';
let myTypeNumber: number = 40;
let myTypeBoolean: boolean = true;

//array : de tipo number = y asignamos. 
//Primera forma
let arrNumber: number[] = [1, 2, 3];
// Sería la misma declaración de array.
//Segunda forma.
let arrNumber2: Array<number> = [0, 1, 2, 3];

//Si intentara añadir al siguiente array o a los anteriores asignaciones diferentes a su tipo no me dejaría.
let arrStrings: Array<string> = ['Fútbol', 'Psicología', 'Teología', 'Pensamiento', 'Familia'];

//Aunque si se podría en el siguiente array
let arrAny: Array<any> = ['San Pablo', 'Queniquea', 1, 2, true];
//le resta autoridad a TS pero puede ayudar pero mejor usarlo sólo lo menos posible.

//Tuple
let tuplePlayers: [string, number, boolean] = ['Messi', 10, true];

//Tuple Array. Estaré usando la primera forma==>
let players: [number, string][];
//Tiene que darse que lo primero es un número y luego un array.
players = [
    [1, 'Messi'],
    [2, 'Cristiano'],
    [3, 'Lebron']
];

//INFERENCIA DE TIPOS.
