let message: string = 'Hello Word' ;
console.log(message) ;
function cambiarAcercaDe() 
{
let acercaDeInput:string=prompt("Ingrese el nuevo valor de AcercaDe") as string;
(document.getElementById("acercaDe") as HTMLParagraphElement).innerHTML=acercaDeInput;
}
var persona ={fullName: "Antonella Iacomelli", position: "Estudiante de Programación", ubicacion: "CABA"};
(document.getElementById("nombre") as HTMLParagraphElement).innerHTML=persona.fullName;
(document.getElementById("perfil") as HTMLParagraphElement).innerHTML=persona.position;
(document.getElementById("residencia") as HTMLParagraphElement).innerHTML=persona.ubicacion;















