
function obtenerAltura_Base() {
  let valor = parseFloat(prompt());
  for (;;) {
    if (!isNaN(valor) && valor > 0) {
      break;
    }
    valor = parseFloat(prompt("Por favor, ingresa un valor numérico positivo válido:"));
  }
  return valor;
}

const baseTriangulo = obtenerAltura_Base("Ingresa la base del triángulo:");
const alturaTriangulo = obtenerAltura_Base("Ingresa la altura del triángulo:");


function calcularAreaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;
}


const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);


console.log(`El área del triángulo es: ${areaTriangulo}`);