function stampa() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let info = document.getElementById("stampaInfo");
    info.innerHTML = "Nome: "+ nome + "<br><br><br>" + "Cognome: "+cognome + "<br><br><br>" + "Indirizzo: "+indirizzo + "<br><br><br>";
}
