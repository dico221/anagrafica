let warning = document.getElementById("asdf");
let persone;
if (localStorage.getItem("persone") === null) {
    persone = []; 
    console.log("prova");
} else {
    persone = JSON.parse(localStorage.getItem("persone"));
}
function funzione() {
    
    
    let feedback_nome = document.getElementById("feedback_nome");
    let feedback_cognome = document.getElementById("feedback_cognome");
    let feedback_email = document.getElementById("feedback_email");
    let feedback_fiscale = document.getElementById("feedback_fiscale");
    let feedback_cap = document.getElementById("feedback_cap");
    const nomeTest = /^[a-zA-ZÀ-ÿ]+$/;
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const capTest =/^[A-Za-z0-9\s-]{3,10}$/;
    const fiscaleTest = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/;
    let test = false;

    if (nomeTest.test(document.getElementById("nome").value.trim())) {
        feedback_nome.innerHTML = '';
    }
    else{
        feedback_nome.style.color = "red";
        feedback_nome.innerHTML = "Nome non valido";
        test = false;
    }

    if(nomeTest.test(document.getElementById("cognome").value.trim())){
        feedback_cognome.innerHTML = '';
    }
    else{
        feedback_cognome.style.color = "red";
        feedback_cognome.innerHTML = "Cognome non valido";
        test = false;
    }
    if(capTest.test(document.getElementById("cap").value.trim())){
        feedback_cap.innerHTML = ''
    }else{
        feedback_cap.style.color = "red";
        feedback_cap.innerHTML = "CAP non valido";
        test = false;
    }
    if(emailTest.test(document.getElementById("email").value.trim())){
        feedback_email.innerHTML = '';
    }else{
        feedback_email.style.color = "red";
        feedback_email.innerHTML = "CAP non valido";
        test = false;
    }
    if(fiscaleTest.test(document.getElementById("codice_fiscale").value.trim())){
        feedback_fiscale.innerHTML = '';
    }else{
        feedback_fiscale.style.color = "red";
        feedback_fiscale.innerHTML = "Codice fiscale non valido";
        test = false;
    }



    if(document.getElementById(""))

    if(test){ creaPersona() }
} 

function creaPersona(){
    let gender = undefined;
    let veicoli = [];
    let materia = [];
    for(i=0;i<document.getElementsByName("sesso").length;i++) {
        if(document.getElementsByName("sesso")[i].checked){
            gender = document.getElementsByName("sesso")[i].value
        }
    }

    for (let i = 1; i <= 5; i++) {
        if (document.getElementById("veicolo" + i) && document.getElementById("veicolo" + i).checked) {
            veicoli.push(document.getElementById("veicolo" + i).value);
        }
    }
    for (let i = 0; i < document.getElementById("materia").options.length; i++) {
        if (document.getElementById("materia").options[i].selected) {
            materia.push(document.getElementById("materia").options[i].value);
        }
    }
        
    
    if(gender == undefined){
        gender = "non impostato"
        console.log("no")
    }

    let persona = {
        nome: document.getElementById("nome").value.trim(),
        cognome: document.getElementById("cognome").value.trim(),
        email: document.getElementById("email").value.trim(),
        fiscale: document.getElementById("codice_fiscale").value.trim(),
        sesso: gender,
        veicoli: veicoli.join(", "),
        indirizzo: document.getElementById("indirizzo").value.trim(),
        citta: document.getElementById("citta").value.trim(),
        provincia: document.getElementById("provincia").value.trim(),
        cap: document.getElementById("cap").value.trim(),
        eta: new Date().getFullYear() - document.getElementById("eta").value.substring(0,4),
        materia: materia.join(", "),
        generazione: ""
    }
    if(document.getElementById("eta").value.substring(0,4) == ''){
        persona.eta = "non impostata"
    }
    if(persona.eta != "non impostata"){
        if (document.getElementById("eta").value.substring(0,4) <= 1927) {
        persona.generazione = "Greatest Generation";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1928 && document.getElementById("eta").value.substring(0,4) <= 1945) {
        persona.generazione = "Generazione Silenziosa";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1946 && document.getElementById("eta").value.substring(0,4) <= 1964) {
        persona.generazione = "Baby Boomers";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1965 && document.getElementById("eta").value.substring(0,4) <= 1980) {
        persona.generazione = "Generazione X";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1981 && document.getElementById("eta").value.substring(0,4) <= 1996) {
        persona.generazione = "Generazione Millenials";
    } else if (document.getElementById("eta").value.substring(0,4) >= 1997 && document.getElementById("eta").value.substring(0,4) <= 2012) {
        persona.generazione = "Generazione Z";
    } else if(document.getElementById("eta").value.substring(0,4) >= 2013) {
        persona.generazione = "Generazione Alpha";
    } else {
        persona.generazione = ""
    }
    } else {
        persona.generazione = "non impostata"
    }
    
    if(persona.sesso == ""){
        persona.sesso = "non impostato"
    }
    
    if(persona.veicoli.length == 0){
        persona.veicoli= "non impostato";
    }
    if(persona.indirizzo == ""){
        persona.indirizzo = "non impostato";
    }
    if(persona.citta == ""){
        persona.citta = "non impostata"
    }
    if(persona.provincia == ""){
        persona.provincia = "non impostata"
    }
    if(persona.cap == ""){
        persona.cap = "non impostato"
    }

    if(persona.nome.trim() != "" && persona.cognome.trim() != ""){
        persone.push(persona);
        localStorage.setItem("persone",JSON.stringify(persone))
    }
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
    if(persone.length > 0){
        warning.style.color = "green";
        warning.innerHTML = "Dati Cancellati"
    } else {
        warning.style.color = "orange";
        warning.innerHTML = "Dati non presenti"
    }
    persone = []
    localStorage.setItem("persone",JSON.stringify(persone))
    
}

function controllo(){
    if(persone.length > 0){
        window.location.href = "./stampa.html";
    }
    else {
        warning.style.color = "orange";
        warning.innerHTML = "Dati non presenti"
    }
}
