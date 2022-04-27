import './style.css';
import './modules/Draw.js'
import './modules/Delete.js'

//  Save checkbox value in Local storage
const data = JSON.parse(localStorage.getItem('Data')) || [];
const check = document.querySelectorAll('.checkbox');
check.forEach((item) => {
  item.addEventListener('change', () => {
    data[item.parentNode.id].completed = item.checked;
    localStorage.setItem('Data', JSON.stringify(data));
  });
});
