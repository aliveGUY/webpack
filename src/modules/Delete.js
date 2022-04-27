import LinkedList from './LinkedList.js';
const DltBtn = document.querySelectorAll('.Delete');
const Clear = document.querySelector('.List-clear');
const data = JSON.parse(localStorage.getItem('Data')) || [];

const list = new LinkedList();
data.forEach((item) => {
  list.append(item.value, item.completed, item.index)
})

DltBtn.forEach((item) => {
  item.onclick = ()=>{
    list.delete(item.parentElement.childNodes[3].innerHTML);
    localStorage.setItem('Data', JSON.stringify(list.toArray()));
    document.location.reload()
  }
})

Clear.onclick = () => {
  const data = JSON.parse(localStorage.getItem('Data')) || [];
  let o = 0
  while(data[o] && o < 100){
    if(data[o].completed) {
      list.delete(data[o].value);
      localStorage.setItem('Data', JSON.stringify(list.toArray()));
      document.location.reload();
    }
    o++
  }
}
