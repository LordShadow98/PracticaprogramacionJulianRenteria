// Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo
// sería el algoritmo para obtenerla? Recuerda que por Pitágoras se tiene que:
// La hipotenusa al cuadrado es igual a la suma de los otros dos lados al
// cuadrado (H2 = A2 + B2)

// Fórmula de la hipotenusa: H^2 = A^2 + B^2

function calcularHipotenusa(ladoA, ladoB) {
    return Math.hypot(ladoA, ladoB); //Math.hypot(ladoA, ladoB) Funcion de JS para calcular hipotenusa de triagulo rectangulo
  }
  
  const longitudLadoA = parseFloat(prompt("Ingrese la longitud del lado A:"));
  const longitudLadoB = parseFloat(prompt("Ingrese la longitud del lado B:"));
  
  if (isNaN(longitudLadoA) || isNaN(longitudLadoB)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
  } else {
    const hipotenusaResultado = calcularHipotenusa(longitudLadoA, longitudLadoB);
    console.log("La hipotenusa del triángulo rectángulo es: " + hipotenusaResultado);
  }
  
