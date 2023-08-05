// Un estacionamiento requiere determinar el cobro que debe aplicar a las
// personas que lo utilizan. Considera que el cobro es con base en las horas
// que lo disponen y que las fracciones de hora se toman como completas,
// realiza el algoritmo que permita determinar el cobro.

function calcularCobroEstacionamiento() {
    const valorPorHora = parseFloat(prompt("Ingrese el valor por hora de estacionamiento:"));
    const tiempoDeUso = parseFloat(prompt("Ingrese la cantidad de horas de uso:"));
  
    if (isNaN(valorPorHora) || isNaN(tiempoDeUso)) {
      alert("Por favor, ingrese valores numéricos válidos.");
    } else {
      const cobro = Math.ceil(tiempoDeUso) * valorPorHora;
      alert("El total a pagar es: $" + cobro.toFixed(2));
    }
  }
  
  calcularCobroEstacionamiento();
  