let person = {
 name : 'cihat',
 age : 25,
 heMarry : false,

};
console.log(person.name);
console.log(typeof person);
console.log(person instanceof Object);

let Colors=['red'];
console.log(Colors[0]);
console.log(typeof Colors);
console.log(Colors instanceof Object);
console.log(Colors instanceof Array);

const fonksiyon=function(){
    console.log("Merhaba Javascript");
}
//iki parantezden dolayı fonksiyonu cagırmış olduk
fonksiyon();
fonksiyon.test="deneme bik bik";
console.log(typeof fonksiyon);
console.log(fonksiyon instanceof Object);
console.log(fonksiyon.test);
//fonksiyonlarda bi objedir javascripte

let num=5;
const fonk = (num) => num*2
  const fonck= c1 => c1;
let myDizi=[1,2,3];
const arraysMultiple=(dizi) => {
    let swapArrays=[];
    for(let i=0;i<dizi.length;i++){
        swapArrays[i]=dizi[i]*2;
    }
    return swapArrays;
    }
   console.log(arraysMultiple(myDizi));
   //Gecici dizi oluşturarak ana dizi mizi bozmadık.
console.log(myDizi);
console.log(fonk(num));
console.log(fonck(3));

