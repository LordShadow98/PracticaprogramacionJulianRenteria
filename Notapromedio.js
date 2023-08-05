// Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
// considerando que realiza tres exámenes, de los cuales el primero y el
// segundo tienen una ponderación de 25%, mientras que el tercero de 50%.

function calcularPromedioPonderado(nota1, nota2, nota3) {
    const pesoNota1 = 0.25;
    const pesoNota2 = 0.25;
    const pesoNota3 = 0.5;
  
    const promedioPonderado = (nota1 * pesoNota1) + (nota2 * pesoNota2) + (nota3 * pesoNota3);
  
    return promedioPonderado;
  }
  
  const notaExamen1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
  const notaExamen2 = parseFloat(prompt("Ingrese la nota del segundo examen:"));
  const notaExamen3 = parseFloat(prompt("Ingrese la nota del tercer examen:"));
  
  if (isNaN(notaExamen1) || isNaN(notaExamen2) || isNaN(notaExamen3)) {
    console.log("Por favor, ingrese notas válidas.");
  } else {
    const promedioFinal = calcularPromedioPonderado(notaExamen1, notaExamen2, notaExamen3);
    console.log("El promedio De las Notas es: " + promedioFinal);
  }
  