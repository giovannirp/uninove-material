/*
  Mostre na tela, um lista de números de 0 à 5
  Exemplo: 
  - Esse número é 0
  - Esse número é 1
  - Esse número é 2
  - Esse número é 3
  - Esse número é 4
  - Esse número é 5
*/

for (let i = 0; i < 6; i++) {
  //document.write(" - Esse número é " + i);
  document.write(` - Esse número é ${i}`);
  document.write("<br />");
}

/*
  - Escreva um loop (for) que exiba a frase abaixo no console;
  - Substitua o "X" pela informação correta;
  - "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
  - Exiba a frase 10x na tela.

  "Esta é a Xª vez que esta frase é exibida na tela."
*/

for (let i = 1; i <= 10; i++) {
  document.write(`Esta é a ${i}ª vez que esta frase é exibida na tela.`);
  document.write("<br />");
  document.write("<br />");
}