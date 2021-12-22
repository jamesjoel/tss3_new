var num = [23, 520, 65, 78, 141, 20];
// console.log(num);

num.forEach(function(a){
    // console.log(a);
})

var jsonData = [
    {
        name : "rohit",
        age : 22
    },
    {
        name : "priya",
        age : 21
    },
    {
        name : "jaya",
        age : 29
    },
    {
        name : "amar",
        age : 25
    }
];

jsonData.forEach(function(x, y){
    // console.log(x.name);
    // console.log(y);
});


var arr1 = [12, 30, 55, 71, 64];
console.log(arr1);
var arr2 = arr1.map((x)=>{
    return x+1;
});

console.log(arr2);