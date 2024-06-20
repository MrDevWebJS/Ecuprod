let burgerSvg = document.querySelector(".burgerSvg");
let closeSvg = document.querySelector(".closeSvg");
let navbar = document.querySelector(".header__nav");

burgerSvg.addEventListener("click", () => {
    burgerSvg.style.visibility = "hidden";
    closeSvg.style.visibility = "visible";
    navbar.style.right = "0px";
});

closeSvg.addEventListener("click", () => {
    burgerSvg.style.visibility = "visible";
    closeSvg.style.visibility = "hidden";
    navbar.style.right = "-150px";
});
