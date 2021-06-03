//Bir fonksiyon oluşturucaz
//Paranterler dengeli mi
//parantezlerDengelimi('(');

function parantezlerDengelimi(metin){
    const dizi=metin.split('');
    console.log(dizi);
    const result=dizi.reduce((pre,current) => {
        if(pre<0){
            return pre;
        }
        if(current==='('){
         return ++pre;
        } 
         if(current===')') {
        return  --pre;
        }
    return pre;
      
        
     },0);
     console.log(result);
     if(!result){
         console.log(metin+ " Veri Dengelidir");
     }
     else {
         console.log(metin+ " Veri Dengeli Değil")
     }
}
parantezlerDengelimi('()()');


