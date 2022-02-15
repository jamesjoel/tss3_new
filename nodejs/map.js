var arr = [
    {
        name : "rohit",
        age : 25
    },
    {
        name : "amar",
        age : 23
    }
];


var arr2 = arr.map((x)=>{
    x.demo = 100;
    return x;
})

console.log(arr2);