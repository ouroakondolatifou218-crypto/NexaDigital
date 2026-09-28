// ================================
// NexaDigital
// Script principal
// ================================


// Animation simple lors du chargement
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".service-card, .process-card"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 100 + index * 80);

    });

});


// Message WhatsApp personnalisé
function contacterWhatsApp(service = "") {

    let message =
        "Bonjour NexaDigital, ";

    if (service !== "") {

        message +=
            "je suis intéressé par le service : "
            + service
            + ". ";

    }

    message +=
        "Je souhaiterais obtenir plus d'informations.";

    const url =
        "https://wa.me/22897655135?text="
        + encodeURIComponent(message);

    window.open(url, "_blank");
}