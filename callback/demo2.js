var fs = require("fs");

// fs.readFile("rohitrrr.txt", function(err, data){
//     if(err){
//         console.log("ERROR in FILE", err);
//         return;
//     }
//     var string = String(data);
//     console.log(string);
// })



var prom = (a)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(a, (err, data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(String(data));
        })
    })
}

prom("rohirt.txt").then(y=>{
    console.log(y);
}).catch(x=>{
    console.log(x);
});