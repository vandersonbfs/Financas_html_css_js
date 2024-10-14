const tbody = document.querySelector("tbody");
// Seleciona o corpo da tabela onde os itens serão adicionados dinamicamente.

const descItem = document.querySelector("#desc");
// Seleciona o campo de entrada de texto onde o usuário insere a descrição do item.

const amount = document.querySelector("#amount");
// Seleciona o campo de entrada onde o usuário insere o valor da transação.

const type = document.querySelector("#type");
// Seleciona o campo de seleção onde o usuário escolhe o tipo de transação (Entrada ou Saída).

const btnNew = document.querySelector("#btnNew");
// Seleciona o botão que, quando clicado, adiciona uma nova transação.

const incomes = document.querySelector(".incomes");
// Seleciona o elemento onde o total de entradas será exibido.

const expenses = document.querySelector(".expenses");
// Seleciona o elemento onde o total de saídas será exibido.

const total = document.querySelector(".total");
// Seleciona o elemento onde o valor total (entradas - saídas) será exibido.

let items = getItemsBD(); 
// Inicializa a variável "items" com os dados armazenados no localStorage, ou um array vazio se não houver dados.

// Função para obter itens do localStorage
function getItemsBD() {
  return JSON.parse(localStorage.getItem("db_items")) ?? [];
  // Pega os dados salvos no localStorage (convertidos de JSON para objeto), ou retorna um array vazio se não houver.
}

// Função para salvar itens no localStorage
function setItemsBD() {
  localStorage.setItem("db_items", JSON.stringify(items));
  // Converte o array de itens para JSON e salva no localStorage.
}

btnNew.onclick = () => {
  // Evento de clique do botão para adicionar um novo item.

  // Verifica se todos os campos estão preenchidos corretamente.
  if (descItem.value === "" || amount.value === "" || isNaN(amount.value) || type.value === "") {
    return alert("Preencha todos os campos!");
    // Exibe um alerta se algum campo estiver vazio ou se o valor inserido não for um número válido.
  }

  // Adiciona um novo item ao array "items".
  items.push({
    desc: descItem.value, // Pega a descrição do campo "descItem".
    amount: Math.abs(Number(amount.value)).toFixed(2), 
    // Converte o valor do campo "amount" para número, remove o sinal negativo (se houver) e formata com duas casas decimais.
    type: type.value, // Pega o tipo de transação selecionado (Entrada ou Saída).
  });

  setItemsBD();
  // Salva os itens atualizados no localStorage.

  loadItems();
  // Recarrega os itens na tabela.

  descItem.value = "";
  amount.value = "";
  // Limpa os campos de entrada para uma nova inserção.
};

function deleteItem(index) {
  // Função para remover um item da lista.

  items.splice(index, 1);
  // Remove o item da posição "index" no array "items".

  setItemsBD();
  // Atualiza o localStorage com os itens restantes.

  loadItems();
  // Recarrega a tabela para refletir a remoção.
}

function insertItem(item, index) {
  // Função para inserir um novo item na tabela.

  let tr = document.createElement("tr");
  // Cria uma nova linha (tr) para a tabela.

  // Define o conteúdo HTML da linha, exibindo a descrição, o valor e o tipo (Entrada ou Saída).
  tr.innerHTML = `
    <td>${item.desc}</td>
    <td>R$ ${item.amount}</td>
    <td class="columnType">${
      item.type === "Entrada"
        ? '<i class="bx bxs-chevron-up-circle"></i>' // Ícone para Entrada.
        : '<i class="bx bxs-chevron-down-circle"></i>' // Ícone para Saída.
    }</td>
    <td class="columnAction">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      <!-- Botão para deletar o item correspondente ao índice "index". -->
    </td>
  `;

  tbody.appendChild(tr);
  // Adiciona a nova linha à tabela (tbody).
}

function loadItems() {
  // Função para carregar todos os itens na tabela.

  items = getItemsBD();
  // Atualiza o array "items" com os dados salvos no localStorage.

  tbody.innerHTML = "";
  // Limpa o conteúdo atual do corpo da tabela.

  items.forEach((item, index) => {
    // Percorre o array "items" e insere cada item na tabela.
    insertItem(item, index);
  });

  getTotals();
  // Atualiza os totais de entradas, saídas e o valor total.
}

function getTotals() {
  // Função para calcular e exibir os totais (entradas, saídas e total geral).

  const amountIncomes = items
    .filter((item) => item.type === "Entrada")
    // Filtra os itens do tipo "Entrada".
    .map((transaction) => Number(transaction.amount));
    // Transforma o valor das entradas em números.

  const amountExpenses = items
    .filter((item) => item.type === "Saída")
    // Filtra os itens do tipo "Saída".
    .map((transaction) => Number(transaction.amount));
    // Transforma o valor das saídas em números.

  const totalIncomes = amountIncomes
    .reduce((acc, cur) => acc + cur, 0)
    // Soma todos os valores de entrada.
    .toFixed(2);
    // Formata o total de entradas com duas casas decimais.

  const totalExpenses = Math.abs(
    amountExpenses.reduce((acc, cur) => acc + cur, 0)
    // Soma todos os valores de saída.
  ).toFixed(2);
  // Formata o total de saídas com duas casas decimais e remove o sinal negativo.

  const totalItems = (totalIncomes - totalExpenses).toFixed(2);
  // Calcula o valor total (entradas menos saídas) e formata com duas casas decimais.

  incomes.innerHTML = totalIncomes;
  // Atualiza o campo de entradas com o valor total de entradas.

  expenses.innerHTML = totalExpenses;
  // Atualiza o campo de saídas com o valor total de saídas.

  total.innerHTML = totalItems;
  // Atualiza o campo de total com o valor final.
}

loadItems();
// Chama a função para carregar e exibir os itens ao iniciar a página.
