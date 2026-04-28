const calcularPromedio = (array) => {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        console.log(`Edad: ${array[i]}`);
        suma += array[i];
    }

    const promedio = suma / array.length;
    return promedio;
};

const edades = [18, 20, 22, 19, 25, 21, 23, 24];

const promedio = calcularPromedio(edades);

console.log(`Promedio de edades: ${promedio}`);