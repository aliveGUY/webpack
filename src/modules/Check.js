export default function check(item, list) {
    list.toArray()[item.parentNode.id].completed = item.checked;
    localStorage.setItem('Data', JSON.stringify(list.toArray()));
  }