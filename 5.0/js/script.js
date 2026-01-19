let warning = document.getElementById("asdf");
function funzione() {
    let persona = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value
    }
    if(persona.nome.trim() != "" && persona.cognome.trim() != ""){
        localStorage.setItem("persona" + localStorage.length.toString().trim(), JSON.stringify(persona))
        window.location.href = "./stampa.html"}
    else {
        warning.style.color = "red"
        if(persona.nome.trim() == "" && persona.cognome.trim() != ""){
            warning.innerHTML = "Inserire nome"
        }
        else if(persona.cognome.trim() == "" && persona.nome.trim() != ""){
            warning.innerHTML = "Inserire cognome"
        }
        else{
            warning.innerHTML = "Inserire nome e cognome"
        }
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

