// Una empresa desea determinar el monto de un cheque que debe
// proporcionar a uno de sus empleados que tendrá que viajar durante un
// determinado número de días. Los gastos que cubre la empresa son: hotel,
// comida y 200 pesos diarios para otros gastos. El monto debe estar
// desglosado para cada concepto. Realiza un algoritmo que determine el
// monto del cheque.
function calcularCostosViaje(dias, gastoHotel, gastoComida) {
    const totalComida = gastoComida * dias;
    const totalHotel = gastoHotel * dias;
    const totalOtrosGastos = dias * 100;
    const total = totalComida + totalHotel + totalOtrosGastos;
  
    console.log("El total de dinero para comida es: $" + totalComida.toFixed(2));
    console.log("El total de dinero para hotel es: $" + totalHotel.toFixed(2));
    console.log("El total de dinero para otros gastos es: $" + totalOtrosGastos.toFixed(2));
    console.log("El dinero total por el viaje es: $" + total.toFixed(2));
  }
  
  const diasViaje = parseFloat(prompt("Ingresa los días de viaje"));
  const gastoHotelPorDia = parseFloat(prompt("Ingresa el gasto de hotel por día"));
  const gastoComidaDiario = parseFloat(prompt("Ingresa el gasto de comida diario"));
  
  if (isNaN(diasViaje) || isNaN(gastoHotelPorDia) || isNaN(gastoComidaDiario)) {
    console.log("Por favor, ingresa valores numéricos válidos.");
  } else {
    calcularCostosViaje(diasViaje, gastoHotelPorDia, gastoComidaDiario);
  }
  
