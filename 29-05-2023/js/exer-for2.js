/*
Crie esse array de times 
const times = ["Botafogo", "São Paulo", "Paulista"];

Usando for loop, mostre na tela, a messagem seguinte:
- O time é: Botafogo
- O time é: São Paulo
- O time é: Paulista
*/

const times = ["Botafogo", "São Pulo", "Paulista"];

for (let i = 0; i < times.length; i++) {
  document.write(`- O time é: ${times[i]}`);
  document.write("<br />");
}