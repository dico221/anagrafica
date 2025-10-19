function stampa() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let citta = document.getElementById("citta").value
    let cap = document.getElementById("cap").value;
    let eta = document.getElementById("eta").value.substring(0,4);
    eta = parseInt(eta);
    let info = document.getElementById("stampaInfo");
    console.log(eta)
    let gen;
    if (eta >= 1901 && eta <= 1927) {
        gen = "Greatest Generation";
    } else if (eta >= 1928 && eta <= 1945) {
        gen = "Generazione Silenziosa";
    } else if (eta >= 1946 && eta <= 1964) {
        gen = "Baby Boomers";
    } else if (eta >= 1965 && eta <= 1980) {
        gen = "Generazione X";
    } else if (eta >= 1981 && eta <= 1996) {
        gen = "Generazione Millenials";
    } else if (eta >= 1997 && eta <= 2012) {
        gen = "Generazione Z";
    } else {
        gen = "Generazione Alpha";
    }

    info.innerHTML = "Nome: "+ nome + "<br><br><br>" + "Cognome: "+cognome + "<br><br><br>" + "Città: "+citta + "<br><br><br>" + "CAP: "+cap + "<br><br><br>" + "Generazione: "+gen + "<br><br><br>";
}
