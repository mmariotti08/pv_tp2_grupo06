const convertirASegundos = (horas, minutos) => {
    return (horas * 3600) + (minutos * 60);
};

const horas = 2;
const minutos = 30;

const resultado = convertirASegundos(horas, minutos);

console.log(`Horas: ${horas}, Minutos: ${minutos}`);
console.log(`Total en segundos: ${resultado}`);