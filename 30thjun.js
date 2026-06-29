const nums = [1, 2, 3, 4, 5];
const squared = nums.map(n => n * n);
console.log(squared);
//--------------------
const multiply = nums.map(n => n*2);
console.log(multiply);
//---------------------
const add = nums.map(n => n + 10);
console.log(add);
//---------------------
const names = ["john", "alice", "bob"];
const uppercase =  names.map(name => name.toUpperCase());
const lowercase = names.map(name => name.toLowerCase());
console.log(upperNames); 
console.log(lowercase);
//---------------------
const num = [11, 12, 13, 14, 25, 56];
const even = num.filter(n => n % 2 === 0);
console.log(even);
//---------------------
const num = [11, 12, 13, 14, 25, 56];
const odd = num.filter(n => n % 2 != 0);
console.log(odd);
//---------------------
const num = [11, 92, 73, 14, 25, 56];
const greater = num.filter(n => n>50);
console.log(greater);
//---------------------
const num = [10, 20, 30, 40];
const result = num.reduce((sum, item) => sum + item, 0)
console.log(result);
//---------------------
const num = [1, 2, 3, 4];
const result = num.reduce((sum, item) => sum * item, 1)
console.log(result);
//---------------------
console.log(Math.max(10,80,20,90,50))
//---------------------
console.log(Math.min(10,80,20,90,50))
//---------------------

