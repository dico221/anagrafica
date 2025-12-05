function stampa(t) {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let ind1 = document.getElementById("indirizzo").value;
    let citta = document.getElementById("citta").value
    let cap = document.getElementById("cap").value;
    let eta = document.getElementById("eta").value.substring(0,4);
    eta = parseInt(eta);
    let info = document.getElementById("stampaInfo");
    let veicoli = [];
    let gender;
    let materia;
    let prov = document.getElementById("provincia").value;
    let gen;
    if (eta <= 1927) {
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
    } else if(eta >= 2013) {
        gen = "Generazione Alpha";
    } else {
        gen = ""
    }
/*
    if(document.getElementById("veicolo1").checked){
        veicoli.push(document.getElementById("veicolo1").value)
    }
    if(document.getElementById("veicolo2").checked){
        veicoli.push(document.getElementById("veicolo2").value)
    }
    if(document.getElementById("veicolo3").checked){
        veicoli.push(document.getElementById("veicolo3").value)
    }
    if(document.getElementById("veicolo4").checked){
        veicoli.push(document.getElementById("veicolo4").value)
    }
    if(document.getElementById("veicolo5").checked){
        veicoli.push(document.getElementById("veicolo5").value)
    }
*/
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
    materia = document.getElementById("materia").value;
    if(gender == undefined){
        gender = ""
        console.log("no")
    }
    let datiPersona = [{firstName: nome,lastName: cognome,indirizzo: ind1,city: citta,cap: cap,age: eta,vehicle: veicoli,gender:gender,mat: materia,provincia: prov,generazine: gen}]
    if(t)
        info.innerHTML = "Nome: "+ datiPersona[0].firstName + "<br><br><br>" + "Cognome: "+datiPersona[0].lastName + "<br><br><br>" + "Sesso: " + datiPersona[0].gender + "<br><br><br>" + "Veicoli: " + datiPersona[0].vehicle.join(" ")+ "<br><br><br>" + "Indirizzo: " + datiPersona[0].indirizzo + "<br><br><br>"+ "Città: "+datiPersona[0].city + "<br><br><br>" + "CAP: "+datiPersona[0].cap + "<br><br><br>" + "Materia preferita: " + datiPersona[0].mat + "<br><br><br>" +  "Generazione: "+datiPersona[0].generazine + "<br><br><br>";
    else{
        info.innerHTML = "";
    }
}