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
            container.add("valid");
            container.textContent = message;

        } else if (invalid) {
            container.remove("valid");
            container.textContent = message;
        }
    };

    // Variable de toutes les fonctions Input -Span pour le formulaire : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let formContactTag = document.getElementById("Contact");
    let firstName = document.getElementById("firstName");
    let ClassErrorInputFirstNameTag = document.getElementById("ClassErrorInputFirstNameTag");
    let lastName = document.getElementById("lastName");
    let ClassErrorInputLastNameTag = document.getElementById("ClassErrorInputLastNameTag");
    let email = document.getElementById("email");
    let ClassErrorInputMailTag = document.getElementById("ClassErrorInputMailTag");
    let sujet = document.getElementById("sujet");
    let ClassErrorInputSujetTag = document.getElementById("ClassErrorInputSujetTag");
    let message = document.getElementById("message");
    let ClassErrorInputMessageTag = document.getElementById("ClassErrorInputMessageTag");

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
    // Variable Sujet: Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputSujetTagChecker = (value) => {
            if (value.length > 0 && (value.length < 3 || value.length > 30)) {
                errorTag("ClassErrorInputSujetTag", "Sujet non validé le sujet doit faire entre 3 et 30 caractères", false, true);
                sujet.style.outline = "1px solid red";
                sujet.style.border = "1px solid red";
                ClassErrorInputSujetTag.style.color = "red";
            } else if (value.length === 0) {
                errorTag("ClassErrorInputSujetTag", "Sujet non validé le sujet doit faire entre 3 et 30 caractères", false, true);
                sujet.style.outline = "1px solid red";
                sujet.style.border = "1px solid red";
                ClassErrorInputSujetTag.style.color = "red";
            } else {
                validTag("ClassErrorInputSujetTag", "Sujet validé", true, false);
                sujet.style.outline = "1px solid green";
                sujet.style.border = "1px solid green";
                ClassErrorInputSujetTag.style.color = "green";

            }
        }
        // Variable Message : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputMessageTagChecker = (value) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorTag("ClassErrorInputMessageTag", "Commentaire non validé le commentaire doit faire entre 3 et 20 caractères", false, true);
            message.style.outline = "1px solid red";
            message.style.border = "1px solid red";
            ClassErrorInputMessageTag.style.color = "red";
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorTag("ClassErrorInputCityTag", "Le commentaire ne doit pas contenir de caractères spéciaux", false, true);
            message.style.outline = "1px solid red";
            message.style.border = "1px solid red";
            ClassErrorInputMessageTag.style.color = "red";
        } else if (value.length === 0) {
            errorTag("ClassErrorInputCityTag", "Commentaire non validé le commentaire doit faire entre 3 et 20 caractères", false, true);
            message.style.outline = "1px solid red";
            message.style.border = "1px solid red";
            ClassErrorInputMessageTag.style.color = "red";
        } else {
            validTag("ClassErrorInputCityTag", "Commentaire validé", true, false);
            message.style.outline = "1px solid green";
            message.style.border = "1px solid green";
            ClassErrorInputMessageTag.style.color = "green";
        }
    }

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
                case "email":
                    inputEmailTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "sujet":
                    inputSujetTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "message":
                    inputMessageTagChecker(e.target.value);
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
        let firstName, lastName, email, sujet, message;
        carts.forEach((input) => {
            switch (input.name) {

                case "firstName":
                    firstName = input.value;
                    break;
                case "lastName":
                    lastName = input.value;
                    break;
                case "email":
                    email = input.value;
                    break;
                case "sujet":
                    sujet = input.value
                    break;
                case "message":
                    message = input.value;
                    break;
                default:
                    nul;
            }

        })
        console.log("firstName :" + firstName, "lastName : " + lastName, "email : " + email, "sujet :" + sujet, "message : " + message);
        if (firstName && lastName && email && sujet && message) {
            const cart = {
                firstName,
                lastName,
                email,
                sujet,
                message,
            };
            console.log(cart);

            inputs.forEach((input) => (input.value = ""));
            firstName = null;
            lastName = null;
            email = null;
            sujet = null;
            message = null;
            alert("Inscription validée !");
        } else {
            alert("veuillez remplir correctement les champs");
        }
    });
    formulaire();
}

/* ---------------------- Function Formulaire page Contact-------------------------------------*/