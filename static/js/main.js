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

// ================== Responsive Scaling ==================
window.addEventListener("resize", function () {
    document.documentElement.style.setProperty(
        "--viewport-height", `${window.innerHeight}px`
    );
});

// ================== Mobile Navbar Toggle ==================
// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.createElement("button");
//     toggleButton.innerHTML = "☰"; // Hamburger Icon
//     toggleButton.classList.add("nav-toggle");

//     // Insert toggle button inside navbar
//     const navbar = document.querySelector(".navbar");
//     navbar.appendChild(toggleButton);

//     // Toggle menu when clicked
//     toggleButton.addEventListener("click", function () {
//         document.querySelector(".nav-links").classList.toggle("active");
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Toggle menu on click
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link (for smooth navigation)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});