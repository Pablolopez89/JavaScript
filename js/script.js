
let precio = [];
// Pide al usuario que ingrese los datos del auto
let numAutos = parseInt(prompt("Ingrese el número de autos a asegurar:"));

for (let i = 0; i < numAutos; i++) {
    let marca = prompt(`Ingrese la marca del auto: ${i+1}`);
    let modelo = prompt(`Ingrese el modelo del auto: ${i+1}`);
    let año = prompt(`Ingrese el año del auto: ${i+1}`);

let precioBase = 0; 

if (año >= 2022) {
    precioBase = 8000;
} else if (año >= 2015 && año < 2022) {
    precioBase = 5000;
} else if (año >= 2010 && año < 2015) {
    precioBase = 3000;
} else if (año < 2010) {
    alert('No tiene cotizacion por la antiguedad de su vehiculo');
}
precio.push (`La cotización para asegurar un ${marca} ${modelo} del año ${año} es de $${precioBase}.`);
}

// Muestra las tarifas de seguro de cada auto en una ventana de alerta
alert(precio.join("\n"));