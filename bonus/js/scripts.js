// chiedo nome cognome e colore all'utente
const utente = {
    nome,
    cognome,
    colore,
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
        // genero un numero casuale tra 0 e 100 (escluso)
        const min = 0;
        const max = 100;
        const numRandom = Math.floor(Math.random() * (max - min) + min);
        return `${nome+cognome+colore-numRandom}`;
    }
}
utente.setNome(prompt("Qual è il tuo nome?"));
utente.setCognome(prompt("Qual è il tuo cognome?"));
utente.setColore(prompt("Qual è il tuo colore preferito?"));

document.getElementById("result").innerHTML = utente.getPassword();