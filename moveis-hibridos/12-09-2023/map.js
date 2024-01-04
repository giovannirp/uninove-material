const vencedores = [
  {
    nome: "Equipe Super",
    pais: "Brasil"
  },
  {
    nome: "Time Maximo",
    pais: "EUA"
  },
  {
    nome: "Mega Grupo",
    pais: "Canadá"
  }
];

const result = document.querySelector(".resultado");

const resultadoHTML = vencedores.map((item) => {
  return `
    <div>
      Nome: <strong> ${item.nome} </strong><br>
      Pais: <strong> ${item.pais} </strong>
      <hr>
    </div>
  `;
});

result.innerHTML = resultadoHTML.join("");

