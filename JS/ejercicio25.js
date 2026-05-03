import { obtenerColorAleatorio, cambiarColorFondo } from "./funciones25.js";

const botonCambiarColor = document.getElementById("btnCambiarColor");

botonCambiarColor.addEventListener("click", () => {
    const colorAleatorio = obtenerColorAleatorio();

    cambiarColorFondo(colorAleatorio);
});