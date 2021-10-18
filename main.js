//snack 1
const Num1 = prompt('Inserisci un numero');
const Num2 = prompt('Inseriscine un altro');

if (Num1 > Num2) {
    document.getElementById("snack_1").innerHTML = Num1;
}
else if (Num2 > Num1) {
    document.getElementById("snack_1").innerHTML = Num2;

}
else {
    document.getElementById("snack_1").innerHTML = "Pareggio";
}