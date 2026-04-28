// Ejercicio 4:crear area y perímetro de un rectángulo
const calcularRectangulo= () => {
    let ladoA= 10;
    let ladoB= 5;
    
    const area= ladoA * ladoB;
    const perimetro= 2 * (ladoA + ladoB);
    
    console.log(`Rectángulo de ${ladoA}cm x ${ladoB}cm:`);
    console.log(`Área: ${area} cm²`);
    console.log(`Perímetro: ${perimetro} cm`);
};

calcularRectangulo();