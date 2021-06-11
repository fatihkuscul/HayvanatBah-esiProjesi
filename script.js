// canvas erişim
let oyunAlani = document.getElementById("container");

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;
document.body.appendChild(canvas); // sayfa üzerinde gözükmesini sağladık

function oyunAlaniCiz(){
    context.fillStyle = "black";
    context.fillRect(0,0,1000,1000);
}
oyunAlaniCiz();


//Hayvanat bahçesi oluştur
let hayvanatBahcesi = {
    koyun: [],
    inek: [],
    kuscul: [],
    kurt: [],
    aslan: [],
    avci: []
}


// Hayvan oluştur
function Hayvan(tur,cins,renk,kabiliyet,id) {
    this.tur = tur;
    this.cins = cins;
    this.renk = renk;
    this.x = Math.floor(Math.random()*1000000)%1000;
    this.y = Math.floor(Math.random()*1000000)%1000;
    this.vx = kabiliyet;
    this.vy = kabiliyet;
    this.id = id;
}



// İlk koyunları oluştur
for(let i=0; i<30; i++){
    if(i<15){
        hayvanatBahcesi.koyun[i] = new Hayvan("koyun" , "disi" , "purple" , 2 , "koyun"+i) ;
    }else{
        hayvanatBahcesi.koyun[i] = new Hayvan("koyun" , "erkek" , "purple" , 2 , "koyun"+i) ;
    }
}

// ilk inekleri oluştur
for(let i=0; i<10; i++){
    if(i<5){
        hayvanatBahcesi.inek[i] = new Hayvan("inek" , "disi" , "blue" , 2 , "inek"+i) ;
    }else{
        hayvanatBahcesi.inek[i] = new Hayvan("inek" , "erkek" , "blue" , 2 , "inek"+i) ;
    }
}

// ilk kusculları oluştur
for(let i=0; i<20; i++){
    if(i<10){
        hayvanatBahcesi.kuscul[i] = new Hayvan("kuscul" , "disi" , "red" , 1 , "kuscul"+i) ;
    }else{
        hayvanatBahcesi.kuscul[i] = new Hayvan("kuscul" , "erkek" , "red" , 1 , "kuscul"+i) ;
    }
}

// ilk kurtları oluştur
for(let i=0; i<10; i++){
    if(i<5){
        hayvanatBahcesi.kurt[i] = new Hayvan("kurt" , "disi" , "white" , 3 , "kurt"+i) ;
    }else{
        hayvanatBahcesi.kurt[i] = new Hayvan("kurt" , "erkek" , "white" , 3 , "kurt"+i) ;
    }
}

// ilk aslanları oluştur
for(let i=0; i<8; i++){
    if(i<4){
        hayvanatBahcesi.aslan[i] = new Hayvan("aslan" , "disi" , "yellow" , 4 , "aslan"+i) ;
    }else{
        hayvanatBahcesi.aslan[i] = new Hayvan("aslan" , "erkek" , "yellow" , 4 , "aslan"+i) ;
    }
}

// ilk avcı oluştur
hayvanatBahcesi.avci[0] = new Hayvan("avci" , "erkek" , "green" , 1 , "avci"+0) ;


// canvas çizimleri
function hayvanCiz(){
    context.clearRect(0, 0, 1000, 1000); // her hareket sonrası canvas temizlenir ve tekrar çizilir

    hayvanatBahcesi.koyun.forEach(i=>{
        context.fillStyle = i.renk; 
        context.fillRect(i.x,i.y,2,2);
    });

    hayvanatBahcesi.inek.forEach(i=>{
        context.fillStyle = i.renk; 
        context.fillRect(i.x,i.y,2,2);
    });

    hayvanatBahcesi.kuscul.forEach(i=>{
        context.fillStyle = i.renk; 
        context.fillRect(i.x,i.y,2,2);
    });

    hayvanatBahcesi.kurt.forEach(i=>{
        context.fillStyle = i.renk; 
        context.fillRect(i.x,i.y,2,2);
    });

    hayvanatBahcesi.aslan.forEach(i=>{
        context.fillStyle = i.renk; 
        context.fillRect(i.x,i.y,2,2);
    });

    hayvanatBahcesi.avci.forEach(i=>{
        context.fillStyle = i.renk; 
        context.fillRect(i.x,i.y,2,2);
    });
}


