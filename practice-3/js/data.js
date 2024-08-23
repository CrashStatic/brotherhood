import { renderRows, containerElement } from "./table-row.js";
import "./filters.js";
import "./search.js";

const getData = () => fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

  const data = () => getData()
  .then((rows) => {
    renderRows(rows, containerElement);
  });

  data();

  export { data }
