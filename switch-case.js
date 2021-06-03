//Switch-case yapisi alttaki şekilde kullanılmamalı.
// let daysofweek=5;
// if(daysofweek===1){
//     console.log("Pazartesi");
// }
// else if(daysofweek ===2){
//     console.log("Salı");
// }
// else if(daysofweek ===3){
//     console.log("Carsamba");
// }
// else { 
//     console.log("Pazar");
// }
let daysofweek=parseInt(prompt("Bir gün giriniz"));
switch(daysofweek){
//Break artık o switchin icinden cik demek
//Continue atla oluyor
    case 1:console.log("Pazartesi");
        break;
        case 2:console.log("Salı");
            break;
            case 3:
                console.log("Çarsamba");
                break;
                case  4:console.log("Persembe");
                break;
                case 5:console.log("Cuma");
                break;
                case 6:console.log("Cumartesi");
                break;
                case 7:console.log("Pazar");
                break;
                default : console.log("Geçersiz gün girildi");
}