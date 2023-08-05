// Una empresa que contrata personal requiere determinar la edad de las
// personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo
// se les pregunta el año en que nacieron. Realiza el algoritmo para solucionar
// este problema.

function calcularEdad() {
    const hoy = new Date();
    const anioActual = hoy.getFullYear();
  
    const anioNacimiento = parseInt(prompt("Ingrese el año en que nació"));
  
    if (isNaN(anioNacimiento)) {
      alert("Por favor, ingrese un año válido.");
    } else {
      const edad = anioActual - anioNacimiento;
      alert("La edad del Aspirante es: " + edad);
    }
  }
  calcularEdad();