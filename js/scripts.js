// 1.chiedere all'utente il numero di chilometri che vuole percorrere.//
var numeroKm = prompt("quanti km vuoi percorrere ?")

// 2.chiedere l'età del passeggero.//
var eta = prompt("quanti anni hai ?")

// 3.chiedere il prezzo totale del viaggio.//
var prezzoBase = 0.21 * numeroKm;
alert("prezzo base senza sconto" + prezzoBase);

// 4.sconto minorenni//
var scontoMinorenni = prezzoBase / 100 * 20;
alert("sconto minorenni" + scontoMinorenni );

// 4.sconto over 65//
var scontoOver65 = prezzoBase / 100 * 40;
alert("over 65 " + scontoOver65);

// 5.prezzo prezzoMinorenni//
var prezzoMinorenni = prezzoBase - scontoMinorenni;

// 6.prezzoOver65//
var prezzoOver65 = prezzoBase - scontoOver65;


if (eta < 18) {
    alert("sconti minorenni dato " + prezzoMinorenni);

} else if (eta > 65) {
    alert("sconti over 65 dato " + prezzoOver65);

} else {
    alert("prezzo base " + prezzoBase);
}




// il prezzo del biglietto è definito in base ai km(0.21 € al km)//





// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.