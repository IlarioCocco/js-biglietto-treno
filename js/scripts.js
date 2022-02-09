// il prezzo del biglietto è definito in base ai km(0.21 € al km)//
// va applicato uno sconto del 30 % per i minorenni
// va applicato uno sconto del 50 % per gli over 65.

// 1.chiedere all'utente il numero di chilometri che vuole percorrere.//
var numeroKm = parseInt(prompt("quanti km vuoi percorrere ?"));
console.log(typeof(numeroKm));

// 2.chiedere l'età del passeggero.//
var eta = parseInt(prompt("quanti anni hai ?"));
console.log(typeof(eta));

// 3.prezzo totale a km effettivo.//
var prezzoBase = 0.21 * numeroKm;
// document.getElementById("prezzo Base").innerHTML += prezzoBase + " € " + "a Km";


if (eta < 18) {
    var scontoMinorenni = prezzoBase / 100 * 30;
    alert("prezzo per minorenni: " + scontoMinorenni + " € ");
    document.getElementById("prezzo Minorenni").innerHTML += scontoMinorenni + " € " + "a Km";

} else if (eta >= 65) {
    var scontoOver65 = prezzoBase / 100 * 50;
    alert("prezzo per over 65 è di: " + scontoOver65 + " € ");
    document.getElementById("prezzo Over65").innerHTML += scontoOver65 + " € " + "a Km";

} else {
    alert("prezzo base: " + prezzoBase + " € ");
    document.getElementById("prezzo Base").innerHTML += prezzoBase + " € " + "a Km";
}

// step by step

// 4.sconto minorenni//
// var scontoMinorenni = prezzoBase / 100 * 30;

// 5.sconto over 65//
// var scontoOver65 = prezzoBase / 100 * 50;

// 6.prezzo prezzoMinorenni//
// var prezzoMinorenni = prezzoBase - scontoMinorenni;
// document.getElementById("prezzo Minorenni").innerHTML += prezzoMinorenni + " € ";

// 7.prezzoOver65//
// var prezzoOver65 = prezzoBase - scontoOver65;
// document.getElementById("prezzo Over65").innerHTML += prezzoOver65 + " € ";  
