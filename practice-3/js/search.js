import { data } from './data.js';
const MIN_LENGTH = 3;

function filterTable() {
  let input = document.getElementById('searchInput');
  let rows = document.querySelector('.table__body').getElementsByTagName('tr');
  let search = input.value.toUpperCase().trim();

  for (let i = 0; i < rows.length; i++) {
    let content = rows[i].textContent.toUpperCase();
    if (search.length >= MIN_LENGTH) {
      rows[i].style.display = content.includes(search) ? '' : 'none';
    }
  }

  if (input.value == '') {
    data();
  }
}

document.getElementById('searchInput').addEventListener('keyup', filterTable);
