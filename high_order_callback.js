/*
const CopyAndMultipleWithTwo=function (arr) {
    let temporary=[];
    for(let i=0; i<arr.length; i++){
        temporary[i]=arr[i] * 2;
    }
   console.log(temporary);
}
const CopyAndDivisionWithTwo=function (arr) {
    let temporary=[];
    for(let i=0; i<arr.length; i++){
        temporary[i]=arr[i] / 2;
    }
   console.log(temporary);
}
const CopyAndAddedWithTwo=function (arr) {
    let temporary=[];
    for(let i=0; i<arr.length; i++){
        temporary[i]=arr[i] + 2;
    }
   console.log(temporary);
}
CopyAndMultipleWithTwo(myArray);
CopyAndDivisionWithTwo(myArray);
CopyAndAddedWithTwo(myArray);
*/
//fonskiyonlar bir obje olduğu için 
//fonksiyonunn içinde kullanabiliyorsunuz

let myArray= [1,2,3];
//First class function birinci sinif 
const twoMultiple=function(num){
    return num * 2;
  }
  const threeDivision=function(num){
      return num / 3;
    }
  const addThere=function(num){
      return num + 3;
  }
  //transcation refarans olarak geçti
  //
const transcationArray=function (arr,transcation) {
    let temporary=[];
    for(let i=0; i<arr.length; i++){
        //temporary[i]=arr[i] + 3;
        temporary[i]=transcation(arr[i]);
    }
   console.log(temporary);
}

//Dışardanda bir fonksionu fonksiyonun içide gönderiliyor

//Aşağıdaki bir fonksiyon ve fonksiyon aldığı için
//buna biz High Order Function 
//Parametre olarak fonksiyon alan ve veya 
//return olarak fonksiyon döndüren fonksiyonlardır.
//TranscationArray bir higher order fonksiyondur
//twoMultiple ve threeDivision  callback fonksiyonlardır.
//İki ile çarpıyor
transcationArray(myArray,twoMultiple);
//3  ile bölüyor
transcationArray(myArray,threeDivision);
//3 ekleniyor üst üste fonsksiyon
transcationArray(myArray,addThere);

function sayMyName(name,surname){
    console.log("Merhaba "+ name +" "+surname);
}
let name="Cihat";
let surname="Can";
sayMyName(name,surname);
//High Order fonksiyon oluyor
function shoutMyName(name,surname,callback){
 const message = "Merhaba "+name.toUpperCase() + " " + surname.toUpperCase();
 callback(message);
}
//Geri cağıran fonksiyon oluyor callback
shoutMyName(name,surname,function(msj){
    console.log(msj);
});
/*function showMessage(message){
    console.log(message);
}*/