// 1.chiedere all'utente il numero di chilometri che vuole percorrere.//
var numeroKm = prompt("quanti km vuoi percorrere ?")

// 2.chiedere l'età del passeggero.//
var età = prompt("quanti anni hai ?")

// 3.chiedere il prezzo totale del viaggio.//
var prezzoBase = 0.21 * numeroKm;
alert(prezzoBase);

// 4.sconto minorenni
var scontoMinorenni = prezzoBase / 100 * 20;
alert(scontoMinorenni);

// 4.sconto over 65
var scontoOver65 = prezzoBase / 100 * 40;
alert(scontoOver65);


// var prezzoTotale;
// if ( ) {
// } else {

// }



// il prezzo del biglietto è definito in base ai km(0.21 € al km)//





// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.