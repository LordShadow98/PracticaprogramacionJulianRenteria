// Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
// pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
// generando presupuestos para cada cliente.

function calcularCostoPintura(costoPorM2, areaM2) {
    return costoPorM2 * areaM2;
  }
  
  function mostrarPresupuesto(costoTotal) {
    console.log(`El costo total del trabajo de pintura es: $${costoTotal}`);
  }
  
  const costoPorMetroCuadrado = parseFloat(prompt("Ingrese el costo por metro cuadrado:"));
  
  if (isNaN(costoPorMetroCuadrado)) {
    console.log("Por favor, ingrese un costo válido.");
  } else {
    const areaMetrosCuadrados = parseFloat(prompt("Ingrese el área a pintar en metros cuadrados:"));
  
    if (isNaN(areaMetrosCuadrados)) {
      console.log("Por favor, ingrese un área válida.");
    } else {
      const costoTotalPintura = calcularCostoPintura(costoPorMetroCuadrado, areaMetrosCuadrados);
      mostrarPresupuesto(costoTotalPintura);
    }
  }
  