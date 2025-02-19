// =============== SMOOTH SCROLL FOR NAVIGATION =================
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed navbar
                behavior: "smooth"
            });
        }
    });
});


// =============== PAGE LOAD ANIMATION =================
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

// =============== BUTTON ALERT FUNCTION =================
function showMessage() {
    alert("Hello! JavaScript and Flask are working together!");
}
