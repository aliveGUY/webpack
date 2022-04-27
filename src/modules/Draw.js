import LinkedList from './LinkedList.js';
const data = JSON.parse(localStorage.getItem('Data')) || [];
const input = document.querySelector('.List-add');
const array = document.querySelector('.List');

const list = new LinkedList();

//  Usage of saved data
let index = 0;
data.forEach((item) => {
  list.append(item.value, item.completed, index);
  const checked = item.completed ? 'checked' : '';
  const task = `
    <li class="list_item" id ="${index}" draggable="true">
        <input name="task${index}" type="checkbox" ${checked} class="checkbox">
        <label for="task${index}">${item.value}</label>
        <button class="Edit"></button>
        <button class="Delete">X</button>
    </li>
    <hr/>`;
  const Child = document.createRange().createContextualFragment(task);
  array.appendChild(Child);
  index += 1;
});

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    const data = JSON.parse(localStorage.getItem('Data')) || [];
    list.append(input.value, false, data.length);
    localStorage.setItem('Data', JSON.stringify(list.toArray()));
    document.location.reload();
  }
});
