var accumulator =require('./accumulator');
var acc=accumulator();
acc.Add(100);
acc.Substract(50);
acc.Multiply(10);
acc.Divide(2);

var acc2 =accumulator();

var acc3 =new accumulator();

console.log(acc.getResult());

console.log(acc2.getResult());

console.log(acc3.getResult());