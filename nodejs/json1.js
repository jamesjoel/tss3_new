var user = [
    {
        name : "rohit",
        age : 25,
        salary : 5000,
        gender : "male"
    },
    {
        name : "priya",
        age : 22,
        salary : 5000,
        gender : "female"
    },
    {
        name : "amar",
        age : 28,
        salary : 5500,
        gender : "male"
    },
    {
        name : "jaya",
        age : 27,
        salary : 7000,
        gender : "female"
    },
    {
        name : "gaurav",
        age : 27,
        salary : 7400,
        gender : "male"
    },
    {
        name : "nilesh",
        age : 30,
        salary : 4000,
        gender : "male"
    }
];

console.log(user);
console.log("-----------------------------------------");
var newUser = user.map((x)=>{
    if(x.gender == "male"){
        x.discount = x.salary*10/100;
    }else{
        
        x.discount = x.salary*20/100;
    }
    return x;
})
console.log(newUser);