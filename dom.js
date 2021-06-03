//DOM Document object modeldir
//Web sayfamız document
let variable;
variable=window;
variable=window.document;
variable=document.all;
//Tam array değil
let arr=Array.from(variable);
// arr.forEach((item) =>{
//     console.log(item);
// })

variable = document.head;
variable = document.body;
variable = document.domain;
variable = document.URL;
variable = document.contentType;
variable = document.forms;
variable = document.images;
variable = document.links;
console.log(variable);
