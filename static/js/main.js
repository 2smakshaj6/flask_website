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

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a"); // Select all nav links

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            console.log("Hamburger menu clicked"); // Debugging
            navLinks.classList.toggle("active"); // Toggle menu visibility
        });

        // Close menu when clicking a link & enable smooth scrolling
        navItems.forEach(link => {
            link.addEventListener("click", (event) => {
                console.log("Menu link clicked", link.getAttribute("href")); // Debugging
                navLinks.classList.remove("active"); // Hide menu

                // Ensure smooth scrolling to section
                const targetId = link.getAttribute("href");
                if (targetId.startsWith("#")) {
                    event.preventDefault(); // Prevent default anchor jump
                    document.querySelector(targetId).scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });
    } else {
        console.error("Error: Menu Toggle or Nav Links not found in DOM.");
    }
});



