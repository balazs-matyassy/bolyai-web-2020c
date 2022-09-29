// 1 elem lekérdezése id alapján
let elem = document.getElementById('azonosito');

// 1 elem lekérdezése css szelektor alapján
// több találat esetén az első kerül lekérdezésre
let elem = document.querySelector('#azonosito');
let elem = document.querySelector('.osztaly');
let elem = document.querySelector('h2');

// több elem lekérdezése css szelektor alapján
// az eredmény tömbként kerül visszaadásra
let elemek = document.querySelectorAll('.osztaly');
let elemek = document.querySelectorAll('h2');

// szöveges elemek (div, span, p, h1, h2, li, td, th...)
// tartalma az innerHTML tulajdonság segítségével írható / olvasható

// Pl. tartalom kétszerezése
// += rövidítés használható
elem.innerHTML = elem.innerHTML + elem.innerHTML;

// bemeneti elemek (input...) tartalma a value tulajdonság segítségével írható / olvasható
let input = document.getElementById('bemenet');
input.value = input.value + input.value;

// Szükség esetén számmá kell alakítani az értékeket.
alert(parseInt(input.value) * 2);

// Elemek bejárása
let elemek = document.querySelectorAll("h2");

for (let i = 0; i < elemek.length; i++) {
    elemek[i].innerHTML = "HELLO";
}

// Függvények ("tárolt kód")
function mindentHellora() {
    let elemek = document.querySelectorAll("h2");

    for (let i = 0; i < elemek.length; i++) {
        elemek[i].innerHTML = "HELLO";
    }
}

// Függvény meghívása kattintáskor
// <button type="button" onclick="mindentHellora()">ÁTÁLLÍT</button>