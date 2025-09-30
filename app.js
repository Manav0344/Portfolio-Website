const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

document.querySelectorAll(".navlist a").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});

function initAOS() {
    const isSmallScreen = window.innerWidth <= 768;

    if (isSmallScreen) {
        document.querySelectorAll('[data-aos="fade-left"], [data-aos="fade-right"]').forEach(el => {
            el.setAttribute('data-aos', 'fade-up'); // safer for mobile
            el.removeAttribute('data-aos-delay');   // optional: remove delay
        });
    }

    AOS.init({
        duration: 1000,
        once: false,
        offset: isSmallScreen ? 50 : 100,
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initAOS();
});

// Refresh AOS
window.addEventListener('load', () => {
    AOS.refresh();
});
window.addEventListener('resize', () => {
    initAOS();
    AOS.refreshHard();
});


//    🌗 Dark / Light Theme Toggle

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;


if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "🌙";
} else {
    toggleBtn.textContent = "☀️";
}


toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    }
});
