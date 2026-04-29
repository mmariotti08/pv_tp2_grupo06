const analizarNotas = (array) => {
    let suma = 0;
    let aprobadas = 0;

    for (let i = 0; i < array.length; i++) {
        console.log(`Nota: ${array[i]}`);

        if (array[i] >= 6) {
            console.log(`Aprobada: ${array[i]}`);
            aprobadas++;
        } else {
            console.log(`Desaprobada: ${array[i]}`);
        }

        suma += array[i];
    }

    const promedio = suma / array.length;

    return { promedio, aprobadas };
};

const notas = [7, 5, 8, 4, 6, 9, 3, 10, 7, 6];

const resultado = analizarNotas(notas);

console.log(`Promedio general: ${resultado.promedio}`);
console.log(`Cantidad de aprobadas: ${resultado.aprobadas}`);