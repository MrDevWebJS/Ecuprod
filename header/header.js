let burgerSvg = document.querySelector(".burgerSvg");
let closeSvg = document.querySelector(".closeSvg");
let navbar = document.querySelector(".header__nav");

burgerSvg.addEventListener("click", () => {
    burgerSvg.style.visibility = "hidden";
    closeSvg.style.visibility = "visible";
    navbar.classList.add("active");
});

closeSvg.addEventListener("click", () => {
    burgerSvg.style.visibility = "visible";
    closeSvg.style.visibility = "hidden";
    navbar.classList.remove("active");
});

navbar.addEventListener("click", () => {
    navbar.classList.remove("active");
    burgerSvg.style.visibility = "visible";
    closeSvg.style.visibility = "hidden";
});
