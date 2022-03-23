"use strict";
let message = 'Hello Word';
console.log(message);
function cambiarAcercaDe() {
    let acercaDeInput = prompt("Ingrese el nuevo valor de AcercaDe");
    document.getElementById("acercaDe").innerHTML = acercaDeInput;
}
var persona = { fullName: "Antonella Iacomelli", position: "Estudiante de Programación", ubicacion: "CABA" };
document.getElementById("nombre").innerHTML = persona.fullName;
document.getElementById("perfil").innerHTML = persona.position;
document.getElementById("residencia").innerHTML = persona.ubicacion;
