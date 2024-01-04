const resultado = document.querySelector("#resultado");
const numero1 = document.querySelector("#n1");
const numero2 = document.querySelector("#n2");

const somar = document.querySelector("#somar");
const subtrar = document.querySelector("#subtrair");
const multiplicacao = document.querySelector("#multiplicacao");
const divisao = document.querySelector("#divisao");

somar.addEventListener("click", function() {
  resultado.innerHTML = Number(numero1.value) + Number(numero2.value);
});

subtrar.addEventListener("click", function() {
  resultado.innerHTML = numero1.value - numero2.value;
});

multiplicacao.addEventListener("click", function() {
  resultado.innerHTML = numero1.value * numero2.value;
});

divisao.addEventListener("click", function() {
  resultado.innerHTML = numero1.value / numero2.value;
});

