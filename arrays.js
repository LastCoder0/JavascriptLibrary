//Verileri bir arada tutan yapılara array dizi denir

//Boş bir dizi oluşturmak
let carBrands=["Mercedes","Audi","BMW"];

console.log(carBrands);
//0 'ıncı indisi yazdırır
console.log(carBrands[0]);
carBrands[2]="TOGG"
carBrands[3]="Honda";
carBrands[4]="Citroen";
//Aralarda virgül ile boşluk oluştu boş olduğu için
carBrands[8]="Suziki";
console.log("Araba dizileri :"+carBrands.toString());
console.log(carBrands);
//5 indiste veri olmadığı için undefined oldu boş
console.log(carBrands[5]);
console.log(carBrands.length);
//En büyük index, dizi elaman sayısının 1 eksidir
//dizi elaman sayisi 20 ise en büyük index 19 dur.

for(let i=0;i<carBrands.length;i++){
    console.log(carBrands[i]);
}
console.log("*****************");
//İçinde gezerken kısaltıyor.
for(let ArraysElementNow of carBrands){
    console.log(ArraysElementNow);
}
let newArrays=[1,"cihat",true];
for(let nowElement of newArrays){
    console.log(nowElement);
}