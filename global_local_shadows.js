//global değerleri her yerde kullanabilirsiniz
//functionun icindeki değerleri kullanamazsınız.
let name="Cihat";
selamVer();
function selamVer(){
    //age değeri burda yaşar burda ölür
    let age=25;
    console.log("Merhaba "+name);
}
let renk="Sarı";
favoriteColor(renk)
function favoriteColor(Color){
    //Shadow variables burda aşağıda yaptırdığınız 
    //değer geçerli olucak
    let renk="Yeşil";
    console.log("Favori Rengim :" +renk);
}
console.log(renk);
let age=25;
console.log(age);