// chiedo nome cognome e colore all'utente
const utente = {
    nome: "",
    cognome: "",
    colore: "",
    setNome(nome){
        this.nome = nome.toLowerCase();
    },
    setCognome(cognome){
        this.cognome = cognome.toLowerCase();
    },
    setColore(colore){
        this.colore = colore.toLowerCase();
    },
    getPassword() {
        // genero un numero casuale
        // chiedo l'intervallo numerico all'utente (estremi inclusi)
        const min = Math.ceil(parseInt(prompt("Inserisci un numero compreso tra 0 e 49")));
        const max = Math.floor(parseInt(prompt("Inserisci un numero compreso tra 51 e 100")));
        const numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return `${this.nome+this.cognome+this.colore+numRandom}`;
    }
}
utente.setNome(prompt("Qual è il tuo nome?"));
utente.setCognome(prompt("Qual è il tuo cognome?"));
utente.setColore(prompt("Qual è il tuo colore preferito?"));

document.getElementById("result").innerHTML = utente.getPassword();