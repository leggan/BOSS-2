const button = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

const links = document.querySelectorAll(".mobile-link");

button.addEventListener("click", () => {
    menu.classList.toggle("translate-x-full");

    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    document.body.classList.toggle("overflow-hidden");
});

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.add("hidden");

        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");

    });

});