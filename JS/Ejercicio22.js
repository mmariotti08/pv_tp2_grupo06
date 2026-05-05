import { actualizarTexto } from "./funciones22.js";

const input = document.querySelector("#entradaTexto");
const parrafo = document.querySelector("#resultado");

input.addEventListener ("input", (event) => {
    const textoIngresado = event.target.value;
    actualizarTexto (textoIngresado, parrafo);
});