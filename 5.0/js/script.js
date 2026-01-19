let warning = document.getElementById("asd");
function funzione() {
    let persona = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value
    }
    if(persona.nome != "" && persona.cognome != ""){
        localStorage.setItem("persona" + localStorage.length.toString(), JSON.stringify(persona))
        window.location.href = "./stampa.html"}
    else {
        warning.style.color = "red"
        warning.innerHTML = "Inserire nome e cognome"
    }
    
}
function cancella(){
    if(localStorage.length != 0){
        warning.style.color = "green";
        warning.innerHTML = "Dati Cancellati"
    } else {
        warning.style.color = "orange";
        warning.innerHTML = "Dati non presenti"
    }
    localStorage.clear();
    
}

