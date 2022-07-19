// chiedo nome cognome e colore all'utente
let nome = prompt("Qual è il tuo nome?");
nome = nome.toLowerCase();
let cognome = prompt("Qual è il tuo cognome?");
cognome = cognome.toLowerCase();
let colore = prompt("Qual è il tuo colore preferito?");
colore = colore.toLowerCase();

// genero un numero casuale tra 0 e 100
const min = 0;
const max = 100;
const numRandom = Math.floor(Math.random() * (max - min) + min);

document.getElementById("result").innerHTML = `${nome+cognome+colore+numRandom}`;