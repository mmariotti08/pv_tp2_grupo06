import { verificarLargo, aplicarEstiloAlerta } from './Funciones23.js';

const campoTexto = document.querySelector('#inputTexto');
const visorTexto = document.querySelector('#textoDestino');
const cajaContenedora = document.querySelector('#contenedorMensaje');

campoTexto.addEventListener('input', () => {
    const valorActual = campoTexto.value;
    
    visorTexto.textContent = valorActual;

    const esLargo = verificarLargo(valorActual);
    aplicarEstiloAlerta(cajaContenedora, esLargo);
});