class Calculadora {
  constructor() {}
  sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }

  multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }

  dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
  }

  potenciar(num, exp) {
    return parseInt(num) ** parseInt(exp);
  }

  raizCuadrada(num) {
    return Math.sqrt(num);
  }

  raizCubica(num) {
    return Math.cbrt(num);
  }
}

const calculadora = new Calculadora();

alert(`Qué operación deseas realizar`);
let operacion = prompt(
  "1: suma, 2: resta, 3: multiplicación, 4: división, 5: potenciación, 6:raíz cuadrada, 7: raíz cúbica"
);

let numero1 = prompt(`Primer número para operar`);
let numero2 = prompt(`Segundo número para operar`);

if (operacion == 1) {
  let resultado = calculadora.sumar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 2) {
  let resultado = calculadora.restar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 3) {
  let resultado = calculadora.multiplicar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 4) {
  let resultado = calculadora.dividir(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 5) {
  let resultado = calculadora.potenciar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 6) {
  let numero3 = prompt(`Calcular la raíz cuadrada de:`);
  let resultado = calculadora.raizCuadrada(numero3);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 7) {
  let numero4 = prompt(`Calcular la raíz cúbica de:`);
  let resultado = calculadora.raizCubica(numero4);
  alert(`Tu resultado es ${resultado}`);
} else {
  alert(`<b>Por favor ingresa un valor válido</b>`);
}
