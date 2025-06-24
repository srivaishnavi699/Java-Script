var d=10;//var declaration we can rewrite the values redeclare, reassign (function scope) 
var d=20;//it is declared inside the function only
console.log(d);

let e=10;//let declaration we can rewrite the values but we cannot redeclare (block scope)
e=20;//it is declared inside the block only
console.log(e);

const f=10;//const declaration we cannot rewrite the values and we cannot redeclare (block scope)
//f=20;//it is declared inside the block only
console.log(f);
