const produtoForm = document.getElementById("produtoForm");
const produtoTable = document.getElementById("produtoTable");
const novoProdutoBtn = document.getElementById("novoProdutoBtn");

const produtos = [];

produtoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nomeProduto").value;
  const descricao = document.getElementById("descricaoProduto").value;
  const valor = parseFloat(document.getElementById("valorProduto").value);
  const disponivel = document.getElementById("disponivelVenda").value === "sim";

  const produto = {
    nome,
    descricao,
    valor,
    disponivel,
  };

  produtos.push(produto);
  updateProductTable();
});

novoProdutoBtn.addEventListener("click", () => {
  // Limpar o formulário para cadastrar um novo produto
  produtoForm.reset();
});

function updateProductTable() {
  // Ordenar os produtos por valor (menor para o maior)
  produtos.sort((a, b) => a.valor - b.valor);

  // Limpar a tabela antes de atualizar
  produtoTable.querySelector("tbody").innerHTML = "";

  // Adicionar os produtos na tabela
  produtos.forEach((produto) => {
    const row = produtoTable.querySelector("tbody").insertRow();
    const cellNome = row.insertCell(0);
    const cellValor = row.insertCell(1);

    cellNome.innerText = produto.nome;
    cellValor.innerText = `R$ ${produto.valor.toFixed(2)}`;
  });
}
 