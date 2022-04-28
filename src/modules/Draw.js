import LinkedList from './LinkedList.js';
import edit from './Edit.js';
import check from './Check.js';
const Input = document.querySelector('.List-add');
const array = document.querySelector('.List');
let data = JSON.parse(localStorage.getItem('Data')) || [];

let SltBtn = document.querySelectorAll('.checkbox');
let EdtBtn = document.querySelectorAll('.Edit')

let list = new LinkedList();

const refresh_dom = () => {
  const node = document.querySelectorAll('.list_item');
  let index = 0;
  node.forEach((item) => {
    item.id = index
    index++
  })
}

const refresh = () => {
  let index2 = 0;
  data = JSON.parse(localStorage.getItem('Data')) || [];
  list = new LinkedList();
  SltBtn = document.querySelectorAll('.checkbox');
  SltBtn.forEach((item) => {
    item.onchange = () => {
      check(item, list)
    }
  })

  EdtBtn = document.querySelectorAll('.Edit')
  EdtBtn.forEach((item) => {
    item.onclick = () => {
      edit(item)
    }
  })

  data.forEach((item) => {
    list.append(item.value, item.completed, index2);
    localStorage.setItem('Data', JSON.stringify(list.toArray()));
    index2++;
  })
}

const Draw = (data,index) => {
  const checked = data.completed ? 'checked' : '';
  const task = `
    <li class="list_item" id="${index}">
        <input type="checkbox" name="task" ${checked} class="checkbox">
        <label class="task" for="task">${data.value}</label>
        <button class="Edit"></button>
    </li>`;
    const Child = document.createRange().createContextualFragment(task);
    array.appendChild(Child);
    Input.value = ''
}


Input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    refresh()
    list.append(Input.value, false, data.length);
    localStorage.setItem('Data', JSON.stringify(list.toArray()));
    Draw(list.toArray()[data.length], data.length)
    refresh()
  }
});

//  Usage of saved data
data.forEach((item) => {
  Draw(item, item.index);
})

refresh()
console.log(EdtBtn)

EdtBtn.forEach((item) => {
  item.onclick = () => {
    edit(item)
  }
})

SltBtn.forEach((item) => {
  item.onchange = () => {
    check(item, list)
  }
})







// Clear
const Clear = document.querySelector('.List-clear');
Clear.onclick = () => {
  const node = document.querySelectorAll('.list_item');
  node.forEach((item) => {
    if(item.children[0].checked) {
      list.delete(item.id);
      localStorage.setItem('Data', JSON.stringify(list.toArray()));
      item.remove()
      refresh();
      refresh_dom();
    }
  })
}




