type User = { userName: string; userId: number };
let users: User[];
users = [];
let user1: User;
user1 = { userName: 'anis', userId: 121 };
users.push(user1);

let user2: User;
user2 = { userName: 'dia', userId: 141 };
users.push(user2);

let user3: User;
user3 = { userName: 'Riya', userId: 142 };
users.push(user3);

type RequestType = 'Get' | 'Post';
let getRequest: RequestType;
getRequest = 'Get';

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler('Get');
