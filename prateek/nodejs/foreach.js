var num = [23, 520, 65, 78, 141, 20];
// console.log(num);

num.forEach(function (a) {
    // console.log(a);
})

var jsonData = [
    {
        name: "rohit",
        age: 22
    },
    {
        name: "priya",
        age: 21
    },
    {
        name: "jaya",
        age: 29
    },
    {
        name: "amar",
        age: 25
    }
];

jsonData.forEach(function (x, y) {
    console.log(x.name);
    console.log(y);
});