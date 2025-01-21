// enum -store constants;duplicate value is not allowed here
//enum types:numeric,string,hetergenous
//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
    RequestType[RequestType["saveData"] = 4] = "saveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var RequestTyp2;
(function (RequestTyp2) {
    RequestTyp2["readData"] = "READ_DATA";
    RequestTyp2["deleteData"] = "READ_DATA";
})(RequestTyp2 || (RequestTyp2 = {}));
console.log(RequestTyp2.deleteData);
//hetergenous enum
var RequestTyp3;
(function (RequestTyp3) {
    RequestTyp3["readData"] = "READ_DATA";
    RequestTyp3["deleteData"] = "READ_DATA";
    RequestTyp3[RequestTyp3["id"] = 101] = "id";
})(RequestTyp3 || (RequestTyp3 = {}));
