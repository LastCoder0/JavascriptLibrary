//Primitive tipler
//undefined veri türü
let num=10.5;
console.log(num);
console.log(typeof num);

let num1=-1;
console.log(num1);
console.log(typeof num1);

let name = "Cihat Bey"
let name1='Geldi yanimiza'
//kacirma karakteri
let cumle='Cihat\'ın bilgisayari';
console.log(cumle);
let names=name+" "+name1;
console.log(names);
console.log(name);
console.log( typeof name);
//template literal +backtick
//Alt Gr virgül iki kere basılıyor boşluk vermesine olanak sağlıyor
let firstname=`${name}    ${name1}`;
console.log(firstname);
const asalSayiMi=true;
console.log("Veri türümüzün değeri :"+asalSayiMi+" veri tipi :"+ typeof asalSayiMi);
console.log(`Veri türümüzün değeri :${asalSayiMi} veritipi : ${typeof asalSayiMi}`);
//Atama yapılmasssa Undefined oluyor
let renk;
renk="Yesil"
console.log(renk);
console.log(typeof renk);
let age=null;
console.log(age +  " veri tipi :"+ typeof age);