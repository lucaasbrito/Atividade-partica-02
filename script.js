//exercico 1

let celsius = parseFloat(prompt("Digite a temperatura:"));

let fahrenheit = (celsius * 9) / 5 + 32;

alert("A temperatura em Fahrenheit é: " + fahrenheit);

// exercicio 2

let dia = parseInt(prompt("Digite um numero de 1 a 7:"));

switch (dia) {
  case 1:
    alert("Segunda-Feira");
    break;
  case 2:
    alert("Terça-Feira");
    break;
  case 3:
    alert("Quarta-Feira");
    break;
  case 4:
    alert("Quinta-Feira");
    break;
  case 5:
    alert("Sexta-Feira");
    break;
  case 6:
    alert("Sabado");
    break;
  case 7:
    alert("Domingo");
    break;
  default:
    alert("Dia inválido!");
}

// exercicio 3

let numero = parseFloat(prompt("Digite um numero:"));

if (numero > 0) {
  alert("O numero é positivo");
} else if (numero < 0) {
  alert("O numero é negativo");
} else {
  alert("O numero é zero");
}

//exercicio 4

let custoInicial = parseFloat(prompt("Digite o custo inicial do carro:"));

let percentualDistribuidor = 28 / 100;
let impostos = 45 / 100;

let custoDistribuidor = custoInicial * percentualDistribuidor;
let custoImpostos = custoInicial * impostos;

let custoFinal = custoInicial + custoDistribuidor + custoImpostos;

alert("Custo final é: R$" + custoFinal);

//exercicio 5

let altura = parseFloat(prompt("Digite sua altura:"));
let peso = parseFloat(prompt("Digite peso:"));

let imc = peso / (altura * altura);

let resultado;
if (imc < 18.5) {
  resultado = "Você está abaixo da faixa de peso ideal";
} else if (imc > 24.99) {
  resultado = "Você está acima da faixa de peso ideal";
} else {
  resultado = "Você está na faixa de peso ideal";
}

alert("Resultado do IMC: " + resultado);

//exercicio 6

let primeiroNumero = parseFloat(prompt("Primeiro Numero:"));
let segundoNumero = parseFloat(prompt("Segundo Numero:"));

let operador = prompt("Digite um Operador: ");
let resultado;

switch (operador) {
  case "+":
    resultado = primeiroNumero + segundoNumero;
    break;
  case "-":
    resultado = primeiroNumero - segundoNumero;
    break;
  case "*":
    resultado = primeiroNumero * segundoNumero;
    break;
  case "/":
    if (segundoNumero !== 0) {
      alert("Não é possivel dividir por zero!");
      break;
    }
    resultado = primeiroNumero / segundoNumero;
    break;
  default:
    alert("Operador inválido!");
}

if (resultado !== "erro") {
  alert("Resultado: " + resultado);
}

//exercicio 7

let saldo = 1000;
let valorSaque = parseFloat(prompt("Digite o valor do saque"));

if (valorSaque <= 0) {
  alert("O valor deve ser Positivo!");
} else if (valorSaque % 5 !== 0) {
  alert(" O valor deve ser multiplo de de 5!");
} else if (valorSaque + 4.5 > saldo) {
  alert(
    "Saldo insuficiente para realizar o saque (incluindo taxa de R$ 4,50). "
  );
} else {
  saldo -= valorSaque + 4.5;
  alert("Saque realizado com sucesso! Novo saldo: R$" + saldo);
}

//exercico 8

let idade = parseInt(prompt("Digite a idade do atleta:"));
let peso = parseFloat(prompt("Digite o peso do atleta:"));

let categoria;

if (idade <= 12) {
  categoria = "Infantil";
} else if (idade <= 16) {
  categoria = peso <= 40 ? "Juvenil leve" : "juvenil pesado";
} else if (idade <= 24)
  if (peso <= 45) {
    categoria = "Senior Leve";
  } else if (peso <= 60) {
    categoria = "Senior medio";
  } else {
    categoria = "Senior pesado";
  }
else {
  categoria = "Veterano";
}
alert("Categoria do atleta: " + categoria);

//exercico 9

const velocidade = parseFloat(prompt("Digite a Velocidade do carro: "));

if (velocidade > 80) {
  const altaVelocidade = velocidade - 80;
  const multa = altaVelocidade * 5;
  alert("Você foi multado!");
  alert(`valor da multa: R$ ${multa}`);
} else {
  alert("Você não foi multado!");
}
