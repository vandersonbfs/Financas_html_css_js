# Detalhes do projeto

### HTML

O código HTML define a estrutura básica de uma aplicação de controle financeiro simples. Aqui estão os principais componentes:

1. **Estrutura do Documento:**
    - `<!DOCTYPE html>`: Declara que o documento é HTML5.
    - `<html lang="pt-br">`: Define o idioma como português brasileiro.
2. **Cabeçalho (`<head>`):**
    - `<meta charset="UTF-8">`: Define a codificação de caracteres como UTF-8.
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configura o layout responsivo para dispositivos móveis.
    - `<link rel="stylesheet" href="css/style.css">`: Importa um arquivo CSS externo para estilização.
    - `<title>Finanças</title>`: Define o título da página.
3. **Corpo (`<body>`):**
    - `<main>`: Elemento principal que contém o conteúdo da aplicação.
    - `<div class="resume">`: Exibe um resumo financeiro com entradas, saídas e total.
    - `<div class="newItem">`: Formulário para adicionar novos itens de transação (descrição, valor e tipo).
    - `<div class="divTable">`: Tabela que mostrará as transações adicionadas, com colunas para descrição, valor, tipo e ações (como excluir).
4. **Scripts:**
    - `<script src="<https://unpkg.com/boxicons@2.1.4/dist/boxicons.js>"></script>`: Importa um conjunto de ícones.
    - `<script src="js/script.js"></script>`: Importa um arquivo JavaScript que contém a lógica da aplicação.

### CSS

O CSS estiliza a aplicação, tornando-a visualmente agradável e responsiva:

1. **Reset de Estilos:**
    - `{ margin: 0; padding: 0; box-sizing: border-box; }`: Remove margens e preenchimentos padrão e define o box-sizing para facilitar o controle do layout.
2. **Estilização do Corpo:**
    - `body{ display: flex; justify-content: center; min-height: 100vh; }`: Centraliza o conteúdo vertical e horizontalmente.
3. **Estilização do Main:**
    - `main{ max-width: 550px; width: 100%; display: flex; flex-direction: column; align-items: center; }`: Define uma largura máxima para o elemento principal e organiza seu conteúdo em coluna.
4. **Resumo Financeiro:**
    - `.resume{ display: flex; padding: 10px 0; gap: 40px; }`: Alinha os elementos do resumo com espaçamento.
5. **Formulário de Novo Item:**
    - `.newItem{ display: flex; gap: 10px; align-items: end; }`: Organiza os campos de entrada do formulário.
6. **Tabela:**
    - `.divTable{ width: 100%; display: flex; justify-content: center; }`: Centraliza a tabela na página.
    - `table{ width: 98%; padding: 20px 0; border-radius: 5px; }`: Define a largura e o estilo da tabela.

### JavaScript

O JavaScript gerencia a lógica e a interatividade da aplicação:

1. **Seleção de Elementos:**
    - Usa `document.querySelector` para selecionar elementos HTML, como campos de entrada e botões.
2. **Local Storage:**
    - `getItemsBD()` e `setItemsBD()`: Funções para obter e salvar itens no localStorage, permitindo que os dados persistam entre recarregamentos de página.
3. **Adicionando um Novo Item:**
    - O evento de clique no botão "Incluir" verifica se todos os campos estão preenchidos e, se sim, adiciona o item ao array `items`, salva no localStorage e recarrega a tabela.
4. **Removendo um Item:**
    - `deleteItem(index)`: Remove um item com base no índice e atualiza o localStorage.
5. **Carregando Itens:**
    - `loadItems()`: Carrega todos os itens armazenados no localStorage, limpando a tabela atual e inserindo os novos itens.
6. **Cálculo de Totais:**
    - `getTotals()`: Calcula e atualiza os totais de entradas, saídas e o total geral, filtrando os itens por tipo e somando os valores.
7. **Execução Inicial:**
    - `loadItems()`: Chama a função para carregar os itens assim que a página é carregada.

### Conclusão

Esse código cria uma aplicação simples de controle financeiro que permite ao usuário adicionar, visualizar e excluir transações, além de calcular totais de entradas e saídas. A estrutura é bem organizada e utiliza técnicas modernas de HTML, CSS e JavaScript para garantir uma boa experiência ao usuário.
