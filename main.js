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
    const Sum = 0
    for (let i = 0; i < 10; i++) {
        const Number = parseInt(prompt('Inserisci un numero'));
        Sum = Sum + Number;

    }
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
function snc5() {
    //snack 
    const array = [""];
    for (let i = 1; i < 6; i++) {

        const Number = parseInt(prompt('Inserisci un numero'));


        if (Number % 2 != 0) {

            array.push(Number)

        }
        else {
            document.getElementById('snack_5').innerHTML = "Il numero da lei inserito è errato. La preghiamo di riprovare piu tardi, Grazie."
        }

    }
}
function snc6() {
    const UserSelect = parseInt(prompt("Inserisci un numero"))
    const Usernumber = [];
    for (let i = 1; i <= UserSelect; i++) {
        let contati = Math.pow(i, 3);
        Usernumber.push(contati)
    }
    document.getElementById('snack_6').innerHTML = Usernumber
}

function snc7() {
    const Esponent = [];
    i = 1
    while (i < 10) {
        Result = Math.pow(2, i);
        Esponent.push(Result);
        i++;
    }
    document.getElementById('snack_7').innerHTML = Esponent
}

function snc8() {
    const DividedNum = prompt("Insersci 4 cifre");

    const Summary = DividedNum.charAt(0) + DividedNum.charAt(1) + DividedNum.charAt(2) + DividedNum.charAt(3);

    document.getElementById('snack_8').innerHTML = Summary
}

