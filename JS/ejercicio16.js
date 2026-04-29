const sumarRango = (numeroInicial, numeroFinal) => {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }

    return suma;
};

const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
const numeroFinal = parseInt(prompt("Ingrese el número final:"));

if (numeroInicial <= numeroFinal) {
    const resultado = sumarRango(numeroInicial, numeroFinal);

    document.write(`
        <h2>Resultado</h2>
        <p>El número inicial es: ${numeroInicial}</p>
        <p>El número final es: ${numeroFinal}</p>
        <p>La suma del rango es: ${resultado}</p>
    `);
} else {
    document.write(`
        <h2>Error</h2>
        <p>El número inicial debe ser menor o igual que el número final.</p>
    `);
}