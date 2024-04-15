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