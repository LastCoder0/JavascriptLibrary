//find metodu high order function
//array icindeki değerin yerini bulur
//every_some değeri cok kullanılmaz 
const numbers=[1,2,3,4,5,6,7,66];
//İçine fonksiyon yazıyoruz
//Bütün elemanların şarta uyması lazım ki true yada false versin

const everyResult=numbers.every((number) => number<10)
console.log(everyResult);
//some'da 1 tane bile uyan varsa calısıyor.
const resultSome=numbers.some((number) => number<10)
console.log(resultSome);

const persons = [
    {
    id : 111,
    name : "cihatc"
    }
    ,
    {
        id : 111,
        name : "cihatb"
   },
   {
    id : 112312,
    name : "cihat"
},
{
    id : 1321,
    name : "cihat"
},
{
    id : 1231,
    name : "cihat"
},
{
    id : 122,
    name : "cihat5"
},
{
    id : 145312,
    name : "cihat"
},

]
function ownFindMethod(persons,searchValue){
    let findElement=undefined;
    for(let i=0;i<persons.length;i++){
        if(searchValue(persons[i])){
            return persons[i];
        }
    }

    return findElement;
}
const sonuc=ownFindMethod(persons,function (person){
    return person.id==111;
})
console.log(sonuc);


/*
const result=persons.find((person) => {
  return person.id===122;
});
console.log(result);

//High order yani fonksiyon cagirilan kütüphane
function findMethod(person){
for(let i = 0 ;i<persons.length;i++){
    if(persons[i].id===1111){
        return persons[i];
    }
}}


console.log(findMethod(persons));

*/




































/*
const products=[
 {
     name : "Bilgisayar",
   type: "Masaüstü",
   islemci : "i7",
   ram : "8 GB",
   hdd : "1 TB",
   ekrankart : "6 GB",
   indirimsizfiyat:  5499,
   indirimlifiyat :  4399,
},
{
    name : "Bilgisayar",
  type: "Diz üstü",
  islemci : "i5",
  ram : "4 GB",
  hdd : "500 TB",
  ekrankart : "2 GB",
  indirimsizfiyat:  3499,
  indirimlifiyat :  2399,
},
{
    name : "Bilgisayar",
  type: "Masaüstü",
  islemci : "i5",
  ram : "4 GB",
  hdd : "300 SDD",
  ekrankart : "2 GB",
  indirimsizfiyat:  3399,
  indirimlifiyat :  2899,
}

];



const price = products.map((product) => {
  if(product.indirimlifiyat<4000){
      console.log(product.indirimlifiyat);
  }
  

});
console.log(price);




function aramaYap(productArr,transcation){
    const temporaryArr=[];
    for(let i=0;i<productArr.length; i++){
     
        if(productArr[i].indirimlifiyat<2500){
        temporaryArr.push(transcation(productArr[i]));
        }
    }
    return temporaryArr;

}
aramaYap(product,transcation);

function transcation(arr) {
    console.log(arr);
}*/