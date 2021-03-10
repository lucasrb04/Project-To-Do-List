/* eslint-disable no-param-reassign */
const lista = document.querySelector('#lista-tarefas');
function addItem() {
  const inputTexto = document.querySelector('#texto-tarefa').value;
  const newItem = document.createElement('li');
  newItem.innerText = inputTexto;
  lista.appendChild(newItem);
  document.getElementById('texto-tarefa').value = '';
}
const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addItem);

function selectedItem(event) {
  for (let index = 0; index < lista.children.length; index += 1) {
    lista.children[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128';
}
lista.addEventListener('click', selectedItem);

function clearAll(event) {
  // for (let index = 0; index < lista.children.length; index += 1) {
  //   lista.removeChild(['li']);
  // }
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
const rmButton = document.getElementById('apaga-tudo');
rmButton.addEventListener('click', clearAll);
