import "./style.sass";
import "normalize.css";

const app = document.querySelector("#app");
const header = document.createElement("header");
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu__container");
const menuButton = document.createElement("button");
menuButton.innerHTML = `
  <img src="./assets/icon-menu.svg" alt="menu"/>
`;
const title = document.createElement("h1");
title.textContent = "sneakers";
const cartContainer = document.createElement("div");
cartContainer.classList.add("cart__container");
const cartButton = document.createElement("button");
cartButton.innerHTML = `
  <img src="./assets/icon-cart.svg" alt="cart"/>
`;
const profile = document.createElement("button");
profile.innerHTML = `
  <img src="./assets/image-avatar.png" alt="profile-avatar"/>
`;

menuContainer.append(menuButton, title);
cartContainer.append(cartButton, profile);
header.append(menuContainer, cartContainer);
app.appendChild(header);
