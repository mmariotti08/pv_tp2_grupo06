const calcularMayor = (numero1, numero2) => {
    if (isNaN(numero1) || isNaN(numero2)) {
        document.write(`
            <h2>Error</h2>
            <p>Debe ingresar solamente números.</p>
        `);
    } else if (numero1 > numero2) {
        document.write(`
            <h2>Resultado</h2>
            <p>El número mayor es: ${numero1}</p>
        `);
    } else if (numero2 > numero1) {
        document.write(`
            <h2>Resultado</h2>
            <p>El número mayor es: ${numero2}</p>
        `);
    } else {
        document.write(`
            <h2>Resultado</h2>
            <p>Ambos números son iguales: ${numero1}</p>
        `);
    }
};

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

calcularMayor(numero1, numero2);