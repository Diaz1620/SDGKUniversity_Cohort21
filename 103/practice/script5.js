let result;

result=Math.round(2.5);
console.log(result);
result=Math.floor(2.99);
console.log(result);
result=Math.ceil(2.01);
console.log(result);

result=Math.min(10,12,23,100,24,5);
console.log(result);

result=Math.max(10,12,23,100,24,5);
console.log(result);

let data;

data=Number("20");
console.log(data);
data=Number("-20.20");
console.log(data);
data=Number(true);
console.log(data);
data=Number(false);
console.log(data);
data=Number(null);
console.log(data);
data=Number("Hello");
console.log(data);

let number1=50,
    number2="10",
    number3="three",
    number4="20.20";

data=Number(number1);
console.log(data);
data=Number(number2);
console.log(data);
data=Number(number4);
console.log(data);
data=Number(number3);
console.log(data);

let data2=5467890978906543;
data2=String(data2);
console.log(data2.length);