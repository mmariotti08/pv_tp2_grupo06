import { mostrarSeleccion } from "./funciones24.js";

const opciones = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

opciones.forEach((opcion) => {
    opcion.addEventListener("change", () => {
        mostrarSeleccion(opcion.value, resultado);
    });
});