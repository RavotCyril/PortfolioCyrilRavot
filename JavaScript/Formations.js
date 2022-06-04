/* Carrousel Formation */
 /* ---------------------- Function Navigation Certification - Formation Page Formations-------------------------------------*/

function NavigationFormation() {
    let CertificationPDF = document.getElementById("CertificationPDF");

    if (CertificationPDF.className === "CacheIllustrationFormations") {
        CertificationPDF.classList.remove("CacheIllustrationFormations");
        CertificationPDF.className += "carousel slide carousel-fade";
    } else {
        CertificationPDF.className = "CacheIllustrationFormations";
    }
}
NavigationFormation()
