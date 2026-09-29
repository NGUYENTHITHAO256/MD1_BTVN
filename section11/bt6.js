let a = +prompt( "hay nhap vao so a");
let b = +prompt( " hay nhap vao so b");
let pheptinh = prompt( " hay nhap vao phep tinh +, -, *, /");
switch(pheptinh){
    case "+":
        alert(" ket qua cua phep tinh tren:" +(a + b));
        break;
    case "-":
        alert("ket qua cua phep tinh tren:"+(a - b));
        break;
    case "*":
        alert("ket qua cua phep tinh tren:" +(a * b));
        break;
    case "/":
        alert(" ket qua cua phep tinh tren:" +(a / b));
        break;
    default:
        alert("phep tinh khong phu hop");
        break;
}