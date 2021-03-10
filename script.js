const lista = document.getElementById('lista-tarefas');
function addItem() {
  const inputTexto = document.querySelector('#texto-tarefa').value;
  const newItem = document.createElement('li');
  newItem.innerText = inputTexto;
  lista.appendChild(newItem);
  document.getElementById('texto-tarefa').value = '';
}
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addItem);

lista.addEventListener('click', function(event){
  event.target.style.backgroundColor = ('rgb(128,128,128');
});
