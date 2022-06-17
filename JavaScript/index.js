/* Changement de l'image du background  et du Titre h1 à chaque appel de la fonction */
/* Permet d'avoir un font d'écran aléatoire à chaque visite de la page d'accueil */
/*  window.onresize = resize;  Permet de relire une fonction si la dimension de la fenêtre change */
/*  Math.floor(Math.random())): permet d'obtenir un entier entre 0 et 1 et de le multiplié par le nombre de la variable imgCount = 3
puis de l'arrondir à la valeur la plus proche Exemple  2.5 = 3   1.1 =1
    */
// // Crée une condition de média qui cible des fenêtres d'au moins 375  pixels et en dessous de largeur ( BreakPoint en JavaScript)

function changeBackgroundImage() {

     const mediaQuery375 = window.matchMedia("(max-width:375px)");
     const mediaQuery376_2000 = window.matchMedia("(min-width:376px) and (max-width:2000px)");


     // var width = window.innerWidth;
     // function reportWindowSize() {
     //      return width;
     // }
     // window.onresize = reportWindowSize;
     // console.log(width)
     window.onresize = width();
     function width() {
          var width = window.innerWidth;
          return width;
     }
     var width = width();
     console.log(width)

     let imgCount = 3;
     let randomCount = Math.floor(Math.random() * imgCount);
     let images = ["Font/BackgroundDeveloppeurWeb.webp", "Font/BackgroundFuturiste.jpg", "Font/fondDegrade.webp"];
     let AccueilFontEcran = document.getElementById("AccueilFontEcran");
     let H1Principal = document.getElementById("H1Principal");
     let FontEcranAccueilTexte = document.getElementById("FontEcranAccueilTexte");
     let AccueilContactEmailGitHubLinkedin = document.getElementById("AccueilContactEmailGitHubLinkedin");

     if (randomCount === 2) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:600px";
          FontEcranAccueilTexte.style.cssText = "color:black;position: block;";
          H1Principal.style.cssText = "color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "top:62%";
     } else if (randomCount === 1) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");height:988px;";
          H1Principal.style.cssText = "color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "top: 38%";
     } else if (randomCount === 0 && mediaQuery376_2000.matches === true && width >= 375) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");";
          FontEcranAccueilTexte.style.cssText = "left:47%";
          H1Principal.style.cssText = "background-image: url(" + images[randomCount] + ");color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "top: 50%";
     } else if (randomCount === 0 && mediaQuery375.matches === true && width <= 375) {
          AccueilFontEcran.style.cssText = "background-image: url(" + images[randomCount] + ");";
          H1Principal.style.cssText = "background-image: url(" + images[randomCount] + ");color: black;background:none;margin:0px;";
          AccueilContactEmailGitHubLinkedin.style.cssText = "top: 62%";
     }
}
changeBackgroundImage()