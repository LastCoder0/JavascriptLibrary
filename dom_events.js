//Dom events
// document.querySelector('.link').addEventListener('click',tiklanma);
// document.querySelector('.link').addEventListener('dblclick',tiklanma);
// document.querySelector('.link').addEventListener('mousedown',tiklanma);
// document.querySelector('.link').addEventListener('mouseup',tiklanma);
// document.querySelector('.link').addEventListener('mouseenter',tiklanma);
// document.querySelector('.container').addEventListener('mouseleave',tiklanma);
// document.querySelector('.container').addEventListener('mouseover',changeBackground);
// document.querySelector('.container').addEventListener('mouseout',tiklanma);
document.querySelector('.container').addEventListener('mousemove'
,changeBackground);

function tiklanma(e) {
    let variable;
    variable=e.type;
    console.log(variable);
    e.preventDefault();
}
function changeBackground(e){
     document.querySelector('.yazi').textContent = `X :${e.clientX} Y : ${e.clientY}`;
      document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX},${e.clientY},${e.clientX + e.clientY})`;
    }