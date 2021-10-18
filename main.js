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

//snack 2

const word1 = prompt('Inserisci una parola');
const word2 = prompt('Inseriscine un altra');

if (word1.length > word2.length) {
    document.getElementById("1").innerHTML = word2;
    document.getElementById("2").innerHTML = word1;
}
else if ((word2.length > word1.length)) {
    document.getElementById("1").innerHTML = word1;
    document.getElementById("2").innerHTML = word2;
}
