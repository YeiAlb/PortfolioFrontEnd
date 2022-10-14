//Autoguardado de TS
//comando ==>tsc / indicamos el directorio, RECORDAR LOS GUIONES --outDir/ qué fichero queremos vigilar (dist) y luego el comando --watch
//tsc --outDir dist app.ts --watch
var message = "Hello World!";
var userName = "Yei_Alb";
var age = 40;
console.log("".concat(message, ", my name is ").concat(userName, ", I'm ").concat(age, " years old."));
var myTypeString = 'Hello World!!';
var myTypeNumber = 40;
var myTypeBoolean = true;
//array : de tipo number = y asignamos. 
//Primera forma
var arrNumber = [1, 2, 3];
// Sería la misma declaración de array.
//Segunda forma.
var arrNumber2 = [0, 1, 2, 3];
//Si intentara añadir al siguiente array o a los anteriores asignaciones diferentes a su tipo no me dejaría.
var arrStrings = ['Fútbol', 'Psicología', 'Teología', 'Pensamiento', 'Familia'];
//Aunque si se podría en el siguiente array
var arrAny = ['San Pablo', 'Queniquea', 1, 2, true];
//le resta autoridad a TS pero puede ayudar pero mejor usarlo sólo lo menos posible.
//Tuple
var tuplePlayers = ['Messi', 10, true];
//Tuple Array. Estaré usando la primera forma==>
var players;
//Tiene que darse que lo primero es un número y luego un array.
players = [
    [1, 'Messi'],
    [2, 'Cristiano'],
    [3, 'Lebron']
];
//INFERENCIA DE TIPOS.
