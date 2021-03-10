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
    // this.rows = rows;
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    thead.innerHTML = `<tr><th>Name</th><th>Age</th><th>Salary</th><th>City</th></tr>`;
    table.appendChild(thead);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i=0; i < rows.length; i++) {
      let tr = document.createElement('tr');

        let name = document.createElement('td');
        tr.appendChild(name);
        name.innerHTML = rows[i].name;
        let age = document.createElement('td');
        tr.appendChild(age);
        age.innerHTML = rows[i].age;
        let salary = document.createElement('td');
        tr.appendChild(salary);
        salary.innerHTML = rows[i].salary;
        let city = document.createElement('td');
        tr.appendChild(city);
        city.innerHTML = rows[i].city;
        let td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = `<button>[X]</button>`;

      tbody.appendChild(tr);
    }
    table.addEventListener("click", (event) => event.target.closest('tr').remove());

    this.elem = table;
  }
}
