class User{
  //properties,method,constructor
   userName: string;
 age: number;
   
constructor(userName:string,age:number){
  this.userName = userName;
  this.age = age;
}
display():void{
  console.log(`username: ${this.userName,age:${this.age}}`);
}
}
 

let user1=new User("Anisul Islam",24)
user1.display();
