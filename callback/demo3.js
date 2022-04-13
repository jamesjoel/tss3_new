var a = "aabbacdefdafe";
var arr = a.split("");

var map = arr.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
console.log(map);