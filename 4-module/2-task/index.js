function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let diagonalElem = table.rows[i].cells[i];
    diagonalElem.style.backgroundColor = 'red';
  }
}
