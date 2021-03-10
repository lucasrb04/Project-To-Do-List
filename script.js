function addItem() {
  const inputTexto = document.querySelector('#texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  const newItem = document.createElement('li');
  newItem.innerText = inputTexto;
  lista.appendChild(newItem);
  document.getElementById('texto-tarefa').value = '';
}
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addItem);
