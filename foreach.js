//Foreach
//Diziyi gezmek için kullanıyoruz
/* numbers.foreach(function(variable,indexno){
        console.log(variable,indexno)
});  */
let numbers = [1,2,3,4,5,6];
//Foreach benden bi fonksiyon bekliyor
//High order fonksiyon
showArrays(numbers,function (variable,index){
    console.log("Değer : "+variable+ " indexi :"+index);
})
//Kendi foreach fonksiyonumuzu yazalım
function showArrays(arr,callback){
    for(let i = 0 ;i<arr.length ; i++){
        callback(arr[i],i)
    }
}

numbers.forEach((num) => {
    console.log(num);
});



/*

numbers.forEach(tookTwoParameterFunction);
function tookTwoParameterFunction(num,index){
    console.log(num,index);
}

console.log("**********");
for(let i=0;i<numbers.length ; i++){
    console.log(numbers[i]);
}console.log("**********");

for(let item of numbers){
    console.log(item);
}
let data=["Data1","Data2","Data3","Data4"]
for(let veri of data ){
    console.log(veri);
}
console.log("**********");
*/