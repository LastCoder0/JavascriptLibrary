//Aritmetik operatörler + - * / %
let num1=10;
let num2=15;
let result=num1+num2;
result=num1 * num2;
result=num1 - num2;
result = num1 % num2;
result=num1/ num2;

console.log(result);  
let  name='Cihat';
let age =25;
let textAge='25';
let surname= 'Can';
let identity=name - surname;
console.log(identity);
console.log(age +1);
console.log(textAge+1);
console.log(textAge-10);

//arttirma azaltma operatörleri İncrement Decrement
num1++;
console.log(num1);
num2--;
console.log(num2);
console.log(num2+""+num1);
//+= -= *= /= $=

let num3=30;
let num4=8;
//num4+=num3; num4=num4+num3
num3-=num4; // num4=num4-num3
console.log(num3);
console.log(num4>num3);
console.log(num1>=num4);
console.log(num4 !=num3); //esit degilse  num4 num3 e true olur
console.log(num4==num3);
let age1=25;
let textAge1='25';
console.log(age1==textAge1);
 //Biri number biri string ama javascript değerler karşılaştırır
 console.log(age1===textAge1) //Hem değere hem veritipine bakar
 console.log(age1 !==textAge1) //Hem değere hem veritipi eşit değil
 //Mantiksal operatörler ve veya 
console.log((num1 > 5 ) &&  (num2<10)  ) // ve 
console.log((num1 < 5 ) ||  (num2<15)  ) //Ve ya

let result1=4*2/4-1*5+4;
console.log(result1);
