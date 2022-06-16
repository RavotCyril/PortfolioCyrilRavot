/* Changement de l'image du background  et du Titre h1 à chaque appel de la fonction */

function changeBackgroundImage() {
     /* Permet d'avoir un font d'écran aléatoire à chaque visite de la page d'accueil */

     /*  Math.floor(Math.random())): permet d'obtenir un entier entre 0 et 1 et de le multiplié par le nombre de la variable imgCount = 3 
     puis de l'arrondir à la valeur la plus proche Exemple  2.5 = 3   1.1 =1 
         */
     // // Crée une condition de média qui cible des fenêtres d'au moins 375  pixels et en dessous de largeur ( BreakPoint en JavaScript)
     const mediaQuery375 = window.matchMedia("(max-width:375px)");
     const mediaQuery769_2000 = window.matchMedia("(min-width:769px) and (max-width:2000px)");
     console.log(mediaQuery769_2000)
     console.log(mediaQuery769_2000.matches === true)
     var imgCount = 3;
     var randomCount = Math.floor(Math.random() * imgCount);
     var images = ["Font/BackgroundDeveloppeurWeb.webp", "Font/BackgroundFuturiste.jpg", "Font/fondDegrade.webp"];
     var AccueilFontEcran = document.getElementById("AccueilFontEcran");
     var H1Principal = document.getElementById("H1Principal");
     var FontEcranAccueilTexte = document.getElementById("FontEcranAccueilTexte");
     var AccueilContactEmailGitHubLinkedin = document.getElementById("AccueilContactEmailGitHubLinkedin");

     if (randomCount === 2) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:600px";
          FontEcranAccueilTexte.style.cssText = "color:black;position: block;";
          H1Principal.style.cssText = "color: black;background:none;margin:0px;";
     } else if (randomCount === 1 && mediaQuery769_2000.matches === true) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:988px;";
          H1Principal.style.cssText = "color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "top: 38%";
     } else if (randomCount === 1 && mediaQuery769_2000.matches === false) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:988px;";
          H1Principal.style.cssText = "color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "top: 30%";
     }
     else if (randomCount === 0 && mediaQuery375.matches === false) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");";
          FontEcranAccueilTexte.style.cssText = "color:black;position: block;left: 47%;margin:100px 0px 0px 0px";
          H1Principal.style.cssText = "background-image: url(" + images[randomCount] + ");color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "margin:-24px 0px 0px -132px;width: 265px;top: 50%;left: 50%;";
     } else if (randomCount === 0 && mediaQuery375.matches === true) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");";
          H1Principal.style.cssText = "background-image: url(" + images[randomCount] + ");color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "margin:-20px 0px 0px -55px;width: 110px;top: 62%;left: 54%;";
     }
}
changeBackgroundImage();
