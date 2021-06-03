
let names=["cihat","burak","adem"];
console.log(names.toString());
//join belirlediği elemana göre yazdırdı bağlama
console.log(names.join(" | "));
//Push array'e yeni element ekledi ve eleman sayisini atadı.
let arrayElementsNumber=names.push("mert");
console.log(names.toString()+" dizinin elaman sayisi : "+arrayElementsNumber);
//pop metodu son elamanı çıkarıyor ve 
// cıkardığı elemanı atıyor
let PopArrays=names.pop();
console.log(names.toString()+"Diziden cikarilan eleman :" +PopArrays);
//pop en sondaki shift ilk baştaki elemanı siliyor
//shift elemanı sola doğru kaydırıyor.
names.shift();
console.log(names.toString());
//dizinin basina unshift ile elman ekleniyor. 
//unshift sağa doğru kaldırıyor
names.unshift("cihat");
console.log(names.toString());
//delete metodu index değeri verilmesi lazım.
delete names[2];
console.log(names.toString());
//splice(baslama,dilincek indis,eklenecekler,eklenecekler)
let numbers =[1,2,3,4,5,6,7,8];
numbers.splice(8,0,9,10);
console.log(numbers.toString());
//silinen kısmı yazdırıyoruz
let deletedNumbers=numbers.splice(0,4,15,25,30);
console.log(numbers.toString());
console.log(deletedNumbers.toString());
console.log(deletedNumbers);
 //Concat dizileri birleştiriyor ve yazdırılıyor
 let oddNumbers=[1,3,5];
 let  evenNumbers=[2,4,6]
let myNumbers = oddNumbers.concat(evenNumbers);
console.log(myNumbers.toString());