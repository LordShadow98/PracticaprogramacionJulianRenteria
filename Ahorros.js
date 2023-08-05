// Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
// un año si considera que cada semana ahorra 15% de su sueldo (considera cuatro semanas por mes y que no cambia el sueldo).
function calcularAhorroAnual(sueldoMensual) {
    const ahorroSemanal = sueldoMensual * 0.15; // Calculo 15% del sueldo
    const ahorroMensual = ahorroSemanal * 4; // Ahorro semanal multiplicado por 4 semanas
    const ahorroAnual = ahorroMensual * 12; // Ahorro mensual multiplicado por 12 meses
    return ahorroAnual;
  }
  
  const sueldo = parseFloat(prompt("Ingrese su sueldo mensual:"));
  
  if (isNaN(sueldo)) {
    console.log("Por favor, ingrese un sueldo numérico válido.");
  } else {
    const ahorroTotal = calcularAhorroAnual(sueldo);
    console.log("El ahorro anual estimado es: $" + ahorroTotal.toFixed(2));
  }
  