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

function clearAll() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
const rmButton = document.getElementById('apaga-tudo');
rmButton.addEventListener('click', clearAll);

function finishedItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
  // for (let index = 0; index < lista.children.length; index += 1) {
  //   if (lista.children[index].classList.contains('completed')) {
  //     lista.children[index].classList.add('completed');
  //   } else. {
  //     lista.children[index].classList.remove('completed');
  //   }
  // }
}
lista.addEventListener('dblclick', finishedItem);
