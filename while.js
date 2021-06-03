//sayi 5den kücük olduğu sürece çalış while(arasındaki işlem doğru olana kadar çalışır)
let num1=5;
while(num1<15){
    console.log("Merhaba");
    num1++;
}
//do while bi kere do 'ya giriyor ve şarta bakıyor.
do {
console.log("Do While 'a geldi");
num1++;
}while(num1<10);
//noktali virgülle bitiriyoruz tek istisna

//break continue,return
//Kırmaya yarıyor break
for(let i=0;i<20;i++){
    if(i==12){
        //12 ciyi yazdırınca for döngüsü dışına cıkıcak
        //Break var olan döngüyü sonlandırıyor
        break;
    }
    console.log("Break kullanımı");
}
//Continue
for(let i=10;i<30;i++){
    if(i==15){
        //15'i atla ve sayiyi artir
        //for döngüsü etkilenmiyor.
        continue;
    }
    console.log("Continue kullanımı");
}