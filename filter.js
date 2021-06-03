//Verilerimizi filtremeye yarıyor filter
const plants=[
    {name : "uzum" , type : 'meyve'},
    {name : "çilek" , type : 'meyve'},
    {name : "muz" , type : 'meyve'},
    {name : "ıspanak" , type : 'sebze'},
    {name : "kereviz" , type : 'sebze'},
]
function ownFilterMethod(arr,filterConditions){
    const temporaryArr = [];
      for(let i=0;i<arr.length;i++){
          const result=filterConditions(arr[i],'sebze');
          if(result){
              temporaryArr.push(arr[i]);
          }
      }
    return temporaryArr;
}
function filtre(plants,condition) {
    return plants.type===condition;
}
const meyveler=ownFilterMethod(plants,filtre);
console.log(meyveler);

/*
const meyveler=plants.filter((plants)=> plants.type==='meyve')
const sebzeler=plants.filter((plants) => plants.type=='sebze');
console.log(meyveler);
console.log(sebzeler);

function findMeyve(){
    const temporaryArr=[];
    for(let i=0;i<plants.length;i++){
        if(plants[i].type=="meyve"){
            temporaryArr.push(plants[i]);
        }
    }
    return temporaryArr;
}
function findSebze(){
    const temporaryArr=[];
    for(let i=0;i<plants.length;i++){
        if(plants[i].type=="sebze"){
            temporaryArr.push(plants[i]);
        }
    }
    return temporaryArr;
}
console.log(findSebze());
console.log(findMeyve()); */
