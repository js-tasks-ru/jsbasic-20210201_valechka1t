function makeFriendsList(friends) { 

  let ul = document.createElement('ul');

  let FriendsFullNames = [];
  for (let i = 0; i < friends.length; i++) {
    FriendsFullNames.push(`${friends[i].firstName} ${friends[i].lastName}`);
  }
  
  for (let fullName of FriendsFullNames) {
    let li = document.createElement('li');
    ul.insertAdjacentHTML('beforeEnd', `<li>${fullName}</li>`);
    }

  return ul; 
}