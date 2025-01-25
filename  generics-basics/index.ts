const hello = <X, Y>(userId: X, userAge: Y) => {
  console.log(`user id : ${userId}, Age: ${userAge}`);
};
hello('New Value', 14);
hello('New value2', 25);
