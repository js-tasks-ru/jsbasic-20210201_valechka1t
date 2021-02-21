function makeFriendsList(friends) {
  let li = '';
for (let key in friends) {
li += '<li>' + key + makeFriendsList(friends[key]) + '</li>';
}
if (li) {
let ul = '<ul>' + li + '</ul>'
}
return ul || '';
}
