import { renderRows, containerElement } from "./table-row.js";

const getData = () => fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

  getData()
  .then((rows) => {
    renderRows(rows, containerElement);
  });