// Hayvan hareket ettir
function hareketEt(){
    //koyun hareket başı
    hayvanatBahcesi.koyun.forEach(i=>{

        // rasgele yön belirleme
        let yonBelirle = Math.floor(Math.random()*1000)%4; // 0 yukarı , 1 sağa , 2 aşağı, 3 sola hareket edilsin demek

        if(yonBelirle == 0){ // yukarı ilerleyecek
            // y eksen kontrolü
            if(i.y < 2){ // tavana yaklaşmışsa aşağı gitsin  
                i.y -= i.vy; // yeni y değeri atandı
            }else {
                i.y +=i.vy; // yeni y değeri atandı
            }
        }else if(yonBelirle == 1){ // sağa ilerleyecek
            // x eksen kontrolü
            if(i.x > 998){ // sağ duvara çok yaklaşmışsak sola gitsin
                i.x -= i.vx;
            }else{
                i.x += i.vx;
            }
        }else if(yonBelirle == 2){ // aşağı ilerleyecek
            // y eksen kontrolü
            if(i.y > 998){ // tabana çok yaklaşmışsa yukarı gitsin
                i.y += i.vy;
            }else{
                i.y -= i.vy;
            }
        }else{ // demek ki 3 ve sola ilerleyecek
            // x eksen kontrolü
            if(i.x < 2){
                i.x += i.vx;
            }else{
                i.x -= i.vx;
            }
        }
        
        
        // console.log("koyun hareket etti" + yonBelirle);
    }) //koyun hareket sonu

    //inek hareket başı
    hayvanatBahcesi.inek.forEach(i=>{

        // rasgele yön belirleme
        let yonBelirle = Math.floor(Math.random()*1000)%4; // 0 yukarı , 1 sağa , 2 aşağı, 3 sola hareket edilsin demek

        if(yonBelirle == 0){ // yukarı ilerleyecek
            // y eksen kontrolü
            if(i.y < 2){ // tavana yaklaşmışsa aşağı gitsin  
                i.y -= i.vy; // yeni y değeri atandı
            }else {
                i.y +=i.vy; // yeni y değeri atandı
            }
        }else if(yonBelirle == 1){ // sağa ilerleyecek
            // x eksen kontrolü
            if(i.x > 998){ // sağ duvara çok yaklaşmışsak sola gitsin
                i.x -= i.vx;
            }else{
                i.x += i.vx;
            }
        }else if(yonBelirle == 2){ // aşağı ilerleyecek
            // y eksen kontrolü
            if(i.y > 998){ // tabana çok yaklaşmışsa yukarı gitsin
                i.y += i.vy;
            }else{
                i.y -= i.vy;
            }
        }else{ // demek ki 3 ve sola ilerleyecek
            // x eksen kontrolü
            if(i.x < 2){
                i.x += i.vx;
            }else{
                i.x -= i.vx;
            }
        }
        
        
        // console.log("koyun hareket etti" + yonBelirle);
    }) //inek hareket sonu

    //kuscul hareket başı
    hayvanatBahcesi.kuscul.forEach(i=>{

        // rasgele yön belirleme
        let yonBelirle = Math.floor(Math.random()*1000)%4; // 0 yukarı , 1 sağa , 2 aşağı, 3 sola hareket edilsin demek

        if(yonBelirle == 0){ // yukarı ilerleyecek
            // y eksen kontrolü
            if(i.y < 2){ // tavana yaklaşmışsa aşağı gitsin  
                i.y -= i.vy; // yeni y değeri atandı
            }else {
                i.y +=i.vy; // yeni y değeri atandı
            }
        }else if(yonBelirle == 1){ // sağa ilerleyecek
            // x eksen kontrolü
            if(i.x > 998){ // sağ duvara çok yaklaşmışsak sola gitsin
                i.x -= i.vx;
            }else{
                i.x += i.vx;
            }
        }else if(yonBelirle == 2){ // aşağı ilerleyecek
            // y eksen kontrolü
            if(i.y > 998){ // tabana çok yaklaşmışsa yukarı gitsin
                i.y += i.vy;
            }else{
                i.y -= i.vy;
            }
        }else{ // demek ki 3 ve sola ilerleyecek
            // x eksen kontrolü
            if(i.x < 2){
                i.x += i.vx;
            }else{
                i.x -= i.vx;
            }
        }
        
        
        // console.log("koyun hareket etti" + yonBelirle);
    }) //kuscul hareket sonu

    //kurt hareket başı
    hayvanatBahcesi.kurt.forEach(i=>{

        // rasgele yön belirleme
        let yonBelirle = Math.floor(Math.random()*1000)%4; // 0 yukarı , 1 sağa , 2 aşağı, 3 sola hareket edilsin demek

        if(yonBelirle == 0){ // yukarı ilerleyecek
            // y eksen kontrolü
            if(i.y < 2){ // tavana yaklaşmışsa aşağı gitsin  
                i.y -= i.vy; // yeni y değeri atandı
            }else {
                i.y +=i.vy; // yeni y değeri atandı
            }
        }else if(yonBelirle == 1){ // sağa ilerleyecek
            // x eksen kontrolü
            if(i.x > 998){ // sağ duvara çok yaklaşmışsak sola gitsin
                i.x -= i.vx;
            }else{
                i.x += i.vx;
            }
        }else if(yonBelirle == 2){ // aşağı ilerleyecek
            // y eksen kontrolü
            if(i.y > 998){ // tabana çok yaklaşmışsa yukarı gitsin
                i.y += i.vy;
            }else{
                i.y -= i.vy;
            }
        }else{ // demek ki 3 ve sola ilerleyecek
            // x eksen kontrolü
            if(i.x < 2){
                i.x += i.vx;
            }else{
                i.x -= i.vx;
            }
        }
        
        
        // console.log("koyun hareket etti" + yonBelirle);
    }) //kurt hareket sonu

    //aslan hareket başı
    hayvanatBahcesi.aslan.forEach(i=>{

        // rasgele yön belirleme
        let yonBelirle = Math.floor(Math.random()*1000)%4; // 0 yukarı , 1 sağa , 2 aşağı, 3 sola hareket edilsin demek

        if(yonBelirle == 0){ // yukarı ilerleyecek
            // y eksen kontrolü
            if(i.y < 2){ // tavana yaklaşmışsa aşağı gitsin  
                i.y -= i.vy; // yeni y değeri atandı
            }else {
                i.y +=i.vy; // yeni y değeri atandı
            }
        }else if(yonBelirle == 1){ // sağa ilerleyecek
            // x eksen kontrolü
            if(i.x > 998){ // sağ duvara çok yaklaşmışsak sola gitsin
                i.x -= i.vx;
            }else{
                i.x += i.vx;
            }
        }else if(yonBelirle == 2){ // aşağı ilerleyecek
            // y eksen kontrolü
            if(i.y > 998){ // tabana çok yaklaşmışsa yukarı gitsin
                i.y += i.vy;
            }else{
                i.y -= i.vy;
            }
        }else{ // demek ki 3 ve sola ilerleyecek
            // x eksen kontrolü
            if(i.x < 2){
                i.x += i.vx;
            }else{
                i.x -= i.vx;
            }
        }
        
        
        // console.log("koyun hareket etti" + yonBelirle);
    }) //aslan hareket sonu

    //avci hareket başı
    hayvanatBahcesi.avci.forEach(i=>{

        // rasgele yön belirleme
        let yonBelirle = Math.floor(Math.random()*1000)%4; // 0 yukarı , 1 sağa , 2 aşağı, 3 sola hareket edilsin demek

        if(yonBelirle == 0){ // yukarı ilerleyecek
            // y eksen kontrolü
            if(i.y < 2){ // tavana yaklaşmışsa aşağı gitsin  
                i.y -= i.vy; // yeni y değeri atandı
            }else {
                i.y +=i.vy; // yeni y değeri atandı
            }
        }else if(yonBelirle == 1){ // sağa ilerleyecek
            // x eksen kontrolü
            if(i.x > 998){ // sağ duvara çok yaklaşmışsak sola gitsin
                i.x -= i.vx;
            }else{
                i.x += i.vx;
            }
        }else if(yonBelirle == 2){ // aşağı ilerleyecek
            // y eksen kontrolü
            if(i.y > 998){ // tabana çok yaklaşmışsa yukarı gitsin
                i.y += i.vy;
            }else{
                i.y -= i.vy;
            }
        }else{ // demek ki 3 ve sola ilerleyecek
            // x eksen kontrolü
            if(i.x < 2){
                i.x += i.vx;
            }else{
                i.x -= i.vx;
            }
        }
        
        
        // console.log("koyun hareket etti" + yonBelirle);
    }) //avci hareket sonu
}

