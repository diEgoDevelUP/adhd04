function calcularPromedio(): void {

  const num1Input: HTMLInputElement = document.getElementById('num1') as HTMLInputElement;
  const num2Input: HTMLInputElement = document.getElementById('num2') as HTMLInputElement;
  const num3Input: HTMLInputElement = document.getElementById('num3') as HTMLInputElement;


  let numeroUno: number;
  let numeroDOS: number;
  let numeroTres: number;
  try {
    numeroUno = parseFloat(num1Input.value);
    numeroDOS = parseFloat(num2Input.value);
    numeroTres = parseFloat(num3Input.value);
  } catch (error) {
    alert('Error: Please enter valid numbers only.');
    return;
  }


  const resultado: number = (numeroUno + numeroDOS + numeroTres) / 3;


  const resultadoElement = document.getElementById('resultado') as HTMLElement;
  resultadoElement.textContent = `El resultado es: ${resultado}`;

}

function calcularArea(): void {
  const valorBaseInput: HTMLInputElement = document.getElementById('bas') as HTMLInputElement;
  const valorAlturaInput: HTMLInputElement = document.getElementById('alt') as HTMLInputElement;

  // Obtener los valores de los elementos de entrada y convertirlos a números
  const valorBase: number = parseFloat(valorBaseInput.value);
  const valorAltura: number = parseFloat(valorAlturaInput.value);

  const valorArea: number = (valorBase * valorAltura) / 2;

  const resultadoArea: HTMLElement = document.getElementById('resultadosol2') as HTMLElement;
  resultadoArea.textContent = `El valor del Área es: ${valorArea}`; // Usar el valorArea calculado
}

function calcularParOImpar(): void {
  const numeroInput: HTMLInputElement = document.getElementById('numPaoImp') as HTMLInputElement;
  const numero: number = parseFloat(numeroInput.value);

  if (isNaN(numero)) {
    alert('Por favor, ingrese un número válido.');
    return; // Salida de la funcion si la entrada no es un numero 
  }

  const resultado: string = `${numero} es ${numero % 2 === 0 ? 'par' : 'impar'}`;
  const resultadoElement: HTMLElement = document.getElementById('resultadosol3') as HTMLInputElement;
  resultadoElement.textContent = resultado;
}

function calcularMayorMenor() {
  const numerounoInput = document.getElementById('numeroUno') as HTMLInputElement;
  const numerodosInput = document.getElementById('numeroDos') as HTMLInputElement;
  const numerotresInput = document.getElementById('numeroTres') as HTMLInputElement;

  const numerouno: number = parseFloat(numerounoInput.value);
  var numerodos: number = parseFloat(numerodosInput.value);
  var numerotres: number = parseFloat(numerotresInput.value);

  if (numerouno > numerodos && numerouno > numerotres) {
    const resultadoNumero: HTMLElement = document.getElementById('resultadosol4') as HTMLElement;
    resultadoNumero.textContent = `El numero mayor es: ${numerouno}`;
  } else if (numerodos > numerouno && numerodos > numerotres) {
    const resultadoNumero: HTMLElement = document.getElementById('resultadosol4') as HTMLElement;
    resultadoNumero.textContent = `El numero mayor es: ${numerodos}`;
  } else {
    const resultadoNumero: HTMLElement = document.getElementById('resultadosol4') as HTMLElement;
    resultadoNumero.textContent = `El numero mayor es: ${numerotres}`;
  }

 
  if (numerouno < numerodos && numerouno < numerotres) {
    const resultadoNumero: HTMLElement = document.getElementById('resultadosol4y1') as HTMLElement;
    resultadoNumero.textContent = `El numero menor es: ${numerouno}`;
  } else if (numerodos < numerouno && numerodos < numerotres) {
    const resultadoNumero: HTMLElement = document.getElementById('resultadosol4y1') as HTMLElement;
    resultadoNumero.textContent = `El numero menor es: ${numerodos}`;
  } else {
    const resultadoNumero: HTMLElement = document.getElementById('resultadosol4y1') as HTMLElement;
    resultadoNumero.textContent = `El numero menor es: ${numerotres}`;
  } 
}

