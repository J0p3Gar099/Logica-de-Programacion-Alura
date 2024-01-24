let vidas = 3;
let numeroSecreto = 4;

let numero = (intento) => {
    if (vidas > 0) {
        if (intento == numeroSecreto) {
            return `¡Felicidades! El número secreto es ${intento}`;
        } else {
            vidas--;
            return `${intento > numeroSecreto ? `El número es menor. Vidas ${vidas}` : `El número es mayor. Vidas ${vidas}`}`;
        }
    } else {
        return "Vidas agotadas";
    }
}

// Ejemplos de uso:


console.log(numero(5));
console.log(numero(2));
console.log(numero(2));
console.log(numero(2));

