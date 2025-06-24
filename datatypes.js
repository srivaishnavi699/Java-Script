let a=10;//number type
let b=59.2;//floating point number type
let c="Hello World";//string type
let d=true;//boolean type
let e=null;// null is a special value that represents the intentional absence of any object value
let f=undefined;// undefined is a type of variable that has been declared but not assigned any value
let g;//undefined is a type of variable that has not been assigned any value
let arr=[1,2,3,4,5];// array is a special type of object that can hold multiple values
let h=Symbol("unique");// Symbol is a unique and immutable primitive value
let i=BigInt(12345678901234567890);// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1
let j=BigInt("12345678901234567890");// BigInt can also be created from a string
let k={
    name: "John", // object type key value pairs
    age: 30,
    isStudent: false
}
let arr2=[1, "two", true, null, undefined, {key: "value"}, [1, 2, 3]]; // array with mixed types
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(arr);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(arr2);
