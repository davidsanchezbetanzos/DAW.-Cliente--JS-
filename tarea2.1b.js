/*Realizar una pequeña aplicación en JavaScript que muestre lo siguiente POR CONSOLA:

Tabla de sumar de un número que se ha de pedir al usuario por teclado usando prompt. Se comprobará que el número es correcto, en caso de que no sea correcto, se mostrará un mensaje por consola. Utilizar plantillas literales para la presentación. El cero se considerará un número válido para este caso.
Script que muestre las tabla de multiplicar de los números del 1 al 10, una a continuación de la otra. Utilizar plantillas literales para la presentación. Ten en cuenta que primero irá un enunciado "Tablas de multiplicar" y, luego cada tabla irá precedida de un título que indique qué tabla se muestra (ver imagen). En este apartado se han de usar dos tipos de bucles diferentes, aunque no sea lo más apropiado.*/


/*Nota: Puedes utilizar el tipo de bucle que prefieras para cada apartado, pero se han de utilizar los tres tipos de bucles que hay en JavaScript. Tener en cuenta que queremos presentar tanto la operación que estamos realizando como el resultado de la misma (ver ejemplo de salida).*/


console.log("Tablas de multiplicar");


num = 0;
do{

    console.log("Tabla de multiplicar del " + num);
    for (var i = 0; i< 11; i++){
        var multiplicacion = i*num;
        console.log(i + " + " + num + " = " + multiplicacion);
    
    }
num+=1;

}
while (num < 11);




 