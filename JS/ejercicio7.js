const nombreMasLargo = (array) => {
    let masLargo = "";

    for (let i = 0; i < array.length; i++) {
        console.log(`Nombre: ${array[i]}`);

        if (array[i].length > masLargo.length) {
            masLargo = array[i];
        }
    }

    return masLargo;
};

const nombres = ["Juan", "Agustin", "Marcos", "Lucia", "Valentina", "Pedro"];

const resultado = nombreMasLargo(nombres);

console.log(`Nombre más largo: ${resultado}`);