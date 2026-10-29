const prompt = require('prompt-sync')();
function calcularFactorial() {
    let numeroUsuario; 

    while (true) {
        let entrada = prompt("Ingresa un número para calcular su factorial, el número tiene que ser mayor o igual a cero: ");

        if (entrada === null) {
            return; 
        }

        if (entrada.trim() !== "" && !isNaN(entrada)) {
            numeroUsuario = Number(entrada);
            
            if (Number.isInteger(numeroUsuario) && numeroUsuario >= 0) {
                break; 
            }
        }

        console.log("El dato ingresado no es un número válido");
    }

    let resultado = 1;

    for (let i = 1; i <= numeroUsuario; i++) {
        resultado *= i;
    }

    console.log(`El factorial de ${numeroUsuario} es: ${resultado}`);
}

calcularFactorial();