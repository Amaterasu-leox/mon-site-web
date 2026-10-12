const themeButton = document.getElementById("themeButton"); 
const clickButton = document.getElementById("clickButton"); 
const compteur = document.getElementById("compteur"); 
const message = document.getElementById("message"); 

let nombreClics = 0; 


// Changer le theme du site 
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Mode clair";
    } else {
        themeButton.textContent = "🌙 Changer le thème";
    }
});

// Compter les clics 
clickButton.addEventListener("click", function() {
    nombreClics++; 


    compteur.textContent = nombreClics; 


    message.textContent = "Bravo ! Tu as cliqué " + nombreClics + " fois !"; 
})