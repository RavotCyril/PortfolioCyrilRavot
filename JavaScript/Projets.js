/* page Projet --> Function pour faire apparaitre et disparaitre les boutons des logos  */

function BouttonDynamiqueLogo() {

    /* Variable de récupérations des ID dans le html des Bouttons Logo des projets pour pouvoir mettre le style None ( avec class ça ne fonctionne pas )  */

    let bouttonLogoReservia = document.getElementById("bouttonLogoReservia");
    let bouttonLogoOhmyfood = document.getElementById("bouttonLogoOhmyfood");
    let bouttonLogoLaChouetteAgence = document.getElementById("bouttonLogoLaChouetteAgence");
    let bouttonLogoPageCorrectifLaChouetteAgence = document.getElementById("bouttonLogoPageCorrectifLaChouetteAgence");
    let bouttonLogoOrinoco = document.getElementById("bouttonLogoOrinoco");
    let bouttonLogoGroupomania = document.getElementById("bouttonLogoGroupomania");
    let bouttonLogoPiiquante = document.getElementById("bouttonLogoPiiquante");
    let bouttonLogoPeinture = document.getElementById("bouttonLogoPeinture");

    /* Variable de récupérations des ID dans le html des Liens des projets pour pouvoir mettre le style None  ( avec class ça ne fonctionne pas ) */

    let divLienProjetReservia = document.getElementById("divLienProjetReservia");
    let divLienProjetOhmyfood = document.getElementById("divLienProjetOhmyfood");
    let divLienProjetLaChouetteAgence = document.getElementById("divLienProjetLaChouetteAgence");
    let divLienProjetPageCorrectifLaChouetteAgence = document.getElementById("divLienProjetPageCorrectifLaChouetteAgence");
    let divLienProjetOrinoco = document.getElementById("divLienProjetOrinoco");
    let divLienProjetPiiquante = document.getElementById("divLienProjetPiiquante");
    let divLienProjetGroupomania = document.getElementById("divLienProjetGroupomania");
    let divLienProjetPeinture = document.getElementById("divLienProjetPeinture");
    let EyeReservia = document.getElementById("EyeReservia")
    let EyeOhmyfood = document.getElementById("EyeOhmyfood")
    let EyeLaChouetteAgence = document.getElementById("EyeLaChouetteAgence")
    let EyeLaChouetteAgenceCorrectif = document.getElementById("EyeLaChouetteAgenceCorrectif")
    let EyeOrinoco = document.getElementById("EyeOrinoco")
    let EyePiiquante = document.getElementById("EyePiiquante")
    let EyeGroupomania = document.getElementById("EyeGroupomania")
    let EyePeinture = document.getElementById("EyePeinture")

    let ReserviaCachierDescharges = document.getElementById("ReserviaCachierDescharges")
    let ReserviaScreenShoot = document.getElementById("ReserviaScreenShoot")
    let OhmyfoodCachierDescharges = document.getElementById("OhmyfoodCachierDescharges")
    let OhmyfoodScreenShoot = document.getElementById("OhmyfoodScreenShoot")
    let LaChouetteAgenceCachierDescharges = document.getElementById("LaChouetteAgenceCachierDescharges")
    let LaChouetteAgenceScreenShoot = document.getElementById("LaChouetteAgenceScreenShoot")
    let LaChouetteAgenceCorrectifScreenShoot = document.getElementById("LaChouetteAgenceCorrectifScreenShoot")
    let LaChouetteAgenceCorrectifCachierDescharges = document.getElementById("LaChouetteAgenceCorrectifCachierDescharges")
    let OrinocoScreenShoot = document.getElementById("OrinocoScreenShoot")
    let OrinocoCachierDescharges = document.getElementById("OrinocoCachierDescharges")
    let PiiquanteScreenShoot = document.getElementById("PiiquanteScreenShoot")
    let PiiquanteCachierDescharges = document.getElementById("PiiquanteCachierDescharges")
    let GroupomaniaScreenShoot = document.getElementById("GroupomaniaScreenShoot")
    let GroupomaniaCachierDescharges = document.getElementById("GroupomaniaCachierDescharges")
    let PeintureScreenShoot = document.getElementById("PeintureScreenShoot")
    let PeintureCachierDescharges = document.getElementById("PeintureCachierDescharges")

    /* Function de tous les bouttons pour utiliser le display none - Block quand on clique sur les images dans les boutons. */
    EyeReservia.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetReservia).display != "none") {
            divLienProjetReservia.style.display = "none";
            bouttonLogoReservia.style.display = "inline-block";
        } else {
            divLienProjetReservia.style.display = "inline";
            bouttonLogoReservia.style.display = "none";
            ReserviaCachierDescharges.style.display = "none";
            ReserviaScreenShoot.style.display = "inline";
        }
    })
    bouttonLogoReservia.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetReservia).display != "none") {
            ReserviaCachierDescharges.style.display = "none";
        } else {
            divLienProjetReservia.style.display = "inline";
            ReserviaCachierDescharges.style.display = "inline";
            bouttonLogoReservia.style.display = "none";
            ReserviaScreenShoot.style.display = "none";
        }
    })
    EyeOhmyfood.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetOhmyfood).display != "none") {
            divLienProjetOhmyfood.style.display = "none";
            bouttonLogoOhmyfood.style.display = "inline-block";
        } else {
            divLienProjetOhmyfood.style.display = "inline";
            bouttonLogoOhmyfood.style.display = "none";
            OhmyfoodCachierDescharges.style.display = "none";
            OhmyfoodScreenShoot.style.display = "inline";
        }
    })
    bouttonLogoOhmyfood.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetOhmyfood).display != "none") {
            OhmyfoodCachierDescharges.style.display = "none";
        } else {
            divLienProjetOhmyfood.style.display = "inline";
            OhmyfoodCachierDescharges.style.display = "inline";
            bouttonLogoOhmyfood.style.display = "none";
            OhmyfoodScreenShoot.style.display = "none";
        }
    })
    EyeLaChouetteAgence.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetLaChouetteAgence).display != "none") {
            divLienProjetLaChouetteAgence.style.display = "none";
            bouttonLogoLaChouetteAgence.style.display = "inline-block";
        } else {
            divLienProjetLaChouetteAgence.style.display = "inline";
            bouttonLogoLaChouetteAgence.style.display = "none";
            LaChouetteAgenceCachierDescharges.style.display = "none";
            LaChouetteAgenceScreenShoot.style.display = "inline";
        }
    })
    bouttonLogoLaChouetteAgence.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetLaChouetteAgence).display != "none") {
            LaChouetteAgenceCachierDescharges.style.display = "none";
        } else {
            divLienProjetLaChouetteAgence.style.display = "inline";
            LaChouetteAgenceCachierDescharges.style.display = "inline";
            bouttonLogoLaChouetteAgence.style.display = "none";
            LaChouetteAgenceScreenShoot.style.display = "none";
        }
    })
    EyeLaChouetteAgenceCorrectif.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetPageCorrectifLaChouetteAgence).display != "none") {
            divLienProjetPageCorrectifLaChouetteAgence.style.display = "none";
            bouttonLogoPageCorrectifLaChouetteAgence.style.display = "inline-block";
        } else {
            divLienProjetPageCorrectifLaChouetteAgence.style.display = "inline";
            bouttonLogoPageCorrectifLaChouetteAgence.style.display = "none";
            LaChouetteAgenceCorrectifCachierDescharges.style.display = "none";
            LaChouetteAgenceCorrectifScreenShoot.style.display = "inline";
        }
    })
    bouttonLogoPageCorrectifLaChouetteAgence.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetPageCorrectifLaChouetteAgence).display != "none") {
            LaChouetteAgenceCorrectifCachierDescharges.style.display = "none";
        } else {
            divLienProjetPageCorrectifLaChouetteAgence.style.display = "inline";
            LaChouetteAgenceCorrectifCachierDescharges.style.display = "inline";
            bouttonLogoPageCorrectifLaChouetteAgence.style.display = "none";
            LaChouetteAgenceCorrectifScreenShoot.style.display = "none";
        }
    })
    EyeOrinoco.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetOrinoco).display != "none") {
            divLienProjetOrinoco.style.display = "none";
            bouttonLogoOrinoco.style.display = "inline-block";
        } else {
            divLienProjetOrinoco.style.display = "inline";
            bouttonLogoOrinoco.style.display = "none";
            OrinocoCachierDescharges.style.display = "none";
            OrinocoScreenShoot.style.display = "inline";
        }
    })
    bouttonLogoOrinoco.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetOrinoco).display != "none") {
            OrinocoCachierDescharges.style.display = "none";
        } else {
            divLienProjetOrinoco.style.display = "inline";
            OrinocoCachierDescharges.style.display = "inline";
            bouttonLogoOrinoco.style.display = "none";
            OrinocoScreenShoot.style.display = "none";
        }
    })
    EyePiiquante.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetPiiquante).display != "none") {
            divLienProjetPiiquante.style.display = "none";
            bouttonLogoPiiquante.style.display = "inline-block";
        } else {
            divLienProjetPiiquante.style.display = "inline";
            bouttonLogoOrinoco.style.display = "none";
            PiiquanteCachierDescharges.style.display = "none";
            PiiquanteScreenShoot.style.display = "inline";
        }
    })
    bouttonLogoPiiquante.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetPiiquante).display != "none") {
            PiiquanteCachierDescharges.style.display = "none";
        } else {
            divLienProjetPiiquante.style.display = "inline";
            PiiquanteCachierDescharges.style.display = "inline";
            bouttonLogoPiiquante.style.display = "none";
            PiiquanteScreenShoot.style.display = "none";
        }
    })
    EyeGroupomania.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetGroupomania).display != "none") {
            divLienProjetGroupomania.style.display = "none";
            bouttonLogoGroupomania.style.display = "inline-block";
        } else {
            divLienProjetGroupomania.style.display = "inline";
            bouttonLogoGroupomania.style.display = "none";
            GroupomaniaCachierDescharges.style.display = "none";
            GroupomaniaScreenShoot.style.display = "inline";
        }
    })
    bouttonLogoGroupomania.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetGroupomania).display != "none") {
            GroupomaniaCachierDescharges.style.display = "none";
        } else {
            divLienProjetGroupomania.style.display = "inline";
            GroupomaniaCachierDescharges.style.display = "inline";
            bouttonLogoGroupomania.style.display = "none";
            GroupomaniaScreenShoot.style.display = "none";
        }
    })
    EyePeinture.addEventListener("click", () => {
        if (getComputedStyle(divLienProjetPeinture).display != "none") {
            divLienProjetPeinture.style.display = "none";
            bouttonLogoPeinture.style.display = "inline-block";
        } else {
            divLienProjetPeinture.style.display = "inline";
            bouttonLogoPeinture.style.display = "none";
            PeintureCachierDescharges.style.display = "none";
            PeintureScreenShoot.style.display = "inline";
        }
    })
}
BouttonDynamiqueLogo()
      /* ----------------------------------------------Fin Function de tous les bouttons  Fin--------------------------------------------*/