export const verificarLargo = (cadena) => {
    const limite = 20;
    return cadena.length > limite;
};

export const aplicarEstiloAlerta = (elemento, excedido) => {
    if (excedido) {
        elemento.style.backgroundColor = "#39ff14";
        elemento.style.borderColor = "#2ECC71";
        elemento.style.transform = "scale(1.02)";
    } else {
        elemento.style.backgroundColor = "transparent";
        elemento.style.borderColor = "#ccc";
        elemento.style.transform ="scale(1)";
    }
};
