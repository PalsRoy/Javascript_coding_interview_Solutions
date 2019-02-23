function swapWithoutTemp(a,b){

var sum = a + b;// 15
var diff = a - b; // 5

b = Math.abs(sum - b); 
a = Math.abs(diff -b);
}
