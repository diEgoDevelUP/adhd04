function calcularPromedio() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var num3Input = document.getElementById('num3');
    var numeroUno;
    var numeroDOS;
    var numeroTres;
    try {
        numeroUno = parseFloat(num1Input.value);
        numeroDOS = parseFloat(num2Input.value);
        numeroTres = parseFloat(num3Input.value);
    }
    catch (error) {
        alert('Error: Please enter valid numbers only.');
        return;
    }
    var resultado = (numeroUno + numeroDOS + numeroTres) / 3;
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = "El resultado es: ".concat(resultado);
}
function calcularArea() {
    var valorBaseInput = document.getElementById('bas');
    var valorAlturaInput = document.getElementById('alt');
    // Obtener los valores de los elementos de entrada y convertirlos a números
    var valorBase = parseFloat(valorBaseInput.value);
    var valorAltura = parseFloat(valorAlturaInput.value);
    var valorArea = (valorBase * valorAltura) / 2;
    var resultadoArea = document.getElementById('resultadosol2');
    resultadoArea.textContent = "El valor del \u00C1rea es: ".concat(valorArea); // Usar el valorArea calculado
}
function calcularParOImpar() {
    var numeroInput = document.getElementById('numPaoImp');
    var numero = parseFloat(numeroInput.value);
    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
        return; // Salida de la funcion si la entrada no es un numero 
    }
    var resultado = "".concat(numero, " es ").concat(numero % 2 === 0 ? 'par' : 'impar');
    var resultadoElement = document.getElementById('resultadosol3');
    resultadoElement.textContent = resultado;
}
function calcularMayorMenor() {
    var numerounoInput = document.getElementById('numeroUno');
    var numerodosInput = document.getElementById('numeroDos');
    var numerotresInput = document.getElementById('numeroTres');
    var numerouno = parseFloat(numerounoInput.value);
    var numerodos = parseFloat(numerodosInput.value);
    var numerotres = parseFloat(numerotresInput.value);
    if (numerouno > numerodos && numerouno > numerotres) {
        var resultadoNumero = document.getElementById('resultadosol4');
        resultadoNumero.textContent = "El numero mayor es: ".concat(numerouno);
    }
    else if (numerodos > numerouno && numerodos > numerotres) {
        var resultadoNumero = document.getElementById('resultadosol4');
        resultadoNumero.textContent = "El numero mayor es: ".concat(numerodos);
    }
    else {
        var resultadoNumero = document.getElementById('resultadosol4');
        resultadoNumero.textContent = "El numero mayor es: ".concat(numerotres);
    }
    if (numerouno < numerodos && numerouno < numerotres) {
        var resultadoNumero = document.getElementById('resultadosol4y1');
        resultadoNumero.textContent = "El numero menor es: ".concat(numerouno);
    }
    else if (numerodos < numerouno && numerodos < numerotres) {
        var resultadoNumero = document.getElementById('resultadosol4y1');
        resultadoNumero.textContent = "El numero menor es: ".concat(numerodos);
    }
    else {
        var resultadoNumero = document.getElementById('resultadosol4y1');
        resultadoNumero.textContent = "El numero menor es: ".concat(numerotres);
    }
}
function calcularPotencia() {
    var numeroIngresadoInput = document.getElementById('numeropot');
    var numeroParaPotenciaInput = document.getElementById('numeroPotencia');
    var numeroIngresado = parseFloat(numeroIngresadoInput.value);
    var numeroParaPotencia = parseFloat(numeroParaPotenciaInput.value);
    var numeroFinal = Math.pow(numeroIngresado, numeroParaPotencia);
    var resultadoNumero = document.getElementById('resultadopot');
    resultadoNumero.textContent = "El numero potenciado es: ".concat(numeroFinal);
}
function invertirTexto() {
    var textoUsuario = document.getElementById("textrev").value;
    var textoInvertido = textoUsuario.split("").reverse().join("");
    document.getElementById("resultadotextinv").textContent = textoInvertido;
}
function calcularfactorial() {
    var numInput = document.getElementById('numfact');
    var num = parseInt(numInput.value);
    //validacion de entrada
    if (isNaN(num) || num < 0) {
        alert('Porfavor ingresa un numero entero no negativo.');
        return;
    }
    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }
    var result = factorial(num);
    var resultado = document.getElementById('resultadofact');
    resultado.textContent = "El factorial de ".concat(num, " es: ").concat(result);
}
function checkNumeroPerfecto() {
    var inputNumber = parseInt(document.getElementById('num1per').value);
    if (isNaN(inputNumber) || inputNumber <= 0) {
        alert("Error, por favor ingrese un numero entero positivo.");
        return;
    }
    var divisorSum = 0;
    for (var divisor = 1; divisor <= inputNumber / 2; divisor++) {
        if (inputNumber % divisor === 0) {
            divisorSum += divisor;
        }
    }
    var resultMessage = (divisorSum === inputNumber) ?
        "".concat(inputNumber, " es un numero perfecto.") :
        "".concat(inputNumber, " no es un numero perfecto.");
    document.getElementById('resultadoper').textContent = resultMessage;
}
function comprobarPrimo() {
    var numeroInput = document.getElementById('num1primo');
    // Handle potential null case for numeroInput
    if (!numeroInput) {
        console.error('Error: Input element with ID "numeroInput" not found.');
        return;
    }
    var numero = parseInt(numeroInput.value);
    // Validate input to ensure it's a positive integer
    if (isNaN(numero) || numero <= 0) {
        mostrarResultado('Ingrese un número positivo entero.');
        return;
    }
    // Check for prime number
    var esPrimo = true;
    for (var i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    // Display result
    mostrarResultado(esPrimo ? '¡El número es primo!' : 'El número no es primo.');
}
function mostrarResultado(mensaje) {
    var resultadoParrafo = document.getElementById('resultadoPrimo');
    // Check if resultadoParrafo is not null before accessing its properties
    if (resultadoParrafo) {
        resultadoParrafo.textContent = mensaje;
    }
    else {
        console.error('Error: Paragraph element with ID "resultado" not found.');
    }
}
function countVocales() {
    var inputText = document.getElementById('var1');
    var resultElement = document.getElementById('resultadoVocales'); // Use 'resultadoVocales' for the result element
    // Handle potential null references
    if (!inputText || !resultElement) {
        console.error('Error: Input or result elements not found.');
        return;
    }
    var text = inputText.value.toLowerCase(); // Convert to lowercase for consistent counting
    var vowelCount = 0;
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u') {
            vowelCount++;
        }
    }
    var resultMessage = "El texto ingresado tiene ".concat(vowelCount, " vocales.");
    resultElement.textContent = resultMessage; // Set textContent of 'resultadoVocales'
}
