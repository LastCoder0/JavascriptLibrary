//map,filter,reduce,some,every,find

//sayilar dizindeki  tek elemanları bulup bir başka diziye aktarın(filter)
//bu yeni dizinin her bir elemanın karesini alıp başka  bir diziye aktarın(map)
//bu dizideki 10dan büyük olan elamanların toplamlarını ekrana yazıdırn(Reduce)
//sayilar dizinin parametre alan tek bir fonksiyon olmalı ve
const numbers=[1,2,3,4,5,6,7,8,9]

function findResult(number) {
    const EvenNumbers=number.filter((number) => {
        return number%2 !==0;
    });
    console.log("Sayilarin tek olanları:" +EvenNumbers);
    const square=number.map((number) => number*number );
    console.log("Sayilarin karesi:"+square);
    const bigFromTen=number.reduce((pre,current) =>{
        if(current>5){
           pre+=current;
           return pre;    
        }else{
        return pre;}
    },0);
    console.log("5 den büyük olanların toplamı:"+bigFromTen);
}
findResult(numbers);
