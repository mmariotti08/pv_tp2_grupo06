import { obtenerDatos } from "./funciones20.js";
//import { servicioBenjaminOrtega } from "../services/serviceBenjaminOrtega.js";
//import { servicioGonzaloPeñalva } from "../services/servicesGonzaloPeñalva.js";
//import { servicioMarcosSaldaño } from "../services/serviceMarcosSaldaño";
//import { servicioMatiasMariotti } from "../services/serviceMatiasMariotti.js";
//import { servicioDiegoCari } from "../services/serviceDiegoCari.js";

const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const libretaInput = document.querySelector("#libreta");
const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const libreta = libretaInput.value;

    const resultado = obtenerDatos(nombre, apellido, libreta);

    alert(resultado);
});