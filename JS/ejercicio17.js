const contarLetraA = (texto) => {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a" || texto[i] === "A") {
            contador++;
        }
    }

    return contador;
};

const texto = prompt("Ingrese un texto:");

const resultado = contarLetraA(texto);

document.write(`
    <h2>Resultado</h2>
    <p>Texto ingresado: ${texto}</p>
    <p>Cantidad de letras 'a': ${resultado}</p>
`);