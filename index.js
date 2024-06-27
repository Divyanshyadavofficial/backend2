//Fundamentals of javascript
//arrays
//function return
//async js coding

var arr = [1, 2, 3, 4, 3];
//for each map filter find indexof
arr.forEach(function (val) {
  console.log(val + " hello");
});

var ans = arr.map(function (val) {
  return val * 3;
});
console.log(ans);
var ans2 = arr.filter(function (val) {
  if (val > 3) {
    return true;
  } else return false;
});
var ans3= arr.find(function(val){
    if(val===2) return val;
});
console.log(ans3);
ans4=arr.indexOf(2);
console.log(ans4);

//objects

var obj ={
    name:"harsh",
    age:12
}
Object.freeze(obj);
console.log(obj['name']);
console.log(obj.name);

//return 
function abcd(){
    return 12;
}


var ans5 = abcd();

// async js coding
// line by line code chle that's scynchoronous
//jo bhi code async nature ka ho, usey side
//stack mei bej do and agle code ko 
//chlao jo bhi sync nature ka ho.jb bhi sara
//sync code chl jaye tab check kro ki async code
//complete hua ya nhi and agar vo complete hua
//ho to usse main stack mei lao and chla do.

// async function bcd({
//     await fetch("")
// })