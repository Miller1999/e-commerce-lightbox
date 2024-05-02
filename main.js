import "./style.sass";
import "normalize.css";

const app = document.querySelector("#app");
// header
const header = document.createElement("header");
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu__container");
const menuButton = document.createElement("button");
menuButton.classList.add("menu__button");
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

const mainContainer = document.createElement("main");
const article = document.createElement("article");
const carrouselContainer = document.createElement("div");
carrouselContainer.classList.add("carrousel__container");
const carrouselImg = document.createElement("img");
carrouselImg.src = "./assets/image-product-1.jpg";
const leftButtonCarrousel = document.createElement("button");
leftButtonCarrousel.innerHTML = `
  <img src="./assets/icon-previous.svg" alt="previous button"/>
`;
leftButtonCarrousel.classList.add("previous-button__carrousel");
const rightButtonCarrousel = document.createElement("button");
rightButtonCarrousel.innerHTML = `
  <img src="./assets/icon-next.svg" alt="next button"/>
`;
rightButtonCarrousel.classList.add("next-button__carrousel");
const infoContainer = document.createElement("div");
infoContainer.classList.add("info__container");
const company = document.createElement("span");
company.textContent = "SNEAKER COMPANY";
company.classList.add("company__info");
const name = document.createElement("h2");
name.textContent = "Fall Limited Edition Sneakers";
name.classList.add("name__info");
const description = document.createElement("p");
description.textContent =
	"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.";
description.classList.add("description__info");
const pricesContainer = document.createElement("div");
pricesContainer.classList.add("prices__container");
const discountContainer = document.createElement("div");
discountContainer.classList.add("discount__container");
const discountPrice = document.createElement("span");
discountPrice.textContent = "$125.00";
discountPrice.classList.add("discount__price");
const discount = document.createElement("span");
discount.textContent = "50%";
discount.classList.add("discount__percentage");
const normalPrice = document.createElement("span");
normalPrice.textContent = "$250.00";
normalPrice.classList.add("normal__price");
const quantityContainer = document.createElement("div");
quantityContainer.classList.add("quantity__container");
const leftButtonQuantity = document.createElement("button");
leftButtonQuantity.innerHTML = `
  <img src="./assets/icon-minus.svg" alt="minus button"/>
`;
const amount = document.createElement("span");
amount.textContent = 0;
const rightButtonQuantity = document.createElement("button");
rightButtonQuantity.innerHTML = `
  <img src="./assets/icon-plus.svg" alt="more button"/>
`;
const addCartButton = document.createElement("button");
addCartButton.innerHTML = `
  <img src="./assets/icon-cart.svg" alt="button cart"/>
  <p>Add to cart</p>
`;
addCartButton.classList.add("addCart__button");

carrouselContainer.append(
	leftButtonCarrousel,
	carrouselImg,
	rightButtonCarrousel
);
discountContainer.append(discountPrice, discount);
pricesContainer.append(discountContainer, normalPrice);
quantityContainer.append(leftButtonQuantity, amount, rightButtonQuantity);
infoContainer.append(
	company,
	name,
	description,
	pricesContainer,
	quantityContainer,
	addCartButton
);

article.append(carrouselContainer, infoContainer);
mainContainer.append(article);

menuContainer.append(menuButton, title);
cartContainer.append(cartButton, profile);
header.append(menuContainer, cartContainer);
app.append(header, mainContainer);
