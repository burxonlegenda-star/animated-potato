// ===============================
// HTML MASTER
// app.js
// ===============================

// Dark / Light Mode
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");

    } else {

        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");

    }

});

// Theme saqlash
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");
    themeBtn.innerHTML = "☀️";

}

// ===============================
// Search
// ===============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ===============================
// Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card").forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});

// ===============================
// Card Counter
// ===============================

const totalCards = document.querySelectorAll(".card").length;

console.log("Jami HTML Teglar:", totalCards);

// ===============================
// Welcome
// ===============================

console.log("🚀 HTML MASTER yuklandi!");