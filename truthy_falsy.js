//Truthy falsey 
//False, 0 , "" , null, undefined ,NaN false diğer her şey truthy
let age=25;

let name="cihat";
name='';
name=null;
name=undefined;
if(name){
    console.log("Bu bir true ifadedir");
}else {
    console.log("Bu bir false ifadedir");

}
//İçinde bi veri varsa true oluyor yoksa false oluyor.