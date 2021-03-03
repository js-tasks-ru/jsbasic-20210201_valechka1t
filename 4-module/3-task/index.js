function highlight(table) {

  let tableRows = table.rows;
  let indexGender;
  let indexStatus;
  let indexAge;

  for (let i = 0; i < tableRows[0].children.length; i++) {
  
    if (tableRows[0].children[i].innerHTML == 'Gender') {
      indexGender = i;
    }
    if (tableRows[0].children[i].innerHTML == 'Status') {
      indexStatus = i;
    }
    if (tableRows[0].children[i].innerHTML == 'Age') {
      indexAge = i;
    }
  }  
       
  for (let n = 1; n < tableRows.length; n++) {
    console.log(n);
    console.log(tableRows[n]);
    console.log(tableRows[n].children[indexGender]);
    let columnGender = tableRows[n].children[indexGender];

    console.log(columnGender);
    if (columnGender.innerHTML == 'm') {
      columnGender.parentNode.classList.add('male');
    } else {
      columnGender.parentNode.classList.add('female');
    }
    
    if (tableRows[n].children[indexStatus].hasAttribute('data-available')) {
  
      if (tableRows[n].children[indexStatus].dataset.available == 'true'){
        tableRows[n].children[indexStatus].parentNode.classList.add('available');
      }
    
      if (tableRows[n].children[indexStatus].dataset.available == 'false'){
        tableRows[n].children[indexStatus].parentNode.classList.add('unavailable');
      }
   
    } else {tableRows[n].children[indexStatus].parentNode.hidden = true}
  
      if (tableRows[n].children[indexAge].innerHTML < 18){
        tableRows[n].children[indexAge].parentNode.setAttribute('style', 'text-decoration: line-through');
      }
  }
}  
