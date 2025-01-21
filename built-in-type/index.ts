//built in type:number,string,boolean,void,undefined,null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = 'Anisul';
lastName = 'Islam';
isActivated = true;
fullName = firstName.concat(lastName);

console.log(
  `Your id:${userId},userName:${fullName},account Activated:${isActivated}`
);

console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display(): void {
  console.log('Hi I am Display');
}
display();
