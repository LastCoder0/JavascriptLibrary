//Dom eleman ekleme

const newListElement = document.createElement('li');
newListElement.className='liste-item';
newListElement.textContent='Mersin';
newListElement.id='yeni_id';
newListElement.setAttribute('variable','new-variable');
document.querySelector('ul').appendChild(newListElement);

console.log(newListElement);

// document.querySelector('h2').textContent = "Cihat";
//replace 
const newSmallHead = document.createElement('h4');
newSmallHead.id="h4ID";
newSmallHead.textContent = "Yeni kücük baslik";
const headParent=document.querySelector('body');
const lastHead=document.querySelector('h2');
headParent.replaceChild(newSmallHead,lastHead);
console.log(newSmallHead);
//Remove
const RemoveList=document.querySelector('li');
RemoveList.remove();
document.querySelector('ul').removeChild(document.querySelectorAll('li')[1]);
const silCocugu = document.querySelector('input');
document.querySelector('form').removeChild(silCocugu);








