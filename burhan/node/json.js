var user = [
    {
        name : "husaina",
        age : 68,
        salary : 500,
        gender : "Female"
    },
    {
    name : "Burhan",
        age : 40,
        salary : 35000,
        gender : "male"
    },
];
console.log(user);
console.log("---------------------");
var newusers = user.map((x)=>{
    if(x.gender == "male"){
        x.discount = x.salary*20/100;
    }else{
        x.discount = x.salary*10/100;
    }
    return x;
})
console.log(newusers);