// enum -store constants;duplicate value is not allowed here

//enum types:numeric,string,hetergenous

//numeric enum

enum RequestType {
  readData = 1,
  deleteData = 3,
  saveData,
}
console.log(RequestType);

// string enum
enum RequestTyp2 {
  readData = 'READ_DATA',
  deleteData = 'READ_DATA',
}
console.log(RequestTyp2.deleteData);

//hetergenous enum
enum RequestTyp3 {
  readData = 'READ_DATA',
  deleteData = 'READ_DATA',
  id = 101,
}
