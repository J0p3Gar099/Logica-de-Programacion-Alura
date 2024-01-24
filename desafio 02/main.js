/* 1 Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */

let dia = prompt("¿Que dia es hoy?");
alert(dia=="sabado"|| dia== "domingo" ? "¡Buen fin de semana!": "¡Buena semana!");

/* 2 Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. */

let numero = prompt("Introduce un numero positivo o negativo");
alert(numero==0 ? "El numero es 0": numero>0 ? "positivo": "negativo");

/* 3 Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.". */

let mensaje = prompt("Puntos obtenidos") >= 100 ? "¡Felicidades, has ganado!": "Intenta nuevamente para ganar"
alert(mensaje)

/* 4 Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo. */

let saldo = prompt("Introduce tu saldo actual");
alert("Tu saldo es de : " + saldo + " $");

/* Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre. */

let nombre = prompt("Cual es su nombre");
alert("bienvenid@ " + nombre);
