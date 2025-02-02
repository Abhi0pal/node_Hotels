// const res=function add(a,b){
//     return a+b
// }
//
//
// console.log(res(2,4));
//
// (function(a,b){
//     console.log("Hello");
//
//
// })()

// var fs = require("fs");
// var os = require("os");
// 
// var user = os.userInfo();
// console.log(user.username);
// console.log(user.homedir);

// fs.appendFile("greeting.txt","Hello abhishek Pal"+user.userInfo+"This is my user name"+"\n Thank You",()=>{console.log("File is created \n Thank Yo")})

// const fs = require('fs');
// fs.readFile('greeting.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.appendFile("greeting.txt", "Hello Abhishek Pal " + user.username + " This is my username\nThank You", () => {
//     console.log("File is created \n Thank You");
//
//     // Read content from the file
//     fs.readFile('greeting.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     });
// });

// fs.readFile("greeting.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err.message);
//     return;
//   }
//   console.log("File content:");
//   console.log(data);
// });


// fs.readFile("greeting.txt","utf8",(err,data)=>{
//     console.log("************************");
//     
//     console.log(data);
//     
// })


// import notes.js file and 

// const variable=require("./notes.js")
// console.log(variable);
// 
// // console.log(variable.a);
// const res=variable.lol(2,3)
// console.log(res);
// console.log(variable.b);

//Lodash

// var _=require('lodash')
// var data=["person","person",1,1,1,2,4,5,6,6,7]
// var res=_.uniq(data)
// var result=_.sum(data)
// console.log(result);


// JSON to OBJECT
// 
// const jsonString='{"name": "abhishek", "age": 25, "city": "delhi"}'
// 
// const jsonObject=JSON.parse(jsonString)
// console.log(jsonObject);
// 
// 
// //object to JSON
// 
// const object = {name:"abhishek",age:35,part:"one"}
// 
// const json=JSON.stringify(object)
// console.log(json);

