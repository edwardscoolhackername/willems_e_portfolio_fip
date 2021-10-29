

function menuClick() {
    const menu = document.querySelector(".burgerBox"),
          burger = document.querySelector(".burgerButton");

    menu.classList.toggle('expanded');
    burger.classList.toggle ('split');
}

export { menuClick };