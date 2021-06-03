let variable;
const myList=document.querySelector('ul.liste');
console.log(myList);

variable=myList.childNodes;
// variable = myList.childNodes[0].nodeType;
variable = myList.childNodes[1].nodeType;
//1 element
//3 text'i veriyor
//8 yorumlar veriyor

variable = myList.firstChild;
variable = myList.firstElementChild;
variable = myList.lastElementChild;
variable = myList.childElementCount;
variable = myList.parentElement;

const myInput = document.querySelector('input');
console.log(myInput.parentElement);
variable = document.querySelector('li').nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling;

//parent 
console.log(variable);