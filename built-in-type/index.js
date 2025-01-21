//built in type:number,string,boolean,void,undefined,null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = 'Anisul';
lastName = 'Islam';
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id:".concat(userId, ",userName:").concat(fullName, ",account Activated:").concat(isActivated));
console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log('Hi I am Display');
}
display();
