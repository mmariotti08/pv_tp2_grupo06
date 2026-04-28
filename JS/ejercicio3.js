// Ejercicio 3: Volumen de una esfera  con r=4m
const calcularVolumenEsfera= () => {
    const radio= 4;
    const pi= Math.PI;
    const volumen= (4/3) * pi * Math.pow(radio, 3);
    
    console.log(`El volumen de una esfera con radio ${radio}m es: ${volumen.toFixed(2)} m³`);
};

calcularVolumenEsfera();