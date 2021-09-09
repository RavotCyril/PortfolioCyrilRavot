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


/* Function de tous les bouttons pour utliser le display none - Block quand on clique sur les images dans les boutons. */

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
bouttonLogoGroupomania.addEventListener("click", () => {
    if (getComputedStyle(divLienProjetSoPeckocko).display != "none") {
        divLienProjetSoPeckocko.style.display = "none";
    } else {
        divLienProjetSoPeckocko.style.display = "block";
        bouttonLogoGroupomania.style.display = "none";
    }
})
bouttonLogoSoPekocko.addEventListener("click", () => {
    if (getComputedStyle(divLienProjetGroupomania).display != "none") {
        divLienProjetGroupomania.style.display = "none";
    } else {
        divLienProjetGroupomania.style.display = "block";
        bouttonLogoSoPekocko.style.display = "none";
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
    /* ----------------------------------------------Fin Function de tous les bouttons  Fin--------------------------------------------*/
    /* -------------------Function Navigation bouton mobile  Début----------------------------------*/

function myFunction() {
    let divNav = document.getElementById("myTopnav");
    if (divNav.className === "Navigation-Mobile") {
        divNav.className += " responsive";
    } else {
        divNav.className = "Navigation-Mobile";
    }
}
/* ---------------------- Function Navigation bouton mobile Fin-------------------------------------*/

/* ---------------------- Function Formulaire page Contact.-------------------------------------*/

function formulaire() {

    // Variable errorTag -> Fonction du code d'erreur avec message en cas de mauvais caractères dans les inputs.

    let errorTag = (tag, message, valid, invalid) => {
        const container = document.querySelector("." + tag);

        if (invalid) {
            container.classList.add("invalid");
            container.textContent = message;
        } else if (valid) {
            container.classList.remove("invalid");
            container.textContent = message;
        }
    };
    // Variable validTag -> Fonction du code de validation avec message en cas de données exactes.

    let validTag = (tag, message, valid, invalid) => {
        const container = document.querySelector("." + tag);

        if (valid) {
            container.classList.add("valid");
            container.textContent = message;

        } else if (invalid) {
            container.classList.remove("valid");
            container.textContent = message;
        }
    };

    // Variable de toutes les fonctions Input -Span pour le formulaire : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let formContactTag = document.getElementById("Contact");
    let firstName = document.getElementById("firstName");
    let ClassErrorInputFirstNameTag = document.getElementById("ClassErrorInputFirstNameTag");
    let lastName = document.getElementById("lastName");
    let ClassErrorInputLastNameTag = document.getElementById("ClassErrorInputLastNameTag");
    let adresse = document.getElementById("adresse");
    let ClassErrorInputAdresseTag = document.getElementById("ClassErrorInputAdresseTag");
    let city = document.getElementById("city");
    let ClassErrorInputCityTag = document.getElementById("ClassErrorInputCityTag");
    let email = document.getElementById("email");
    let ClassErrorInputMailTag = document.getElementById("ClassErrorInputMailTag");

    // Variable inputFirstName (Prénom) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputFirstNameTagChecker = (value) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorTag("ClassErrorInputFirstNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères", false, true);
            firstName.style.outline = "1px solid red";
            firstName.style.border = "1px solid red";
            ClassErrorInputFirstNameTag.style.color = "red";
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorTag("ClassErrorInputFirstNameTag", "Le prénom ne doit pas contenir de caractères spéciaux", false, true);
            firstName.style.outline = "1px solid red";
            firstName.style.border = "1px solid red";
            ClassErrorInputFirstNameTag.style.color = "red";
        } else if ((value.length === 0)) {
            errorTag("ClassErrorInputFirstNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères", false, true);
            firstName.style.outline = "1px solid red";
            firstName.style.border = "1px solid red";
            ClassErrorInputFirstNameTag.style.color = "red";
        } else {
            validTag("ClassErrorInputFirstNameTag", "Prénom validé", true, false);
            firstName.style.outline = "1px solid green";
            firstName.style.border = "1px solid green";
            ClassErrorInputFirstNameTag.style.color = "green";
        }
    };
    // Variable inputLastName (Nom) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputLastNameTagChecker = (value) => {
            if (value.length > 0 && (value.length < 3 || value.length > 20)) {
                errorTag("ClassErrorInputLastNameTag", "Nom non validé le nom doit faire entre 3 et 20 caractères", false, true);
                lastName.style.outline = "1px solid red";
                lastName.style.border = "1px solid red";
                ClassErrorInputLastNameTag.style.color = "red";
            } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
                errorTag("ClassErrorInputLastNameTag", "Le nom ne doit pas contenir de caractères spéciaux", false, true);
                lastName.style.outline = "1px solid red";
                lastName.style.border = "1px solid red";
                ClassErrorInputLastNameTag.style.color = "red";
            } else if (value.length === 0) {
                errorTag("ClassErrorInputLastNameTag", "Nom non validé le nom doit faire entre 3 et 20 caractères", false, true);
                lastName.style.outline = "1px solid red";
                lastName.style.border = "1px solid red";
                ClassErrorInputLastNameTag.style.color = "red";
            } else {
                validTag("ClassErrorInputLastNameTag", "Nom validé", true, false);
                lastName.style.outline = "1px solid green";
                lastName.style.border = "1px solid green";
                ClassErrorInputLastNameTag.style.color = "green";
            }
        }
        // Variable adresse: Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputAdresseTagChecker = (value) => {
            if (value.length > 0 && (value.length < 5 || value.length > 30)) {
                errorTag("ClassErrorInputAdresseTag", "Adresse non validé l'adresse doit faire entre 5 et 30 caractères", false, true);
                adresse.style.outline = "1px solid red";
                adresse.style.border = "1px solid red";
                ClassErrorInputAdresseTag.style.color = "red";
            } else if (value.length === 0) {
                errorTag("ClassErrorInputAdresseTag", "Adresse non validé l'adresse doit faire entre 5 et 30 caractères", false, true);
                adresse.style.outline = "1px solid red";
                adresse.style.border = "1px solid red";
                ClassErrorInputAdresseTag.style.color = "red";
            } else {
                validTag("ClassErrorInputAdresseTag", "Adresse validé", true, false);
                adresse.style.outline = "1px solid green";
                adresse.style.border = "1px solid green";
                ClassErrorInputAdresseTag.style.color = "green";

            }
        }
        // Variable inputCityTagChecker (ville) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputCityTagChecker = (value) => {
            if (value.length > 0 && (value.length < 3 || value.length > 20)) {
                errorTag("ClassErrorInputCityTag", "Ville non validé la ville doit faire entre 3 et 20 caractères", false, true);
                city.style.outline = "1px solid red";
                city.style.border = "1px solid red";
                ClassErrorInputCityTag.style.color = "red";
            } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
                errorTag("ClassErrorInputCityTag", "La ville ne doit pas contenir de caractères spéciaux", false, true);
                city.style.outline = "1px solid red";
                city.style.border = "1px solid red";
                ClassErrorInputCityTag.style.color = "red";
            } else if (value.length === 0) {
                errorTag("ClassErrorInputCityTag", "Ville non validé la ville doit faire entre 3 et 20 caractères", false, true);
                city.style.outline = "1px solid red";
                city.style.border = "1px solid red";
                ClassErrorInputCityTag.style.color = "red";
            } else {
                validTag("ClassErrorInputCityTag", "Ville validé", true, false);
                city.style.outline = "1px solid green";
                city.style.border = "1px solid green";
                ClassErrorInputCityTag.style.color = "green";
            }
        }
        // Variable inputEmailTagChecker(Email) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputEmailTagChecker = (value) => {
        if (!value.match(/[a-z]+@[\w-]+\.[a-z]{2,4}$/i)) {
            errorTag("ClassErrorInputMailTag", "Le mail n'est pas validé il manque l'un des caractères indispensable suivant: @ ou .fr ou le .com", false, true);
            email.style.outline = "1px solid red";
            email.style.border = "1px solid red";
            ClassErrorInputMailTag.style.color = "red";
        } else {
            validTag("ClassErrorInputMailTag", "Email validé", true, false);
            email.style.outline = "1px solid green";
            email.style.border = "1px solid green";
            ClassErrorInputMailTag.style.color = "green";
        }
    };

    /* Avec la method ForEach sur linput du bouton validation Commande.
    Fonction qui contrôle si tout les inputs (champs) du formulaire ont bien été validés partout  avec la selection des ID des Inputs.
    Pour ensuite pouvoir cliquer sur le bouton validation Commande et envoyer le formulaire.*/
    // Constante inputs : Récupération - Sélection de tous les inputs de la page.

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
    console.log(inputs);

    inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            switch (e.target.id) {

                case "firstName":
                    inputFirstNameTagChecker(e.target.value);
                    break;
                case "lastName":
                    inputLastNameTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "adresse":
                    inputAdresseTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "city":
                    inputCityTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "email":
                    inputEmailTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                default:
                    nul;

            }
        });
    });

    // Avec AddEventListener. On regarde une fois que l'on envoie la demande du formulaire.
    //  Si toutes les données sont validés dans les ID de chaque inputs
    // On a ensuite un message de validation si les données sont bonnes.
    //  Ou un message d'erreur si ce n'est pas le cas.

    formContactTag.addEventListener("submit", (e) => {
        e.preventDefault();
        let carts = document.querySelectorAll('input[type="text"], input[type="email"]');
        let firstName, lastName, adresse, city, email;
        carts.forEach((input) => {
            switch (input.name) {

                case "firstName":
                    firstName = input.value;
                    break;
                case "lastName":
                    lastName = input.value;
                    break;
                case "adresse":
                    adresse = input.value
                    break;
                case "city":
                    city = input.value;
                    break;
                case "email":
                    email = input.value;
                    break;
                default:
                    nul;
            }

        })
        console.log("firstName :" + firstName, "lastName : " + lastName, "adresse : " + adresse, "city :" + city, "email : " + email);
        if (firstName && lastName && adresse && ville && email) {
            const cart = {
                firstName,
                lastName,
                adresse,
                city,
                email,
            };
            console.log(cart);

            inputs.forEach((input) => (input.value = ""));
            firstName = null;
            lastName = null;
            adresse = null;
            city = null;
            email = null;
            alert("Inscription validée !");
        } else {
            alert("veuillez remplir correctement les champs");
        }
    });
    formulaire();
}

/* ---------------------- Function Formulaire page Contact-------------------------------------*/