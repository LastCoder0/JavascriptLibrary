//Reduce en önemli ve map find hepsi kullanabiliyoruz
//Array.reduce(function(prev,current,index){},initialdeger)

const numbers = [1,2,3,4,5];
/*
function findSum() {
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
           sum = sum +numbers[i];
    }
    console.log(sum);
}
findSum();
const sonuc=numbers.reduce((sum,curr,index) =>{
  return  sum = sum +curr;
},0)
console.log(sonuc);*/

const newArr=numbers.map((number)=> {
    return number * 2;
});
const newArrWithReduce = numbers.reduce(function (dizininOncekiHali,oankisayi){
        dizininOncekiHali.push(oankisayi *5 );
    return dizininOncekiHali      

},[]);
console.log(newArr);
console.log(newArrWithReduce);

//Reduce ile filter ve find fonksiyonu yapımı
const filteredData=numbers.filter((number) => {
       return number<4
});
console.log(filteredData);
//Reduce ile filter fonksiyonu yapıldı simdi ise find
const reduceFilter=numbers.reduce((prevState,currentState) => {
    if(currentState<5){
        prevState.push(currentState);
    }   
       return prevState;
},[]);
console.log(reduceFilter);
//find fonksiyonu

const reduceFind=numbers.reduce((prevState,currentState) => { 
    if(currentState==3){
      return currentState

    }
    else { return prevState;}
    return prevState;

},undefined);
console.log(reduceFind);

const math =[10,20,30,40,50];
const divisionTen=math.reduce((pre,current) => {
     pre.push(current/10);
     return pre;
},[])
console.log(divisionTen);
