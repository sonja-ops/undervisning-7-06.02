/*
Datatyper

Oppgaver
1. Lag variabel name, age, isLearningJs, putt inn forskjellige datatyper om deg selv
2. Console.log hver variabel
3. Bruk console log for å finne datatypen til en variabel
4. Lag en array av forskjellige ingredienser til en bakeoppskrift

Funksjon

Oppgaver

1. lag en funksjon som console.log 'Hello World'
2. Lag en funksjon som legger sammen 2 tall
3. Lag en funksjon med en variabel som har en array og console.log arrayet

*/

const name = "Sonja"
console.log(name)

let age = 48
console.log(age)

console.log(typeof age)
console.log(typeof name)

let ingredienser = ["mel","egg","sukker", "melk","bakepulver"];
console.log(ingredienser)


function hilsen() {
    console.log("Hello World")
} 

hilsen()

function fruktkurv() {
    let frukt = ["banan", "eple", "pære","druer", "apelsin"];
    console.log(frukt)
}
fruktkurv()

function fruktsalat() {
    let banan = 3;
    let eple = 2;
    let pære = 1;
    let druer = 8;
    let apelsin = 1;

    let frukt = banan+eple+pære+druer+apelsin;
    console.log("samlet antal frukt er:+"+frukt)
}
fruktsalat()

function kalkulator() {
    let tall1 = 5
    let tall2 = 8

    let sum = tall1+tall2;
    console.log(sum)
}
kalkulator()

//DATATYPER//


//Number

let number = 23

//String

let firstName = "Sonja"

//Boleoon

let isTeaching = true;


// Errordata

/**
 * Underfined
 * Null
 * Nan
 */

// Aray

let shoppingList = ["såpe", "mel", "Fjørland"];

let numberList = [0, 3, 5]

//Object

let firstObject = { firstName: "Sonja", age: 20, city:"Bergen"};


function addnr() {
    let bananas = 50;
    let apples = 73;

    let fruits = apples + bananas;
     console.log("samlet antall frukt er: + " + fruits )
}
addnr();