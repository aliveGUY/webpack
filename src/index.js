import './style.css';
import './modules/LinkedList.js';

const array = document.querySelector('.List');
const { LinkedList } = require('./modules/LinkedList.js');

const list = new LinkedList();

const Arr = [
  {
    value: 'Task 1',
    completed: false,
    index: 0,
  },
  {
    value: 'Task 2',
    completed: false,
    index: 1,
  },
  {
    value: 'Task 3',
    completed: false,
    index: 2,
  },
  {
    value: 'Task 4',
    completed: false,
    index: 3,
  },
  {
    value: 'Task 5',
    completed: false,
    index: 4,
  },
];

Arr.forEach((item) => {
  list.append(item.value, item.completed, item.index);
  const checked = item.completed ? 'checked' : '';
  const task = `
      <li class="list_item" id ="${item.index}">
          <input name="task${item.index}" type="checkbox" ${checked} class="checkbox">
          <label for="task${item.index}">${item.value}</label>
          <button>-</button>
      </li>
      <hr/>`;
  const Child = document.createRange().createContextualFragment(task);
  array.appendChild(Child);
});

//  Save checkbox value in Local storage
const data = JSON.parse(localStorage.getItem('Data')) || [];
const check = document.querySelectorAll('.checkbox');
data.forEach((item) => {
  list.append(item);
});
check.forEach((item) => {
  item.addEventListener('change', () => {
    data[item.parentNode.id].completed = item.checked;
    localStorage.setItem('Data', JSON.stringify(data));
  });
});
