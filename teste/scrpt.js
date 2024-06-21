// Supondo que você tem uma tabela com id 'minhaTabela'
let tabela = document.getElementById('tabelinha');

// Supondo que a linha original que você quer duplicar tenha id 'linhaOriginal'
let linhaOriginal = document.getElementById('body');

// Número de cópias que você deseja criar
let numCopias = 6;

// Loop para criar e adicionar múltiplas cópias
for (let i = 0; i < numCopias; i++) {
  // Clonar a linha original
  let linhaClonada = linhaOriginal.cloneNode(true); // true para clonar também os elementos filhos

  
  // Adicionar a linha clonada na tabela
  tabela.appendChild(linhaClonada);
}

// Supondo que você tem uma tabela com id 'minhaTabela'
let tabeladois = document.getElementById('value');

// Supondo que a linha original que você quer duplicar tenha id 'linhaOriginal'
let linhaOriginalres = document.getElementById('total-despesas');

// Variável para armazenar o total da soma
let total = 0;

// Iterar sobre as linhas da tabela (excluindo cabeçalho e rodapé)
for (let i = 1; i < tabela.rows.length - 1; i++) {
  // Obter o valor da célula da coluna "Valor" na linha atual
  let valorCelula = parseFloat(tabela.rows[i].cells[4].textContent);
  
  // Somar ao total
  total += valorCelula;
}

// Exibir o total na célula do rodapé
totalValorCell.textContent = total.toFixed(4); // Formata o total com duas casas decimais, se necessário