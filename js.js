//1. Névköszöntő
let nev = prompt("Írd be a neved", "név helye");
document.getElementById("szoveg1").innerHTML = "Szia " + nev + "! Örülök, hogy itt vagy!";


//2. Véletlenszám-generálás
console.log(Math.random(1, 10))

//3. Dobókocka szimuláció
Math.random(1, 6);

//4. Intervallum véletlenszám
let b = prompt("Írj be egy számot");
let c = prompt("Írj be egy másik számot");
Math.random(b, c);

//5. Életkor kategorizálás
let eletkor = prompt("Írd be az életkorod");
if (eletkor >= 0 && eletkor<= 6) console.log("gyerek")
else if (eletkor >= 7 && eletkor <= 18) console.log("iskolás")
else if (eletkor >= 19 && eletkor <= 60) console.log("dolgozó")
else console.log("nyugdíjas")

//6. Szám előjele
let szamelpozneg =  prompt("Írj be egy számot");
if (szamelpozneg > 0) console.log("pozitív")
else if (szamelpozneg < 0) console.log("negatív")
else console.log("nulla")
