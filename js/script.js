let autos = [];

// Pide al usuario que ingrese los datos del auto
let numAutos = parseInt(prompt("Ingrese el número de autos a asegurar:"));

for (let i = 0; i < numAutos; i++) {
    let marca = prompt(`Ingrese la marca del auto: ${i + 1}`);
    let modelo = prompt(`Ingrese el modelo del auto: ${i + 1}`);
    let año = parseInt(prompt(`Ingrese el año del auto: ${i + 1}`));

    let precioBase = 0;

    if (año >= 2022) {
        precioBase = 8000;
    } else if (año >= 2015 && año < 2022) {
        precioBase = 5000;
    } else if (año >= 2010 && año < 2015) {
        precioBase = 3000;
    } else if (año < 2010) {
        precioBase = 0;
        alert('No tiene cotizacion por la antiguedad de su vehiculo');
    }

    let auto = {
        marca: marca,
        modelo: modelo,
        año: año,
        precioBase: precioBase
    };
    
    autos.push(auto);
}

// Mostrar las cotizaciones
for (let i = 0; i < autos.length; i++) {
    let precioTotal = autos[i].precioBase * numAutos;
    alert(`La cotización para asegurar un ${autos[i].marca} ${autos[i].modelo} del año ${autos[i].año} es de $${autos[i].precioBase}. Precio total por ${numAutos} autos: $${precioTotal}`);
}
