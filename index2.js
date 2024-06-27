const fs = require('fs');
// fs.writeFile("hey.txt","hey hello how are you",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.appendFile("hey.txt"," what is your name",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })
// fs.copyFile("hello.txt","./copy/hola.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.unlink("hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })
fs.rm("./copy",{recursive:true},function(err){
    if(err) console.error(err);
    else console.log("removed");
})