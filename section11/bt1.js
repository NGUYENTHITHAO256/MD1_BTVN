let year = prompt("hay nhap vao mot nam bat ki");
if ( isNaN ( year ) || year <= 0){
    alert("vui long nhap nam hop le");
} else { if ( ( year % 4 === 0) && ( year % 100 !== 0) || ( year % 400 === 0)){
    alert( year + " la nam nhuan ");
} else {
    alert ( year + " khong phai la nam nhuan ")
}
}