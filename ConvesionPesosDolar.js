//Una empresa importadora desea determinar cuántos dólares puede adquirir con determinada cantidad de pesos. Realiza el algoritmo para tal fin.cler 

function cambio() {
    let valorDolar = parseFloat(prompt("Ingrese el valor actual del dólar:"));
    let pe = parseInt(prompt("Ingrese Cuantos pesos Colombianos Desea Convertir: "));
  
    if (isNaN(valorDolar) || isNaN(pe)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }
  
    let dol = pe / valorDolar;
    alert("La cantidad equivalente en dólares es: "); 
  }
  
  cambio(); 