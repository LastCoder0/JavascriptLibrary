/* 
 Ödev 1
 Bir değişken oluşturun ve bu değişkende saniye değerini tutun
 Sonra bu saniye değerinin kaç dakika ve saniye denk geldiğini yazdırın
 Örnek 1200 değeri icin 20 dakika 0 saniye yazmaldır

*/
let second=prompt("Bir saniye giriniz");
let minute=parseInt(second/60);
let lastSecond=second%60;
console.log(second+ " değeri "+ minute+ " dakika "+lastSecond + " saniyedir. ");
/*
Ödev 2
Bir depişken oluşturun ve bu değişkende fahrnheit cinsinden sicakligi saklayin
sonrasında bu değerin kaç celcius olduğunu hesaplayın.
100 değeri için 37.77898  gibi bir değer elde etmelisiniz.
Hesaplama formülü : celcius=5/9 *(fahranheit-32)
*/
let fahranheit=100;
let celcius=5/9
let calculate=celcius*(fahranheit-32);
console.log(calculate.toFixed(2));
/* 
Odev 3
Bir yil değerinin artık yıl olup olmadığını hesaplayın
bir yılın artık olması için ya 400 ile modu 0 olmalı yada 4 ile 
modu 0 olmalı e 100 ile modu 0 olmamalı
4100 false değeri vermeli

*/
let year=prompt("Bir yil giriniz");
console.log((year %400 ==0 || year %4== 0 ||year %100 !=0));