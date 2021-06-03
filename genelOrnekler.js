//Soru 1
///Sehirler diye bir dizi oluşturucaz.
//Her dizi elamnı sehirler ile ilgili bilgiler içericek
//bu bilgiler sehrin adi ,plaka numarasi, ve sehrin komsulari

//diziyi olusturduktan sonra sehir adlara göre z den a ya göre siralayla yazdirin


const province  = [
    {name : "Istanbul", plaka :34,population:18205500},
    {name :"Ankara", plaka :06,population:653520},
    {name : "Bursa", plaka :20,population:553510},
    {name : "Zonguldak", plaka :23,population:32433},
    {name : "Mersin", plaka :33,population:283445},
    {name : "Ordu", plaka :52,population:183445},
];


const sortData=province.sort((a,b) => (a.name<b.name) ? 1 : (a.name>b.name ? -1 : 0)) ;
console.log(sortData);
//Soru  2
//kullanıcıdan alınan değere kadar olan sayılar 
//dizisi fibonacci şeklinde yazdırın
//fibonnaci örnegi 0 1 1 2 3 5 8 13 2221
//iki sayinin toplami bir saonraki sayiyi olusturuyor.


function fibonnacci(sayi) {
    
    let sonucArr=[0,1];
    for(let i =2 ;i<sayi ;i++){
        const nowVariable= sonucArr[i-1]+sonucArr[i-2]; 
        if(nowVariable<sayi) {
            sonucArr[i] = nowVariable;
        }else {
            break;
        }
    }
    return sonucArr;
}
console.log(fibonnacci(25));
//Soru 3
//Ogrenci tutan bir dizi olusturu
//Her bir ogrenci nesnesinde ad,soyad,id değerleri olmalı
//id numarasi cift olan öğrencilerin ad,soyad, birleştirilmiş halde tutan diziyi
// a dan z ye sıralı sehilde ekrana yazdırın
//bunları yaparken map ve filter fonksiyonlarını kullanın
//islem bittikten sonra kodları arrow function ve zincirleme haline dönüstürün

const students=[
    {id:1,name : "cihat", surname : "can"},
    {id:2,name : "adem", surname : "can"},
    {id:3,name : "burak", surname : "can"},
    {id:4,name : "ümit", surname : "can"},
    {id:5,name : "mücahit", surname : "can"},
];
const filteredData=students.filter((student) => {
    return student.id%2==0;
} );
const  names=filteredData.map((student) => {
    return student.name+ " "+student.surname;
})
console.log(names);

const empoloyees=[
   {name : "Gökhan", department:"Yalan",yuzde :99},
   {name : "Gökhan", department:"Yalan", yuzde :10},
   {name : "Gökhan ", department:"Yalan",yuzde :30},
   {name : "Gökhan ", department:"Yalan",yuzde :50},
   {name : "Gökhan ", department:"Yalan",yuzde :70},
   {name : "Gökhan ", department:"Yalan",yuzde :0},
];
const filteredDatas=empoloyees.filter((empoloye) => empoloye.yuzde>50);
console.log(filteredDatas);


function bulYuzde(arr){
    const temporary=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].yuzde>50){
            temporary.push(arr[i]);
        }
    }
    return temporary;

}

console.log(bulYuzde(empoloyees));