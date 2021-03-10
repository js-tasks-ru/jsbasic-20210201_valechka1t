/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    thead.innerHTML = <tr><th>Name</th><th>Age</th><th>Salary</th><th>City</th></tr>;
    table.appendChild(thead);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i=0; i < rows.length; i++) {
      let tr = document.createElement('tr');

      for (let j=0; j < rows[i].length + 1; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = row[i][j];
        if (j === rows[i].length + 1) {
          let button = document.createElement('button'); 
          td.appendChild(button);
          button.innerHTML = `[X]`;
          }
      }
      table.appendChild(tr);
    }
    table.addEventListener("click", (event) => event.target.closest('tr').remove());

    this.elem = table;
  }
}
