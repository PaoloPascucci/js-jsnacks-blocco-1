//snack 1

function snc1() {
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
}


function snc2() {
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

}
function snc3() {
    //snack 3

    const Num1 = parseInt(prompt('Inserisci un numero'));
    const Num2 = parseInt(prompt('Inserisci un numero'));
    const Num3 = parseInt(prompt('Inserisci un numero'));
    const Num4 = parseInt(prompt('Inserisci un numero'));
    const Num5 = parseInt(prompt('Inserisci un numero'));
    const Num6 = parseInt(prompt('Inserisci un numero'));
    const Num7 = parseInt(prompt('Inserisci un numero'));
    const Num8 = parseInt(prompt('Inserisci un numero'));
    const Num9 = parseInt(prompt('Inserisci un numero'));
    const Num10 = parseInt(prompt('Inserisci un numero'));

    const Sum = Num1 + Num2 + Num3 + Num4 + Num5 + Num6 + Num7 + Num8 + Num9 + Num10

    document.getElementById("snack_3").innerHTML = Sum;

}

function snc4() {
    //snack 4
    const UserName = prompt('Mi serve la tua Email, grazie')
    var check = 0
    const Guestes = ["Pablo", "Francesco", "Matteo", "Rosty"]
    for (let i = 0; i <= Guestes.length; i++) {
        if (Guestes[i] == UserName) {
            var check = 1

        }
    }
    if (check == 1) {
        document.getElementById('snack_4').innerHTML = "Passa pure, sir"

    }
    else if (check == 0) {
        document.getElementById('snack_4').innerHTML = "NUN CE PROVA; DISGRAZIATO, TORNA CASA TUA, IMMIGRATO"

    }
}

