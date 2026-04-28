// Ejercicio 2 Primeros 10 números impares
const mostrarImpares = () => {
    let contador= 0;
    let numero= 1;
    console.log("Los primeros 10 números impares son:");
    while (contador <10) {
        if (numero %2 !== 0) {
            console.log(numero);
            contador++;
        }
        numero++;
    }
};

mostrarImpares();