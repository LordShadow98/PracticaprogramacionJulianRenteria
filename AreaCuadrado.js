// Realiza el algoritmo para encontrar el área de un cuadrado.

function calcularAreaCuadrado(lado) {
    const area = lado * lado;
    return area;
  }
  
  const ladoCuadrado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));
  
  if (isNaN(ladoCuadrado)) {
    console.log("Por favor, ingrese un valor numérico válido.");
  } else {
    const calculoArea = calcularAreaCuadrado(ladoCuadrado);
    
    console.log("El área del cuadrado con lado " + ladoCuadrado + " es: " + calculoArea);
  }
  