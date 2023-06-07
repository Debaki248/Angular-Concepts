import { APP_BASE_HREF } from "@angular/common";

var a = 10;
var b = "Hello";

var arr:number[];
arr=[1,2,3,4];
console.log("Array[0]: "+arr[0]);
console.log("Array[1]: "+arr[1]);


var arrTuple = [101,"Hello"];
console.log(arrTuple);
arrTuple.push(100);
arrTuple.pop();

var map = new Map();
map.set('1','abhisek');
map.set('2',2);
console.log(map);


let mySet = new Set();
mySet.add("john");

function addingLogic() {};
addingLogic();

let sum = (a:number,b:number): number => {
    return a+b;
}
console.log(sum(10,20));

let multiply = (a:number,b:number): number => {
    return a*b;
}

interface Person {
    name: string;
    age: number;
}

let empObject = <Person>{}
empObject.name = "Debaki";
empObject.age = 26;

console.log(empObject.name);
console.log(empObject.age);