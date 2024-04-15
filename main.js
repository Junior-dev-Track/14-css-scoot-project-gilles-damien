function openMenuMobile() {
    document.querySelector(".header__nav").classList.add("open");
    document.querySelector(".overlay-menu-mobile").classList.add("open");
    document.querySelector(".header__logo").classList.add("logo-open");
    document.querySelector(".header__burger").classList.add("hide");
}
function closeMenuMobile() {
    document.querySelector(".header__nav").classList.remove("open");
    document.querySelector(".overlay-menu-mobile").classList.remove("open");
    document.querySelector(".header__logo").classList.remove("logo-open");
    document.querySelector(".header__burger").classList.remove("hide");
}


let prevScrollPos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    const header = document.getElementById("header");

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        header.classList.remove("hidden");
    } else {
        // Scrolling down
        header.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
}