function avlan(){
        //kurt avlanma başı
        hayvanatBahcesi.kurt.forEach(i=>{
            hayvanatBahcesi.koyun.forEach(a=>{
                if(Math.abs(i.x-a.x)<=4 || Math.abs(i.y-a.y) <=4 ){
                    console.log(`${i.id} numaralı kurt ${a.id} numaralı koyunu avladı`);
                    hayvanatBahcesi.koyun.splice(hayvanatBahcesi.koyun.indexOf(a),1);                    
                }
            });

            hayvanatBahcesi.kuscul.forEach(a=>{
                if(Math.abs(i.x-a.x)<=4 || Math.abs(i.y-a.y) <=4 ){
                    console.log(`${i.id} numaralı kurt ${a.id} numaralı kuscul avladı`);
                    hayvanatBahcesi.kuscul.splice(hayvanatBahcesi.kuscul.indexOf(a),1); 
                }
            });


        }) //kurt avlanma sonu

        //aslan avlanma başı
        hayvanatBahcesi.aslan.forEach(i=>{
            hayvanatBahcesi.inek.forEach(a=>{
                if(Math.abs(i.x-a.x)<=5 || Math.abs(i.y-a.y) <= 5 ){
                    console.log(`${i.id} numaralı aslan ${a.id} numaralı inek avladı`);
                    hayvanatBahcesi.inek.splice(hayvanatBahcesi.inek.indexOf(a),1); 
                }
            });

            hayvanatBahcesi.koyun.forEach(a=>{
                if(Math.abs(i.x-a.x)<=5 || Math.abs(i.y-a.y) <= 5 ){
                    console.log(`${i.id} numaralı aslan ${a.id} numaralı koyun avladı`);
                    hayvanatBahcesi.koyun.splice(hayvanatBahcesi.koyun.indexOf(a),1);
                }
            });

        }) //aslan avlanma sonu

        //avci avlanma başı
        hayvanatBahcesi.avci.forEach(i=>{
            hayvanatBahcesi.inek.forEach(a=>{
                if(Math.abs(i.x-a.x)<=8 || Math.abs(i.y-a.y) <= 8 ){
                    console.log(`${i.id} numaralı avci ${a.id} numaralı inek avladı`);
                    hayvanatBahcesi.inek.splice(hayvanatBahcesi.inek.indexOf(a),1);;
                }
            });

            hayvanatBahcesi.koyun.forEach(a=>{
                if(Math.abs(i.x-a.x)<=8 || Math.abs(i.y-a.y) <= 8 ){
                    console.log(`${i.id} numaralı avci ${a.id} numaralı koyun avladı`);
                    hayvanatBahcesi.koyun.splice(hayvanatBahcesi.koyun.indexOf(a),1);
                }
            });

            hayvanatBahcesi.kuscul.forEach(a=>{
                if(Math.abs(i.x-a.x)<=8 || Math.abs(i.y-a.y) <= 8 ){
                    console.log(`${i.id} numaralı avci ${a.id} numaralı kuscul avladı`);
                    hayvanatBahcesi.kuscul.splice(hayvanatBahcesi.kuscul.indexOf(a),1);
                }
            });

            hayvanatBahcesi.kurt.forEach(a=>{
                if(Math.abs(i.x-a.x)<=8 || Math.abs(i.y-a.y) <= 8 ){
                    console.log(`${i.id} numaralı avci ${a.id} numaralı kurt avladı`);
                    hayvanatBahcesi.kurt.splice(hayvanatBahcesi.kurt.indexOf(a),1);
                }
            });

            hayvanatBahcesi.aslan.forEach(a=>{
                if(Math.abs(i.x-a.x)<=8 || Math.abs(i.y-a.y) <= 8 ){
                    console.log(`${i.id} numaralı avci ${a.id} numaralı aslan avladı`);
                    hayvanatBahcesi.aslan.splice(hayvanatBahcesi.aslan.indexOf(a),1);
                }
            });

        }) //avci avlanma sonu
}

