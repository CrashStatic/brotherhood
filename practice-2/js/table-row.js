const containerElement = document.querySelector('.tabel__body');
const rowTemplate = document.querySelector('#tabel-row').content.querySelector('.tabel-row');

const getRow = ({ userId, id, title, body }) => {

  const rowElement = rowTemplate.cloneNode(true);
  rowElement.querySelector('.tabel-row__user-id').textContent = userId;
  rowElement.querySelector('.tabel-row__id').textContent = id;
  rowElement.querySelector('.tabel-row__title').textContent = title;
  rowElement.querySelector('.tabel-row__body').textContent = body;

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
