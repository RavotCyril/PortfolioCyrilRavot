/* Changement de l'image du background  et du Titre h1 à chaque appel de la fonction */
/* Permet d'avoir un font d'écran aléatoire à chaque visite de la page d'accueil */
/*  window.onresize = resize;  Permet de relire une fonction si la dimension de la fenêtre change */
/*  Math.floor(Math.random())): permet d'obtenir un entier entre 0 et 1 et de le multiplié par le nombre de la variable imgCount = 3
puis de l'arrondir à la valeur la plus proche Exemple  2.5 = 3   1.1 =1
    */
// // Crée une condition de média qui cible des fenêtres d'au moins 375  pixels et en dessous de largeur ( BreakPoint en JavaScript)

function changeBackgroundImage() {

     const mediaQuery1281_2000 = window.matchMedia("(min-width:1281px) and (max-width:2000px)");
     const mediaQuery1090_1280 = window.matchMedia("(min-width:1090px) and (max-width:1280px)");
     const mediaQuery769_1089 = window.matchMedia("(min-width:769px) and (max-width:1089px)");
     const mediaQuery376_768 = window.matchMedia("(min-width:376px) and (max-width:768px)");
     const mediaQuery375 = window.matchMedia("(max-width:375px)");

     let imgCount = 3;
     let randomCount = Math.floor(Math.random() * imgCount);
     let images = ["Font/BackgroundDeveloppeurWeb.webp", "Font/BackgroundFuturiste.webp", "Font/fondDegrade.webp"];
     let AccueilFontEcran = document.getElementById("AccueilFontEcran");
     let H1Principal = document.getElementById("H1Principal");
     let FontEcranAccueilTexte = document.getElementById("FontEcranAccueilTexte");
     let AccueilContactEmailGitHubLinkedin = document.getElementById("AccueilContactEmailGitHubLinkedin");

     function taillewidth() {
          // var width = window.screen.width;
          // localStorage.setItem("width", JSON.stringify(width));
          // var tailleLargeurFenetre = JSON.parse(localStorage.getItem("width"));

          if (randomCount === 2) {
               AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ")";
               FontEcranAccueilTexte.style.cssText = "color:black;position: block;";
               H1Principal.style.cssText = "color: black;background:none;margin:0px;";
          } else if (randomCount === 1) {
               AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ")";
               H1Principal.style.cssText = "color: black;background:none;margin:0px;";
          } else if (randomCount === 0 && mediaQuery1281_2000.matches === true) {
               AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:889px;color: black;"
               FontEcranAccueilTexte.style.cssText = "color: black;";
               H1Principal.style.cssText = "background-image: url(" + images[randomCount] + ");color: black;background:none;margin:0px;";
               AccueilContactEmailGitHubLinkedin.style.cssText = "width: 340px;font-size:2rem;";
          } else if (randomCount === 0 && mediaQuery1090_1280.matches === true) {
               AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:720px;color: black;"
               FontEcranAccueilTexte.style.cssText = "color: black;margin:100px 55px 0px 0px";
               AccueilContactEmailGitHubLinkedin.style.cssText = "width: 340px;font-size:2rem;";
          } else if (randomCount === 0 && mediaQuery769_1089.matches === true) {
               AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:613px;color: black;"
               FontEcranAccueilTexte.style.cssText = "color: black;margin:55px 55px 0px 0px";
               AccueilContactEmailGitHubLinkedin.style.cssText = "width: 265px;font-size:2rem";
          } else if (randomCount === 0 && mediaQuery376_768.matches === true) {
               AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:432px;color: black;"
               FontEcranAccueilTexte.style.cssText = "color: black;width:100%;padding:15px 35px 0px 0px;margin:0px";
               AccueilContactEmailGitHubLinkedin.style.cssText = "width: 265px;font-size:2rem;padding: 50px 0px;";
          } else if (randomCount === 0 && mediaQuery375.matches === true) {
               AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:211px;";
               FontEcranAccueilTexte.style.cssText = "width:150px;color: black;width:150px;padding:15px 0px 0px 0px;margin:0px auto";
               H1Principal.style.cssText = "background-image: url(" + images[randomCount] + ");color: black;background:none;margin:0px;";
               AccueilContactEmailGitHubLinkedin.style.cssText = "padding:0px;width:150px;margin-bottom:35px;margin-left:auto;margin-right:auto;";
          }
     }
     taillewidth()
     window.onresize = taillewidth;
}
changeBackgroundImage();