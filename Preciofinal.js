// Realiza un algoritmo para determinar cuánto pagará finalmente una persona
// por un artículo, considerando que tiene un descuento de 20%, y debe pagar
// 15% de IVA (debe mostrar el precio con descuento y el precio final).

function calcularPrecioConDescuento(valorOriginal) {
    const descuento = valorOriginal * 0.20; // 20% de descuento
    const precioConDescuento = valorOriginal - descuento;
    return precioConDescuento;
  }
  
  function calcularPrecioFinal(precioConDescuento) {
    const iva = precioConDescuento * 0.15; // 15% de IVA
    const precioFinal = precioConDescuento + iva;
    return precioFinal;
  }
  
  const valorArticulo = parseFloat(prompt("Ingrese el valor del artículo:"));
  
  if (isNaN(valorArticulo)) {
    alert("Por favor, ingrese un valor numérico válido.");
  } else {
    const precioConDescuento = calcularPrecioConDescuento(valorArticulo);
    const precioFinal = calcularPrecioFinal(precioConDescuento);
    
    alert("Precio con descuento: $" + precioConDescuento.toFixed(2));
    alert("Precio final con IVA: $" + precioFinal.toFixed(2));
  }