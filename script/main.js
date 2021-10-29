import { menuClick } from "./components/burgerbutton.js";

(() => {

    const burger = document.querySelector(".burgerButton");

    burger.addEventListener("click", menuClick);
})()