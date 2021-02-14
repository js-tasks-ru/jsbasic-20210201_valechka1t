function showSalary(users, age) {
  let salaryFilter = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      salaryFilter.push(users[i].name, ", ", users[i].balance, "\n") 
    }
  }
  let str = salaryFilter.join('');
  return str.trim();
}
