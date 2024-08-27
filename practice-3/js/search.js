import { data } from './data.js';
const MIN_LENGTH = 3;

function filterTable() {
  const input = document.getElementById('searchInput');
  const rows = document.querySelector('.table__body').getElementsByTagName('tr');
  const search = input.value.toUpperCase().trim();
  const table = document.getElementById('table');

  for (let i = 0; i < rows.length; i++) {
    let content = rows[i].textContent.toUpperCase();
    if (search.length >= MIN_LENGTH) {
      rows[i].style.display = content.includes(search) ? '' : 'none';
    }
  }

  if (input.value == '') {
    table.clear();
    data();
  }
}

document.getElementById('searchInput').addEventListener('keyup', filterTable);
