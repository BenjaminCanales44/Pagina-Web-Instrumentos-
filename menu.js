const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})
openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
    abrirCarrito(); // Llama a la función para abrir el carrito
})