function calcularPotencia() {
  const numeroIngresadoInput = document.getElementById('numeropot') as HTMLInputElement;
  const numeroParaPotenciaInput = document.getElementById('numeroPotencia') as HTMLInputElement;


  const numeroIngresado: number = parseFloat(numeroIngresadoInput.value);
  const numeroParaPotencia: number = parseFloat(numeroParaPotenciaInput.value);

  const numeroFinal: number = Math.pow(numeroIngresado, numeroParaPotencia);

  const resultadoNumero: HTMLElement = document.getElementById('resultadopot') as HTMLElement;
  resultadoNumero.textContent = `El numero potenciado es: ${numeroFinal}`;
}

function invertirTexto() {
  let textoUsuario = (document.getElementById("textrev") as HTMLInputElement)!.value;
  let textoInvertido = textoUsuario.split("").reverse().join("");
  document.getElementById("resultadotextinv")!.textContent = textoInvertido;
}

function calcularfactorial() {
  const numInput = document.getElementById('numfact') as HTMLInputElement;
  const num = parseInt(numInput.value);

  //validacion de entrada
  if (isNaN(num) || num < 0) {
    alert('Porfavor ingresa un numero entero no negativo.');
    return;
  }

  function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
  }

  const result = factorial(num);
  const resultado = document.getElementById('resultadofact') as HTMLInputElement;
  resultado.textContent = `El factorial de ${num} es: ${result}`;
}


function checkNumeroPerfecto() {
  const inputNumber = parseInt((document.getElementById('num1per') as HTMLInputElement).value);

  if (isNaN(inputNumber) || inputNumber <= 0) {
    alert("Error, por favor ingrese un numero entero positivo.");
    return;
  }

  let divisorSum = 0;
  for (let divisor = 1; divisor <= inputNumber / 2; divisor++) {
    if (inputNumber % divisor === 0) {
      divisorSum += divisor;
    }
  }

  const resultMessage = (divisorSum === inputNumber) ?
    `${inputNumber} es un numero perfecto.` :
    `${inputNumber} no es un numero perfecto.`;

  document.getElementById('resultadoper')!.textContent = resultMessage;
}
function comprobarPrimo() {
  const numeroInput = document.getElementById('num1primo');

  // Handle potential null case for numeroInput
  if (!numeroInput) {
    console.error('Error: Input element with ID "numeroInput" not found.');
    return;
  }

  const numero: number = parseInt((numeroInput as HTMLInputElement).value);

  // Validate input to ensure it's a positive integer
  if (isNaN(numero) || numero <= 0) {
    mostrarResultado('Ingrese un número positivo entero.');
    return;
  }

  // Check for prime number
  let esPrimo = true;
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  // Display result
  mostrarResultado(esPrimo ? '¡El número es primo!' : 'El número no es primo.');
}

function mostrarResultado(mensaje: string) {
  const resultadoParrafo = document.getElementById('resultadoPrimo') as HTMLParagraphElement;

  // Check if resultadoParrafo is not null before accessing its properties
  if (resultadoParrafo) {
    resultadoParrafo.textContent = mensaje;
  } else {
    console.error('Error: Paragraph element with ID "resultado" not found.');
  }
}

function countVocales() {
  const inputText = document.getElementById('var1') as HTMLInputElement;
  const resultElement = document.getElementById('resultadoVocales'); // Use 'resultadoVocales' for the result element

  // Handle potential null references
  if (!inputText || !resultElement) {
    console.error('Error: Input or result elements not found.');
    return;
  }

  const text = inputText.value.toLowerCase(); // Convert to lowercase for consistent counting
  let vowelCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      vowelCount++;
    }
  }

  const resultMessage = `El texto ingresado tiene ${vowelCount} vocales.`;
  resultElement.textContent = resultMessage; // Set textContent of 'resultadoVocales'
}
