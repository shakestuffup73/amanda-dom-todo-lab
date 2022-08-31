//* -------- CONSTANTS ---------- //

const btn = document.getElementById('submit-button');

const resetBtn = document.getElementById('reset-button')

const input = document.querySelector('input');

const ul = document.getElementById('todo-list');


//* -------- EVENT LISTENERS ---------- //

btn.addEventListener('click', (event) => {
  // console.log(event.target);
  let newListItem = document.createElement('li');

  if (!input.value) {
    return;
  }
  else {
    newListItem.textContent = input.value;
    ul.appendChild(newListItem);
  }
  input.value = '';
});
btn.addEventListener('click', (event));



input.addEventListener('keypress', (event) => {
  // console.log(event);

  if (!input.value) {
    return;
  }
  if (event.key === 'Enter') {
    let newListItem = document.createElement('li');
    newListItem.innerText = input.value;
    ul.appendChild(newListItem);
    input.value = '';
  }
});
input.addEventListener('keypress', (event));


resetBtn.addEventListener('click', (event) => {
  ul.innerHTML = '';
});
resetBtn.addEventListener('click', (event));



document.querySelector('ul').addEventListener('click', handleClick);

function handleClick(event) {
  event.target.innerHTML = ''; // makes empty text but keeps li bullet? still need to find how to get rid of the li itself...
  console.log(event.target);
}
