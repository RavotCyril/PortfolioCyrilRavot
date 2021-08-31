/* Variable de récupérations des ID dans le html des Bouttons Logo des projets pour pouvoir mettre le style None ( avec class ça ne fonctionne pas )  */

let bouttonLogoReservia = document.getElementById("bouttonLogoReservia");
let bouttonLogoOhmyfood = document.getElementById("bouttonLogoOhmyfood");
let bouttonLogoPageOrigineLaChouetteAgence = document.getElementById("bouttonLogoPageOrigineLaChouetteAgence");
let bouttonLogoPageCorrectifLaChouetteAgence = document.getElementById("bouttonLogoPageCorrectifLaChouetteAgence");
let bouttonLogoOrinoco = document.getElementById("bouttonLogoOrinoco");
let bouttonLogoGroupomania = document.getElementById("bouttonLogoGroupomania");
let bouttonLogoSoPekocko = document.getElementById("bouttonLogoSoPekocko");
let bouttonLogoPeinture = document.getElementById("bouttonLogoPeinture");

/* Variable de récupérations des ID dans le html des Liens des projets pour pouvoir mettre le style None  ( avec class ça ne fonctionne pas ) */

let divLienProjetReservia = document.getElementById("divLienProjetReservia");
let divLienProjetOhmyfood = document.getElementById("divLienProjetOhmyfood");
let divLienProjetPageOrigineLaChouetteAgence = document.getElementById("divLienProjetPageOrigineLaChouetteAgence");
let divLienProjetPageCorrectifLaChouetteAgence = document.getElementById("divLienProjetPageCorrectifLaChouetteAgence");
let divLienProjetOrinoco = document.getElementById("divLienProjetOrinoco");
let divLienProjetSoPeckocko = document.getElementById("divLienProjetSoPeckocko");
let divLienProjetGroupomania = document.getElementById("divLienProjetGroupomania");
let divLienProjetPeinture = document.getElementById("divLienProjetPeinture");


bouttonLogoReservia.addEventListener("click", () => {
    if (getComputedStyle(divLienProjetReservia).display != "none") {
        divLienProjetReservia.style.display = "none";
    } else {
        divLienProjetReservia.style.display = "block";
        bouttonLogoReservia.style.display = "none";
    }
})