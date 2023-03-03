// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



console.groupCollapsed("// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)")

let a = 1; 
let b = 2; 

if(a > b){
    console.log(a + " didesnis uz " + b);
} else if(b > a){
    console.log(b + " didesnis uz " + a);
} else{
    console.log("Skaiciai lygus");
}


console.groupEnd();


console.groupCollapsed("// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)")

for(let i = 1; i<11; i++){
    console.log(i);
}

console.groupEnd();

console.groupCollapsed("// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)")

for(let i = 0; i<11; i+=2){
    console.log(i);
}

console.groupEnd();

console.groupCollapsed("// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)")

for(let i = 0; i<5; i++){
    console.log(randomNumber(1,10));
}

console.groupEnd();

console.groupCollapsed("// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)")

let run = true;

while(run){
    let random = randomNumber(1,10);
    console.log(random);
    random === 5 ? run = false : null; 
}

console.groupEnd();

console.groupCollapsed("// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)")

const arr = [];

for(let i = 0; i < 25; i++){
    arr.push(randomNumber(10,30));
}

const maxValue = arr.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue, 0);

console.groupEnd();

console.groupCollapsed("// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)")

const abcd = [];

for(let i = 0; i<100; i++){

    abcd.push('abcd'[randomNumber(0,3)]);
}

const result = {};

abcd.forEach(el => {
    result[el] = (result[el]+1) || 1;
})

console.log(result);

console.groupEnd();

console.groupCollapsed("// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas. // Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)");

function lygineSuma(a,b){
    if(Array.isArray(a) && Array.isArray(b)){
        return (a.length + b.length)%2 === 0 ? a.length + b.length : 'Suma nelyginė';
    } else if(typeof(a) === 'number' && typeof(b) === 'number' ){
        return (a + b)%2 === 0 ?  a + b : 'Suma nelyginė';
    }  else{
        return "Negali būti vienas skaičius, kitas masyvas."
    }
}

console.log(lygineSuma([2,3,4],[1,2]));
console.log(lygineSuma([2,3,4],[1]));
console.log(lygineSuma(2,1));
console.log(lygineSuma(3,3));
console.log(lygineSuma(1,[1,2]));
console.log(lygineSuma([1,2],1));

console.groupEnd();

console.groupCollapsed("// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis) // skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)");

function pirminisSkaicius(){
    
}

console.groupEnd();

