// const a=11;
// console.log(a);

// document.getElementById('baslik').innerHTML="Hello";

// const baslik = document.getElementById('baslik');

// //Style değiştirebiliriz
// baslik.style.backgroundColor= 'bisque';
// baslik.style.color= "blue";
// baslik.style.padding = "2rem";
// //baslik.style.display= "none";
// baslik.textContent = 'Bu yeni baslik';
// const test = baslik.textContent;
// console.log(test);
// baslik.innerText='Yeni baslik';
// baslik.innerHTML = '<img src="https://www.w3schools.com/tags/img_girl.jpg" width="100" height="100" alt ="">';
// //Genellikle kullanıcağımız
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('#cihat'));
// console.log(document.querySelector('.cihatbey'));
// console.log(document.querySelector('ul li'));
// console.log(document.querySelector('ul'));

// const myList = document.querySelector('li');
// myList.style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(2)').style.color = 'orange';
// document.querySelector('li:nth-child(3)').style.color = 'purple';
// document.querySelector('li:nth-child(odd)').style.color = 'teal';
// document.querySelector('li:nth-child(even)').style.color = 'red';

//Çoklu secici 
const links=document.getElementsByClassName('link');
console.log(links[0]);
console.log(links[2]);
links[0].style.color = "red";
links[1].style.backgroundColor = '#ccc';
links[2].textContent ="Instagram Link";
console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

const arr=Array.from(links);
arr.reverse();
arr.forEach(item => {
    console.log(item);
})
const listElements = document.getElementsByTagName('li');
console.log(listElements);
const linkList=document.querySelectorAll('.link');
console.log(linkList);