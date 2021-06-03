//Ecma script 6 ile gelen arrrow function 
//Oklanmış fonksiyon demeyi tercih ediyorum ok işaretli :)
function selamVer(){
console.log("merhaba");
}

selamVer();
const  selamVerDegisken=function(){
    console.log("Merhaba selam ver degiskeni");
}

selamVerDegisken();
//Fonksiyon değişkeninden kurtulduk
//_ koyarak da yapabilir
const fatArrow = _ => {
    console.log("Merhaba fatArrow");

}
fatArrow();
function takeSquare(num){
    return num*num;
}
console.log(takeSquare(5));
const takeSquareF=function (num){
    return num*num;
}
console.log(takeSquareF(7));
//Arrow function ile karesini aldık
const takeSquareArrow=(num) => {
    return num*num;
}
console.log(takeSquareArrow(8));
//Arrow function'da fonskiyona tek bir değer alıyoryorsanız
//kısaltma yapabilirsin.
const takeSquareArrowSmall= num => num*num;
console.log(takeSquareArrowSmall(4));
//Birden fazla parametre vermek icin
const sum=(num1,num2) => num1+num2;
console.log("toplam :"+sum(30,8));
