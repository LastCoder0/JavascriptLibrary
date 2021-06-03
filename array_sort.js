const names=['erdem','zücahit','ayşe','ibrahim'];

const numbers=[1,50,3,5,7,55,7,8];
const students=[
    {id:12,name:'cihat',age:25},
    {id:32,name:'mücahit',age:24},
    {id:22,name:'ümit',age:27},
    {id:42,name:'şeyma',age:21},
    {id:62,name:'ibrahim',age:28},
    {id:82,name:'adem',age:26},
    {id:11,name:'ceren',age:23},
];
//Sort metodu a'dan z ye sıralıyor
//string a-z
// const aFromZ=names.sort();
// console.log(names);
// console.log(aFromZ);
// //string z-a
// //reversin calismasi icin sıralanmış bir dizi olmalı
// const zFromA=aFromZ.reverse();
// console.log(zFromA);
// const sort = names.sort().reverse();
// console.log(sort);

// const sorting = numbers.sort((a,b) => a-b);
// console.log(sorting);

// students.sort((a,b) => (a.name<b.name)? 1 : (a.name>b.name ? -1 : 0)); 
// //pozitif ve ya negatif değer döndüren bi yapıdır

// console.log(students);
//Dizileri kopyalama;
let copy = [] ; 
// for(let name of names) {
//     copy.push(name);
// }
//Refans tipli atama yaptığımızda bellekte tutulan
//başlangıç adresi kopya atıyoruz

// copy = Array.from(names);
//spread operatör
copy = [...names];
 copy.sort();
console.log(copy);
console.log(names);
const name = 'cihat can'; 
let  speel =  name.split('');
speel=[...name];
console.log(speel);

function sumNumbers(...parametler) {
    let sum=0;
    for(let s of parametler){
        sum =sum+s;
    }
    console.log(sum);
}
sumNumbers(4,3);
sumNumbers(4,3,8,4,5);
sumNumbers(4,3,8,4,5,4,56,74,);
sumNumbers();