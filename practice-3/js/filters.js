// import { renderRows, containerElement } from "./table-row.js";

// let currentRows = [];

// const rowFiltersContainerElement = document.querySelector('.table__head');

// const sortRow = (rowA, rowB) => rowB.length - rowA.length;

// const getFilteredRows = () => [...currentRows].sort(sortRow);

// const initFilters = (rows) => {
//   currentRows = rows;
//   rowFiltersContainerElement.addEventListener('click', (evt) => {
//     if (!evt.target.classList.contains('table__head-button')) {
//       return;
//     }
//     const clickedButton = evt.target;
//     const sortedRows = getFilteredRows(clickedButton.id);
//     renderRows(sortedRows, containerElement);
//   });
// };

// export { initFilters };


// var getCellValue = function(tr, idx){ return tr.children[idx].innerText || tr.children[idx].textContent; }

// var comparer = function(idx, asc) { return function(a, b) { return function(v1, v2) {
//         return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
//     }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
// }};

// // do the work...
// Array.prototype.slice.call(document.querySelectorAll('th')).forEach(function(th) { th.addEventListener('click', function() {
//         var table = th.parentNode
//         while(table.tagName.toUpperCase() != 'TABLE') table = table.parentNode;
//         Array.prototype.slice.call(table.querySelectorAll('tr:nth-child(n+2)'))
//             .sort(comparer(Array.prototype.slice.call(th.parentNode.children).indexOf(th), this.asc = !this.asc))
//             .forEach(function(tr) { table.appendChild(tr) });
//     })
// });


// document.querySelectorAll('th.order').forEach(th_elem => {
//   let asc=true
//   const index = Array.from(th_elem.parentNode.children).indexOf(th_elem)
//   th_elem.addEventListener('click', (e) => {
//       const arr = [... th_elem.closest("table").querySelectorAll('tbody tr')]
//       arr.sort( (a, b) => {
//           const a_val = a.children[index].innerText
//           const b_val = b.children[index].innerText
//           return (asc) ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val)
//       })
//       arr.forEach(elem => {
//           th_elem.closest("table").querySelector("tbody").appendChild(elem)
//       })
//       asc = !asc
//   })
// })



// table.addEventListener('click', (evt) => {
//   if (evt.target.tagName != 'TH') {
//     return
//   }

//   let th = evt.target;

//   sortTable(th.cellIndex, th.dataset.type);

//   function sortTable(colNum, type) {
//     let tbody = table.querySelector('tbody');
//     let rowsArray = Array.from(tbody.rows);
//     let compare;

//     switch(type) {
//       case 'number':
//         compare = function(rowA, rowB) {
//           return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//         }
//         break;
//       case 'string':
//         compare = function(rowA, rowB) {
//           return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//         }
//         break;
//     }

//     rowsArray.sort(compare);
//     tbody.append(...rowsArray);
//   }
// });



// const table = document.querySelector('#table');

// const titles = table.querySelectorAll('th');

// titles.forEach((column) => {
//   if (column.classList.contains('max')) {
//     column.classList.toggle('max');
//     table.addEventListener('click', (evt) => {
//       if (evt.target.tagName != 'TH') {
//         return
//       }

//       let th = evt.target;

//       sortTable(th.cellIndex, th.dataset.type);

//       function sortTable(colNum, type) {
//         let tbody = table.querySelector('tbody');
//         let rowsArray = Array.from(tbody.rows);
//         let compare;

//         switch(type) {
//           case 'number':
//             compare = function(rowA, rowB) {
//               return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
//             }
//             break;
//           case 'string':
//             compare = function(rowA, rowB) {
//               return rowB.cells[colNum].innerHTML > rowA.cells[colNum].innerHTML ? 1 : -1;
//             }
//             break;
//         }

//         rowsArray.sort(compare);
//         tbody.append(...rowsArray);
//       }
//     });
//   } else {
//     table.addEventListener('click', (evt) => {
//       if (evt.target.tagName != 'TH') {
//         return
//       }

//       let th = evt.target;

//       sortTable(th.cellIndex, th.dataset.type);

//       function sortTable(colNum, type) {
//         let tbody = table.querySelector('tbody');
//         let rowsArray = Array.from(tbody.rows);
//         let compare;

//         switch(type) {
//           case 'number':
//             compare = function(rowA, rowB) {
//               return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//             }
//             break;
//           case 'string':
//             compare = function(rowA, rowB) {
//               return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//             }
//             break;
//         }

//         rowsArray.sort(compare);
//         tbody.append(...rowsArray);
//       }
//     });
//     column.classList.add('max');
//   }
// })

// const titles = table.querySelectorAll('th');

// table.addEventListener('click', (evt) => {
//   if (evt.target.tagName != 'TH') {
//     return
//   }

//   let th = evt.target;

//   sortTable(th.cellIndex, th.dataset.type);

//   function sortTable(colNum, type) {
//     let tbody = table.querySelector('tbody');
//     let rowsArray = Array.from(tbody.rows);
//     let compare;
//     let title = table.querySelector('th');

//     switch(type) {
//       case 'number':
//         compare = function(rowA, rowB) {
//           if (!title.classList.contains('max')) {
//             title.classList.add('max');
//             return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
//           } else {
//             title.classList.remove('max');
//             return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//           }
//         }
//         break;
//       case 'string':
//         compare = function(rowA, rowB) {
//           return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//         }
//         break;
//     }

//     rowsArray.sort(compare);
//     tbody.append(...rowsArray);
//   }
// });

// let thead = document.querySelector('.table__head'),
//     tbody = document.querySelector('.table__body'),
//     sortPrice = [...document.querySelectorAll('tbody tr')]
//         .sort((a, b) => a.cells[1].innerHTML - b.cells[1].innerHTML);

// thead.addEventListener('click', () => {
//     tbody.innerHTML = '';
//     sortPrice.forEach(elem => tbody.append(elem));
//     sortPrice.reverse();
//     tbody.append(...rowsArray);
// });


// const table = document.querySelector('#table');

// const sortCol = (evt) => {
//   if (evt.target.tagName != 'TH') {
//     return
//   }

//   let th = evt.target;

//   sortTable(th.cellIndex, th.dataset.type);

//   function sortTable(colNum, type) {
//     let tbody = table.querySelector('tbody');
//     let rowsArray = Array.from(tbody.rows);
//     let compare;

//     switch (type) {
//       case 'number':
//         compare = function (rowA, rowB) {
//           return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//         }
//         break;
//       case 'string':
//         compare = function (rowA, rowB) {
//           return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//         }
//         break;
//     }

//     rowsArray.sort(compare);
//     tbody.append(...rowsArray);
//   }
// };



// table.addEventListener('click', (evt) => {
//   let tbody = table.querySelector('tbody');
//   tbody.innerHTML = '';
//   // const sortPrice = rowsArray.sort(compare);
//   // tbody.append(...rowsArray);
//   sortCol.forEach(elem => tbody.append(elem));
//   sortCol.reverse();
// });


function sortTable () {
  let table = document.querySelector('#table');
  let thead = table.querySelector('.table__head');
  let tbody = table.querySelector('tbody');
  let th = thead.children[0].children;
  let rows = tbody.children;
  let position;
  let trigger = true;
  table.addEventListener('click', handler1);
  function handler1() {
  }
}
