//Object kısmı javascriptteki en önemli kavram
let cihat={
    name : "Cihat",
    surname : "Can",
    bornYear : 1996,
    heMarry : false,
    favoriteColor :['green', 'yellow'],
    ageCalculate : function(){
       this.age=2021-this.bornYear;
    }
}
let mert={
    name : "mert",
    surname : "tuncer",
    bornYear : 1995,
    heMarry : true,
    favoriteColor :['red', 'blue'],
    ageCalculate : function(){
       this.age=2021-this.bornYear;
    }
}

console.log(cihat);
console.log(cihat.bornYear);
console.log(cihat['surname']);
//Objelere atama yapmak
mert.surname="yeni soyadı"
mert['surname']="yep yeni soyadı";
cihat.ageCalculate();
console.log(cihat.age);

console.log(mert);
//Bütün değerli atadı
let students =[cihat,mert];
console.log(students[1].bornYear);

let ayse = new Object();
ayse.name = "Ayşe";
ayse.bornYear = 1972;
console.log(ayse);