let sayac = 0;
function rasgeleCinsiyet(){
    let sayi = Math.floor(Math.random()*1000)%2;
    let cinsiyet;
    // 0 ise dişi 1 ise erkek olsun
    if(sayi == 0 ){
        cinsiyet = "disi";
    }else{
        cinsiyet = "erkek";
    }
    sayac++; // toplam kaç hayvan doğdu sayalım. Yeni hayvanlara id eklemek için de kullanıldı

    return cinsiyet;
}

function ciflesme(){
    // koyun çifleşme başı
    hayvanatBahcesi.koyun.forEach(i=>{
        hayvanatBahcesi.koyun.forEach(a=>{
            if(Math.abs(i.x-a.x)<=3 || Math.abs(i.y-a.y) <=3 ){
                let cins = rasgeleCinsiyet();
                console.log(cins + " koyun doğdu id numarsı " + sayac);
                let yeniKoyun = new Hayvan("koyun" , cins , "purple" , 2 , "yeniKoyun"+sayac)      
                let sonEleman = hayvanatBahcesi.koyun.length;
                // hayvanatBahcesi.koyun[sonEleman] = yeniKoyun;
                // hayvanatBahcesi.koyun.push(yeniKoyun);               
            }
        });

    }); // koyun çifleşme  sonu

    // kurt çifleşme başı
    hayvanatBahcesi.kurt.forEach(i=>{
        hayvanatBahcesi.kurt.forEach(a=>{
            if(Math.abs(i.x-a.x)<=3 || Math.abs(i.y-a.y) <=3 ){
                console.log("kurt doğdu");
            }
        });

    }); // kurt çifleşme  sonu

    // inek çifleşme başı
    hayvanatBahcesi.inek.forEach(i=>{
        hayvanatBahcesi.inek.forEach(a=>{
            if(Math.abs(i.x-a.x)<=3 || Math.abs(i.y-a.y) <=3 ){
                console.log("inek doğdu");
            }
        });

    }); // inek çifleşme  sonu

    // kuscul çifleşme başı
    hayvanatBahcesi.kuscul.forEach(i=>{
        hayvanatBahcesi.kuscul.forEach(a=>{
            if(Math.abs(i.x-a.x)<=3 || Math.abs(i.y-a.y) <=3 ){
                console.log("kuscul doğdu");
            }
        });

    }); // kuscul çifleşme  sonu

    // aslan çifleşme başı
    hayvanatBahcesi.aslan.forEach(i=>{
        hayvanatBahcesi.aslan.forEach(a=>{
            if(Math.abs(i.x-a.x)<=3 || Math.abs(i.y-a.y) <=3 ){
                console.log("aslan doğdu");
            }
        });

    }); // aslan çifleşme  sonu

}



for(let i=0; i<100; i++){
    hareketEt();
    hayvanCiz();
    avlan();
    ciflesme();
}



console.log("***********************************************************");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log("Hayvanat Bahçesinde Geride Kalan Hayvanlar: " + 
            hayvanatBahcesi.koyun.length + " adet koyun, " + 
            hayvanatBahcesi.kurt.length + " adet kurt, " + 
            hayvanatBahcesi.aslan.length + " adet aslan, " +
            hayvanatBahcesi.inek.length + " adet inek, " +
            hayvanatBahcesi.kuscul.length + " adet horoz ve tavuk, " +
            hayvanatBahcesi.avci.length + " adet avcı var"
            );
