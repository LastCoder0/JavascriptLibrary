//Fonksiyonlar tanımı function İsim(deger,deger1){ //statement }
//Return geriye değer döndürüp kullanmamızı sağlar ve return denildiğinde function biter.
//type of tipini yazdırıyor.
// function selamVer(i){
//     console.log("Cihat Merhaba"+i);
// }
// selamVer(1);
// let sum=sumNubmers(10,20);
// function sumNubmers(num1,num2){
//     console.log("Sayilarin toplami :"+(num1+num2));
//    return num1+num2;
// }
// console.log("Toplam :"+sum);
// console.log(typeof sum);
let firstRange=parseInt(prompt("İlk aralığı girin"));
let secondRange=parseInt(prompt("İkinci aralığı girin"));
let result=RangeSum(firstRange,secondRange);




function RangeSum(firstRange,secondRange){
    let sum=0;
    for(let i=firstRange;i<=secondRange;i++){
       sum+=i;
    }
    return sum;

}
console.log(firstRange+" ile "+secondRange+" Arasindaki toplam değer :"+result);
