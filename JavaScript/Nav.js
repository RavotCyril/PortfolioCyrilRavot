/* -------------------Function Navigation bouton mobile  Début----------------------------------*/

function NavigationMobile() {
   let divNav = document.getElementById("myTopnav");
   if (divNav.className === "Navigation-Mobile") {
      divNav.className += " responsive";
   } else {
      divNav.className = "Navigation-Mobile";
   }
}
NavigationMobile()

/* ---------------------- Function Navigation bouton mobile Fin-------------------------------------*/