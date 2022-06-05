  /* page Projet --> Function pour faire apparaitre et disparaitre les boutons des logos  */

  function BouttonDynamiqueLogo() {

      /* Variable de récupérations des ID dans le html des Bouttons Logo des projets pour pouvoir mettre le style None ( avec class ça ne fonctionne pas )  */

      let bouttonLogoReservia = document.getElementById("bouttonLogoReservia");
      let bouttonLogoOhmyfood = document.getElementById("bouttonLogoOhmyfood");
      let bouttonLogoPageOrigineLaChouetteAgence = document.getElementById("bouttonLogoPageOrigineLaChouetteAgence");
      let bouttonLogoPageCorrectifLaChouetteAgence = document.getElementById("bouttonLogoPageCorrectifLaChouetteAgence");
      let bouttonLogoOrinoco = document.getElementById("bouttonLogoOrinoco");
      let bouttonLogoGroupomania = document.getElementById("bouttonLogoGroupomania");
      let bouttonLogoPiiquante = document.getElementById("bouttonLogoPiiquante");
      let bouttonLogoPeinture = document.getElementById("bouttonLogoPeinture");
      /* Variable de récupérations des ID dans le html des Liens des projets pour pouvoir mettre le style None  ( avec class ça ne fonctionne pas ) */

      let divLienProjetReservia = document.getElementById("divLienProjetReservia");
      let divLienProjetOhmyfood = document.getElementById("divLienProjetOhmyfood");
      let divLienProjetPageOrigineLaChouetteAgence = document.getElementById("divLienProjetPageOrigineLaChouetteAgence");
      let divLienProjetPageCorrectifLaChouetteAgence = document.getElementById("divLienProjetPageCorrectifLaChouetteAgence");
      let divLienProjetOrinoco = document.getElementById("divLienProjetOrinoco");
      let divLienProjetPiiquante = document.getElementById("divLienProjetPiiquante");
      let divLienProjetGroupomania = document.getElementById("divLienProjetGroupomania");
      let divLienProjetPeinture = document.getElementById("divLienProjetPeinture");


      /* Function de tous les bouttons pour utiliser le display none - Block quand on clique sur les images dans les boutons. */

      bouttonLogoReservia.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetReservia).display != "none") {
              divLienProjetReservia.style.display = "none";
          } else {
              divLienProjetReservia.style.display = "block";
              bouttonLogoReservia.style.display = "none";
          }
      })
      bouttonLogoOhmyfood.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetOhmyfood).display != "none") {
              divLienProjetOhmyfood.style.display = "none";
          } else {
              divLienProjetOhmyfood.style.display = "block";
              bouttonLogoOhmyfood.style.display = "none";
          }
      })
      bouttonLogoPageOrigineLaChouetteAgence.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetPageOrigineLaChouetteAgence).display != "none") {
              divLienProjetPageOrigineLaChouetteAgence.style.display = "none";
          } else {
              divLienProjetPageOrigineLaChouetteAgence.style.display = "block";
              bouttonLogoPageOrigineLaChouetteAgence.style.display = "none";
          }
      })
      bouttonLogoPageCorrectifLaChouetteAgence.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetPageCorrectifLaChouetteAgence).display != "none") {
              divLienProjetPageCorrectifLaChouetteAgence.style.display = "none";
          } else {
              divLienProjetPageCorrectifLaChouetteAgence.style.display = "block";
              bouttonLogoPageCorrectifLaChouetteAgence.style.display = "none";
          }
      })
      bouttonLogoOrinoco.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetOrinoco).display != "none") {
              divLienProjetOrinoco.style.display = "none";
          } else {
              divLienProjetOrinoco.style.display = "block";
              bouttonLogoOrinoco.style.display = "none";
          }
      })
      bouttonLogoPiiquante.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetPiiquante).display != "none") {
              divLienProjetPiiquante.style.display = "none";
          } else {
              divLienProjetPiiquante.style.display = "block";
              bouttonLogoPiiquante.style.display = "none";
          }
      })
      bouttonLogoGroupomania.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetGroupomania).display != "none") {
              divLienProjetGroupomania.style.display = "none";
          } else {
              divLienProjetGroupomania.style.display = "block";
              bouttonLogoGroupomania.style.display = "none";
          }
      })
      bouttonLogoPeinture.addEventListener("click", () => {
          if (getComputedStyle(divLienProjetPeinture).display != "none") {
              divLienProjetPeinture.style.display = "none";
          } else {
              divLienProjetPeinture.style.display = "block";
              bouttonLogoPeinture.style.display = "none";
          }
      })
  }
  BouttonDynamiqueLogo()
      /* ----------------------------------------------Fin Function de tous les bouttons  Fin--------------------------------------------*/