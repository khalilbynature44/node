// const fs=require("fs")

// fs.readdir("/",(err,res)=>{
//     if(err) throw(err)
//     else
//     console.log(res);
// })

// fs.readFile("text.txt","utf-8",(err,res)=>{
//     if(err) throw(err)
//     else console.log(res);
    
// })

// var bcrypt = require('bcryptjs');
// bcrypt.hash('ala', 8, function(err, hashedname) {
//     if (err) throw err
//     else console.log(hashedname);
// });

// bcrypt.compare("ala","$2a$08$hwIsEWw2/yJHYRFSpZZ.HesPFLfyhEaXcU/3/9W.lBPhBsTIcTuPm" , function(err, res) {
//    console.log(res);
// });

// const { uuid } = require('uuidv4');

// const person={  name:"ala" , id:uuid()}

// console.log(person);

// const fun=require("./local")
// console.log(fun.sum(5,2));

const fs = require('fs');
// console.log('before readfile')
// const result = fs.readFileSync('./text.txt','utf8')
// console.log(result)
// console.log('after readfile')



// console.log('before readfile')
// fs.readFile('./text.txt','utf8',(err,data)=>{
//   fs.appendFile('./secondFile.txt',data,(err)=>{
//     console.log('done successfully')
//   })
// })
// console.log('after readfile')
// const path = require('path')
const process = require('process');


const fun=require("./local")
const a=parseInt(process.argv[2])
const b=parseInt(process.argv[3])
console.log(fun.sum(a,b));