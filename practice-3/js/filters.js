const sortTable = () => {
  let table = document.querySelector('#table');

  //Шапка таблицы
  let thead = table.querySelector('.table__head');

  //Тело таблицы
  let tbody = table.querySelector('tbody');

  //Ячейки строк
  let ths = thead.children[0].children;

  //Элементы тела (записи)
  let rows = tbody.children;

  // Положение элемента заголовка таблицы
  let position;
  // Переключатель порядка сортировки
  let trigger = true;

  table.addEventListener('click', handler1);

  //Обраотчик клика
  function handler1 (evt) {
    let th = evt.target;
    let typeTh = th.dataset.type;
    if (th.parentNode == ths[0].parentNode) {
      position = [...ths].findIndex((element) => element == th);
      handler2(position, typeTh);
    }
  }

  function handler2 (position, typeTh) {
    if (trigger) {
      trigger = false;
      tbody.replaceChildren(...sortAsc(position, typeTh))
    } else {
      trigger = true;
      tbody.replaceChildren(...sortDesc(position, typeTh))
    }
  }

  //Сортировка массива по возрастанию
  function sortAsc (position, type) {
    if (type == 'number') {
      return [...rows].sort((a, b) => ((a.children[position].innerHTML - b.children[position].innerHTML)));
    } else if (type == 'string') {
      return [...rows].sort((a, b) => ((a.children[position].innerHTML < b.children[position].innerHTML) ? -1 : 1));
    }
  }

  //Сортировка массива по убыванию
  function sortDesc (position, type) {
    if (type == 'number') {
      return [...rows].sort((a, b) => ((b.children[position].innerHTML - a.children[position].innerHTML)));
    } else if (type == 'string') {
      return [...rows].sort((a, b) => ((a.children[position].innerHTML > b.children[position].innerHTML) ? -1 : 1));
    }
  }
}

sortTable();
