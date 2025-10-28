function calcular_edad() {
const fecHa = prompt("Introduce tu fecha de nacimiento (formato: A-M-D):");
const fechaNacimiento = new Date("fecHa");
if (Number.isNaN(fechaNacimiento)) {
  alert("Fecha no válida. Asegúrate de usar el formato A-M-D.");
} 
else {
  const hoy = new Date();
  
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const haCumplidoEsteAño = 
    hoy.getMonth() > fechaNacimiento.getMonth() ||
    (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() >= fechaNacimiento.getDate());
  
  if (!haCumplidoEsteAño) {
    edad--;
  }
  console.log("edad ", edad);
  const mayorEdad = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";

  const ahora = new Date(Date.now());
let proximoCum = new Date(ahora.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate());
if (proximoCum < ahora) {
  proximoCum.setFullYear(ahora.getFullYear() + 1);
}

const dif = proximoCum.getTime() - ahora.getTime();
const Restantes = Math.ceil(dif / (1000 * 60 * 60 * 24));

  alert("Tienes" + parseInt(edad) + "años.\n" + mayorEdad + "\nFaltan"+ parseInt(Restantes) + "días para tu próximo cumpleaños");
}
}