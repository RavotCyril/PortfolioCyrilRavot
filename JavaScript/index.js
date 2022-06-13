/* Changement de l'image du background  et du Titre h1 à chaque appel de la fonction */

function changeBackgroundImage() {

	/* Permet d'avoir un font d'écran aléatoire à chaque visite de la page d'accueil */

  /*  Math.floor(Math.random())): permet d'obtenir un entier entre 0 et 1 et de le multiplié par le nombre de la variable imgCount = 3 
  puis de l'arrondir à la valeur la plus proche Exemple  2.5 = 3   1.1 =1 
	 */
	// // Crée une condition de média qui cible des fenêtres d'au moins 375  pixels et en dessous de largeur ( BreakPoint en JavaScript)
	const mediaQueryCondition = window.matchMedia( '(max-width:375px)' )

	var imgCount = 3;
   var randomCount = (Math.floor(Math.random() * imgCount));
   var images = ['Font/BackgroundDeveloppeurWeb.webp', 'Font/BackgroundFuturiste.jpg', 'Font/fondDegrade.webp'] ;
	var AccueilFontEcran = document.getElementById("AccueilFontEcran")
	var H1Principal = document.getElementById("H1Principal")
	var FontEcranAccueilTexte = document.getElementById("FontEcranAccueilTexte")
	var AccueilContactEmailGitHubLinkedin = document.getElementById("AccueilContactEmailGitHubLinkedin")  

	 if (randomCount === 2 ){
	AccueilFontEcran.style.cssText ="background-image: url(" + images[randomCount] + ");height:600px";
	FontEcranAccueilTexte.style.cssText ="color:black;position: block;";
	H1Principal.style.cssText ="color: black;";
	AccueilContactEmailGitHubLinkedin.style.cssText ="top: 50%";

	}else if(randomCount === 1){
	AccueilFontEcran.style.cssText ="background-image: url(" + images[randomCount] + ");height:988px;";
	}else if (randomCount === 0){
	AccueilFontEcran.style.cssText ="background-image: url(" + images[randomCount] + ");";
	FontEcranAccueilTexte.style.cssText ="left: 48%";	
	H1Principal.style.cssText ="background-image: url(" + images[randomCount] + ");color: black;";
	}
}
changeBackgroundImage();