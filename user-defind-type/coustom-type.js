var users;
users = [];
var user1;
user1 = { userName: 'anis', userId: 121 };
users.push(user1);
var user2;
user2 = { userName: 'dia', userId: 141 };
users.push(user2);
var user3;
user3 = { userName: 'Riya', userId: 142 };
users.push(user3);
var getRequest;
getRequest = 'Get';
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler('Get');
