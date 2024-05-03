import "normalize.css";
import "./style.sass";

const app = document.querySelector("#app");
// header
const header = document.createElement("header");
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu__container");
const menuButton = document.createElement("button");
menuButton.classList.add("menu__button");
menuButton.id = "menu";
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
// menu mobile
const menu = document.createElement("aside");
menu.classList.add("hidden");
const closeButton = document.createElement("button");
closeButton.id = "close";
closeButton.innerHTML = `
  <img src="./assets/icon-close.svg" alt="close menu"/>
`;
const categories = document.createElement("ul");
categories.innerHTML = `
  <li>Collections</li>
  <li>Men</li>
  <li>Women</li>
  <li>About</li>
  <li>Contact</li>
`;
menu.append(closeButton, categories);

// main article
const mainContainer = document.createElement("main");
const article = document.createElement("article");
const carrouselContainer = document.createElement("div");
carrouselContainer.classList.add("carrousel__container");
const carrousel = document.createElement("div");
carrousel.classList.add("carrousel__images");
const carrouselImg1 = document.createElement("img");
const carrouselImg2 = document.createElement("img");
const carrouselImg3 = document.createElement("img");
const carrouselImg4 = document.createElement("img");
carrouselImg1.src = "./assets/image-product-1.jpg";
carrouselImg2.src = "./assets/image-product-2.jpg";
carrouselImg3.src = "./assets/image-product-3.jpg";
carrouselImg4.src = "./assets/image-product-4.jpg";
carrouselImg2.classList.add("hidden__image");
carrouselImg3.classList.add("hidden__image");
carrouselImg4.classList.add("hidden__image");
const leftButtonCarrousel = document.createElement("button");
leftButtonCarrousel.id = "previous";
leftButtonCarrousel.innerHTML = `
  <img src="./assets/icon-previous.svg" alt="previous button"/>
`;
leftButtonCarrousel.classList.add("previous-button__carrousel");
const rightButtonCarrousel = document.createElement("button");
rightButtonCarrousel.id = "next";
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
leftButtonQuantity.id = "minus";
leftButtonQuantity.disabled = "true";
leftButtonQuantity.innerHTML = `
  <img src="./assets/icon-minus.svg" alt="minus button"/>
`;
const amount = document.createElement("span");
amount.textContent = 0;
const rightButtonQuantity = document.createElement("button");
rightButtonQuantity.id = "plus";
rightButtonQuantity.innerHTML = `
  <img src="./assets/icon-plus.svg" alt="more button"/>
`;
const addCartButton = document.createElement("button");
addCartButton.id = "buy";
addCartButton.innerHTML = `
  <img src="./assets/icon-cart.svg" alt="button cart"/>
  <p>Add to cart</p>
`;
addCartButton.classList.add("addCart__button");
addCartButton.disabled = true;

carrousel.append(carrouselImg1, carrouselImg2, carrouselImg3, carrouselImg4);
carrouselContainer.append(leftButtonCarrousel, rightButtonCarrousel, carrousel);
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
app.append(header, menu, mainContainer);

//functions
const close = document.querySelector("#close");
const hamburguer = document.querySelector("#menu");
const carrouselImages = Array.from(
	document.querySelectorAll(".carrousel__images img")
);
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

const buy = document.querySelector("#buy");

let carrouselCount = 0;
let amountCount = 0;

next.addEventListener("click", () => {
	carrouselCount++;
	if (carrouselCount >= carrouselImages.length) {
		carrouselCount = 0;
	}
	carrouselImages[carrouselCount].classList.toggle("hidden__image");
	if (carrouselImages[carrouselCount - 1] == undefined) {
		carrouselImages[carrouselImages.length - 1].classList.toggle(
			"hidden__image"
		);
	} else if (
		!carrouselImages[carrouselCount - 1].classList.contains("hidden__image")
	) {
		carrouselImages[carrouselCount - 1].classList.toggle("hidden__image");
	}
});
previous.addEventListener("click", () => {
	carrouselCount--;
	if (carrouselCount < 0) {
		carrouselCount = carrouselImages.length - 1;
	}
	carrouselImages[carrouselCount].classList.toggle("hidden__image");
	if (carrouselImages[carrouselCount + 1] == undefined) {
		carrouselImages[0].classList.toggle("hidden__image");
	} else if (
		!carrouselImages[carrouselCount + 1].classList.contains("hidden__image")
	) {
		carrouselImages[carrouselCount + 1].classList.toggle("hidden__image");
	}
});

close.addEventListener("click", () => {
	menu.classList.add("hidden");
});
hamburguer.addEventListener("click", () => {
	menu.classList.remove("hidden");
});

minus.addEventListener("click", () => {
	amountCount--;
	if (amountCount !== 0) {
		minus.removeAttribute("disabled");
		buy.removeAttribute("disabled");
	} else if (amountCount <= 0) {
		minus.setAttribute("disabled", "true");
		buy.setAttribute("disabled", "true");
	}
	amount.textContent = amountCount;
});
plus.addEventListener("click", () => {
	amountCount++;
	if (amountCount !== 0) {
		minus.removeAttribute("disabled");
		buy.removeAttribute("disabled");
	}
	amount.textContent = amountCount;
});
