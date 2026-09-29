let weight = +prompt("hay nhap can nang");
let height = +prompt("hay nhap chieu cao");
let BMI = weight / (height*height);
if(BMI < 18,5){
    alert("can nang thap");
}else if( BMI >= 18 && BMI <= 24,9 ){
    alert( "binh thuong");
} else if( BMI >= 25){
    alert( "thua can");
}else if (BMI > 25 && BMI < 29,9){
    alert("tien beo phi");
}else if ( BMI >= 30 && BMI <= 34,9){
    alert(" beo phi do 1");
}else if (BMI >= 35 && BMI <= 39,9){
    alert(" beo phi do 2");
}else if (BMI >= 40){
    alert("beo phi do 3");
}else{
    alert("khong phu hop");
}