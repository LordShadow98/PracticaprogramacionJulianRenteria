// Dado un número real que representa el valor total de una compra, informar
// las posibles formas de pago según la siguiente tabla. Específica los datos de
// entrada, de salida, estrategia.
// 1 cuota de $................. (0% de recargo)
// 2 cuotas de $................. total $................. ( 5% de recargo)
// 6 cuotas de $................. total $................. ( 40% de recargo)

function calcularRecargo(cantidadCuotas) {
    if (cantidadCuotas === 1) {
      return 0; 
    } else if (cantidadCuotas === 2) {
      return 0.05; 
    } else if (cantidadCuotas === 6) {
      return 0.4; 
    } else {
      return -1; 
    }
  }
  
  const valorCompra = parseFloat(prompt("Ingrese el valor total de la compra:"));
  const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (1, 2 o 6):"));
  
  const recargo = calcularRecargo(cuotas);
  
  if (isNaN(valorCompra) || isNaN(cuotas) || recargo === -1) {
    console.log("Por favor, ingrese valores válidos.");
  } else {
    const totalAPagar = valorCompra * (1 + recargo);
  
    if (cuotas === 1) {
      console.log(`1 cuota de $${totalAPagar} (0% de recargo)`);
    } else {
      console.log(`${cuotas} cuotas de $${(totalAPagar / cuotas)} total $${totalAPagar} (${recargo * 100}% de recargo)`);
    }
  }
  