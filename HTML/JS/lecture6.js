// // ES6(javascript basics)
// var x = 15;
// {
//     // let x = 5;
//     const x = 5
//     console.log(x);
//     // x = 6;
//     // console.log(x);
// }
// console.log(x);
// var x = function (x,y){
//     return x + y;
// };
// const x = (x,y)  => {
//     return x + y;
// };
// console.log(x(5,6));
// const q1 = ["jan", "feb","mar"]
// const q2 = ["apr", "may","jun"]
// const q3 = ["jul","aug", " sep"]
// const q4 = ["oct", "nov","dec"]
// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);
// const myNumbers =[25, 12, 50, 77, -1];
// let maxValue = Math.max(...myNumbers);
// console.log(maxValue);
// let sum = 0;
// for(let num of myNumbers){
//     sum = sum + num
// }
// console.log(sum);
// const name = "Diksha";
// let text = "";
// for(let ch of name){
//    text += ch + " ";
// }
// console.log(text);
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// console.log(fruits);
// console.log(fruits.get("oranges"));
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters);
// class car{
//     constructor(name, mfgYear){
//         this.name=name;
//         this.mfgYear= mfgYear;
//     }
// }
// const myCar1 = new car("mercedes",2022);
// const myCar2 = new car("proche",2021);
// console.log(myCar1,myCar2);
// const myFunction = ()=>{
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("This is inside promise");
//         resolve();
//     }, 2000);
//     });
// }
// myFunction()
// .then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.error("Rejected");
// })
// const person = {
//     firstName : "Diksha",
//     lastName : "Lanjewar",
//     age : 20,
//     eyeColor : "brown",
// };
// let id = Symbol("id");
// person[id] = 140111;
// console.log(person);
// const addTwoNumbers = (a,b =10) => a + b;
// console.log(addTwoNumbers(10));
// const addTwoNumbers = (...args) => {
//     // console.log(args);
//     let sum = 0 ;
//     for (let arg of args){
//         sum +=arg;
//     }
//     return sum;
// };
// console.log(addTwoNumbers(10,14,16,22,1,45));