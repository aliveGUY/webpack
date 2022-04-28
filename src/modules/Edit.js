export default function edit(item) {
    if(item.classList.contains('Delete')) {
      list.delete(item.parentElement.id);
      localStorage.setItem('Data', JSON.stringify(list.toArray()));
      item.parentNode.remove()
      refresh();
      refresh_dom();
    }
    item.classList.add('Delete')
    item.classList.remove('Edit');
    item.parentElement.children[1].setAttribute("contenteditable", true)
    window.addEventListener('click', (e) => {
      const ClickInide = item.parentElement.contains(e.target);
      if(!ClickInide){
        item.classList.add('Edit');
        item.classList.remove('Delete')
        item.parentElement.children[1].removeAttribute("contenteditable")
      }
    })
  }