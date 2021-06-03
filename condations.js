// If Else Else if

let myAge=225,heAge=30;
//True yada false değer döndürücek bi değer döndürmesi lazım
if(heAge>myAge){
 console.log("Onun yaşı benden büyüktür");

}else {
    console.log("Onun yaşı benden kücüktür");
}
console.log("----------");
heAge>myAge ? console.log("Onun yaşı benden büyüktür") :
 console.log("Onun yaşı benden kücüktür");
let name="Cihat"
 if(name==="Cihat")
 {
     console.log("Merhaba Cihat");
 }
 let a=10,b=15,c=0;
 if(a>b)
 {
     c=a+b;
 }
 else
 {
     c=a-b;
 }
 //Ternary operator
 console.log("C değeri :" +c);
c=(a>b) ? (a+b) : (a-b)
console.log("c nin yeni değeri :"+c);