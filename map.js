const numbers=[1,2,3,4,5,6];
//her bir elemanı döndüren bi fonksiyon veriyor

const newNumbers=numbers.map(function (num){
    return num * 2 ;
})

console.log(numbers);
console.log(newNumbers);
console.log(numbers);

const books=[
    
{ name : '1' ,numberofpage :30},
{ name : '2' ,numberofpage :60},
{ name : '3' ,numberofpage :100}
];
const numberofPage=books.map(function(book) {
return book.numberofpage;
});
console.log(numberofPage);

const person =[{
    name : "cihat",
    surname : "can"
},
{
    name : "ibo",
    surname : "gözlemeci"
},{
    name : "adem",
    surname : "can"
}];
const newPerson=person.map((person) => person.name+ " " +person.surname);
console.log(newPerson);
//Kendi yaptığım ufak bir örnek 


/* //Adres değeri değişmiyor
numbers.push(7);
//const 'a = diğerek yeni bellek adresi oluşturuyorsunuz.
numbers = [1,2,3];
//bellek adresi 1,2,3 oldu adres değişti

const Cars=[ 
    {name : "BMW ", model : "M5", year :2020},
    {name : "BMW ", model : "M3", year :2017},
    {name : "BMW ", model : "Cabrio", year :2005},
    {name : "BMW ", model : "Neo", year :2010},
    {name : "BMW ", model : "320d", year :2000},
    {name : "Mercedes", model : "GLA", year :2020},
    {name : "Mercedes ", model : "B-180", year :2017},
    {name : "Mercedes ", model : "Matic", year :2005},
    {name : "Mercedes ", model : "SuperSport", year :2010},
    {name : "Mercedes ", model : "CC", year :2000},
   ]
const newCars=Cars.map((car) => car.name +" " + car.model+ " " + car.year);
console.log(newCars);

//Map fonksiyonunu kendimiz yazıyoruz

function newMapMethod(arr,trans){
    const newArr=[];
    for(let i=0;i<arr.length;i++){
    newArr.push(trans(arr[i]));
    }
    return newArr;
}
const trans=newMapMethod(numbers,function (num){
    return num * 5;
});
console.log(trans);
*/

const bornYear=[2000,1996,1972,1969];
const newYear=2021;

function findMyYear(bornYear,operation){
    const newBornYear=[];
    for(let i=0;i<bornYear.length ; i++){
    newBornYear.push(operation(bornYear[i]));
    }
    return newBornYear;
};

const result=findMyYear(bornYear, (num) => newYear-num);
console.log(result);