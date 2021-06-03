//primitive tipler
let age=32;
let newAge=age;
age=40;
console.log(age,newAge);

let name = "Cihat";
let newName= name;
name ="Mert";
console.log(name,newName);
//Referans tipli array object
let colors=['red','green'];
let newColors=colors;
colors.push('blue');
colors.push('grey');
console.log(colors,newColors);
let student= {
    name : "Cihat",
    age : 25
}
//Refans olduğu için aynı adres değerleri gösterdiklerindne
//Yapılan değişikler ikisindede geçerli oluyor
let newStudent = student;
student.age=32;
console.log(student,newStudent);