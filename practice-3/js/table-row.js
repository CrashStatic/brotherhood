const containerElement = document.querySelector('.table__body');
const rowTemplate = document.querySelector('#table-row').content.querySelector('.table-row');

const getRow = ({ userId, id, title, body }) => {

  const rowElement = rowTemplate.cloneNode(true);
  rowElement.querySelector('.table-row__user-id').textContent = userId;
  rowElement.querySelector('.table-row__id').textContent = id;
  rowElement.querySelector('.table-row__title').textContent = title;
  rowElement.querySelector('.table-row__body').textContent = body;

  return rowElement;
};

const renderRows = (rows, container) => {
  const fragmentElement = document.createDocumentFragment();
  rows.forEach((element) => {
    const row = getRow(element);
    fragmentElement.appendChild(row);
  });

  container.appendChild(fragmentElement);
};

export { renderRows, containerElement };
