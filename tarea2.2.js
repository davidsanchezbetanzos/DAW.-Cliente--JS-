
/*Resuelve los siguientes ejercicios utilizando la instrucción if:

Utilizando prompt para solicitar datos al usuario, obtener la siguiente información:
- Nombre del usuario,
- Nota examen,
- Nota prácticas
Otener la nota del módulo teniendo en cuenta las siguientes consideraciones:
- Si la nota del examen es al menos de 6 y, la de las prácticas es de al menos un 4, habrá superado el módulo y, el valor de la nota será el promedio de ambas. - En caso contrario habrá suspendido y, no obtendrá nota numérica, pero habrá que indicarle el motivo del suspenso: examen, prácticas o ambas. Se indicará además los puntos que le faltarían para superar la parte correspondiente.*/

var nombre = prompt("Introduzca Nombre Usuario");
var examen = parseInt(prompt("Introduzca nota examen"));
var practicas = parseInt(prompt("Introduzca nota prácticas"));


var nota = (examen + practicas) / 2;

if (examen >= 6 && practicas >= 4) {
    console.log("Módulo superado")
    console.log("La nota media del alumno sería: " + nota);
}

else {
    if (examen < 6 && practicas >=4) {
        console.log("Nota del examen insuficiente")
        var falta = 6 - examen;
        console.log("Le faltarian " + falta + " puntos en el examen")


    }
    if (practicas < 4 && examen >=6) {
        console.log("Nota de prácticas insuficiente")
        var falta = 4 - practicas;
        console.log("Le faltarian " + falta + " puntos en las practicas")

    }

    if (examen < 6 && practicas <4){
        console.log("Nota de prácticas y del examen insuficientes")
        var falta = 6 - examen;
        console.log("Le faltarian " + falta + " puntos en el examen")
        var falta = 4 - practicas;
        console.log("Le faltarian " + falta + " puntos en las practicas")


    }


}

