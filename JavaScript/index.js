/* Changement de l'image du background  et du Titre h1 à chaque appel de la fonction */

function changeBackgroundImage() {

	/* Permet d'avoir un font d'écran aléatoire à chaque visite de la page d'accueil */

  /*  Math.floor(Math.random())): permet d'obtenir un entier entre 0 et 1 et de le multiplié par le nombre de la variable imgCount = 3 
  puis de l'arrondir à la valeur la plus proche Exemple  2.5 = 3   1.1 =1 
	 */
	var imgCount = 3;
   var randomCount = (Math.floor(Math.random() * imgCount));
   var images = ['../Font/wallhaven-rd1vvq.jpg', '../Font/fond-ecran-gratuit-pour-ordinateur-3d-14.jpg', '../Font/fonds-ecran-coucher-de-soleil-13.jpg'] ;
	var AccueilFontEcran = document.getElementById("AccueilFontEcran")
	var H1Principal = document.getElementById("H1Principal")
	var FontEcranAccueilTexte = document.getElementById("FontEcranAccueilTexte")
	// var H1Principal = document.getElementById("H1Principal")
	 if (randomCount === 2){
	AccueilFontEcran.style.cssText ="background-image: url(" + images[randomCount] + ");height: 988px";
	H1Principal.style.cssText ="color: white";
	FontEcranAccueilTexte.style.cssText ="color: white";
	}else if(randomCount === 1){
	AccueilFontEcran.style.cssText ="background-image: url(" + images[randomCount] + ");height: 988px";
	}
}
changeBackgroundImage();
