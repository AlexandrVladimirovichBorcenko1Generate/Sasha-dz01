let imya = "Jotaro";
let familya = "Kujo";
document.write("Ohayo, " + imya + " " + familya)
console.log("Ohayo, " + imya + " " + familya);

let numberA = 888;
let numberB = 999;
if (numberA === numberB){
    console.log("числа равны"); 
}else if(numberA > numberB) {
    console.log("первое число больше чем второе число");
}else {
    console.log("второе больше первого");
}

let color = "red";
switch (color){
    case "green":
    console.log("lets go");
        break;
    case "yellow":
    console.log("wait");
        break;
    case "red":
    console.log("stop");
        break;
}
