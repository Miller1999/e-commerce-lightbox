import "normalize.css";
import "./style.sass";
import { v4 as uuidv4 } from "uuid";

const cartItems = [];
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
cartButton.classList.add("cart__button");
cartButton.innerHTML = `
  <span class="hidden__number"></span>
  <img src="./assets/icon-cart.svg" alt="cart"/>
`;
const profile = document.createElement("button");
profile.innerHTML = `
  <img src="./assets/image-avatar.png" alt="profile-avatar"/>
`;
const cartInfo = document.createElement("div");
cartInfo.classList.add("cart__info");
cartInfo.classList.add("hidden__cart");
cartInfo.innerHTML = `
  <div>
    <p>Cart</p>
  </div>
  <div class="cart__items">
    <p>Your cart is empty</p>
  </div>  
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
const principalImage = document.createElement("img");
principalImage.classList.add("principal__image");
principalImage.src = "./assets/image-product-1.jpg";
carrousel.classList.add("carrousel__images");
const carrouselImg1 = document.createElement("img");
const carrouselImg2 = document.createElement("img");
const carrouselImg3 = document.createElement("img");
const carrouselImg4 = document.createElement("img");
carrouselImg1.src = "./assets/image-product-1.jpg";
carrouselImg2.src = "./assets/image-product-2.jpg";
carrouselImg3.src = "./assets/image-product-3.jpg";
carrouselImg4.src = "./assets/image-product-4.jpg";
if (window.innerWidth < 1280) {
	carrouselImg2.classList.add("hidden__image");
	carrouselImg3.classList.add("hidden__image");
	carrouselImg4.classList.add("hidden__image");
}

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
discountPrice.textContent = "125.00";
discountPrice.classList.add("discount__price");
const discount = document.createElement("span");
discount.textContent = "50%";
discount.classList.add("discount__percentage");
const normalPrice = document.createElement("span");
normalPrice.textContent = "250.00";
normalPrice.classList.add("normal__price");
const buyContainer = document.createElement("div");
buyContainer.classList.add("buy__container");
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
if (window.innerWidth > 1280) {
	carrousel.append(
		principalImage,
		carrouselImg1,
		carrouselImg2,
		carrouselImg3,
		carrouselImg4
	);
} else {
	carrousel.append(carrouselImg1, carrouselImg2, carrouselImg3, carrouselImg4);
}
buyContainer.append(quantityContainer, addCartButton);
carrouselContainer.append(leftButtonCarrousel, rightButtonCarrousel, carrousel);
discountContainer.append(discountPrice, discount);
pricesContainer.append(discountContainer, normalPrice);
quantityContainer.append(leftButtonQuantity, amount, rightButtonQuantity);

if (window.innerWidth < 1280) {
	infoContainer.append(
		company,
		name,
		description,
		pricesContainer,
		quantityContainer,
		addCartButton
	);
} else {
	infoContainer.append(
		company,
		name,
		description,
		pricesContainer,
		buyContainer
	);
}

article.append(carrouselContainer, infoContainer);
mainContainer.append(article);

menuContainer.append(menuButton, title);
cartContainer.append(cartButton, profile);

if (window.innerWidth < 767) {
	header.append(menuContainer, cartContainer, cartInfo);
	app.append(header, menu, mainContainer);
} else {
	menu.classList.remove("hidden");
	header.append(menuContainer, menu, cartContainer, cartInfo);
	app.append(header, mainContainer);
}

//functions
const close = document.querySelector("#close");
const hamburguer = document.querySelector("#menu");

const cartBtn = document.querySelector(".cart__button");

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

close.addEventListener("click", () => {
	menu.classList.add("hidden");
});
hamburguer.addEventListener("click", () => {
	menu.classList.remove("hidden");
});

cartBtn.addEventListener("click", () => {
	cartInfo.classList.toggle("hidden__cart");
});

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

buy.addEventListener("click", () => {
	amountCount = 0;
	cartItems.push({
		name: name.textContent,
		amount: amount.textContent,
		img: carrouselImg1.src,
		priceItem: discountPrice.textContent,
		id: uuidv4(),
	});
	document.querySelector(".cart__items").innerHTML = "";
	cartItems.forEach((item) => {
		const card = createCard(
			item.name,
			item.amount,
			item.img,
			item.priceItem,
			item.id
		);
		document.querySelector(".cart__items").append(card);
	});
	updateCartCounter();
});

const createCard = (name, amount, img, price, id) => {
	const card = document.createElement("div");
	card.classList.add("item__card");
	card.id = id;
	const productImg = document.createElement("img");
	productImg.src = img;
	const productInfo = document.createElement("div");
	productInfo.classList.add("product__info");
	const productName = document.createElement("p");
	productName.textContent = name;
	const priceInfo = document.createElement("div");
	priceInfo.classList.add("price__info");
	const priceDescription = document.createElement("p");
	priceDescription.innerHTML = `$${price} x ${amount}`;
	const total = document.createElement("p");
	total.innerHTML = `$${price * amount}`;
	const deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = `<img src="./assets/icon-delete.svg" alt="delete button"/>`;
	deleteBtn.onclick = (e) => {
		const index = cartItems.findIndex((item) => {
			return item.id == e.target.parentElement.parentElement.id;
		});
		cartItems.splice(index, 1);
		document.querySelector(".cart__items").innerHTML = "";
		cartItems.forEach((item) => {
			const card = createCard(
				item.name,
				item.amount,
				item.img,
				item.priceItem,
				item.id
			);
			document.querySelector(".cart__items").append(card);
		});
		updateCartCounter();
		if (cartItems === 0) {
			document.querySelector(
				".cart__items"
			).innerHTML = `<p>Your cart is empty</p>`;
			document
				.querySelector(".cart__button span")
				.classList.add("hidden__number");
		}
	};

	priceInfo.append(priceDescription, total);
	productInfo.append(productName, priceInfo);
	card.append(productImg, productInfo, deleteBtn);
	return card;
};
const updateCartCounter = () => {
	const cartCounter = document.querySelector(".cart__button span");
	if (cartItems.length !== 0) {
		cartCounter.classList.remove("hidden__number");
		cartCounter.textContent = cartItems.length;
	} else {
		cartCounter.classList.add("hidden__number");
	}
};

const images = Array.from(document.querySelectorAll(".carrousel__images img"));
images[1].classList.add("selected");

images.forEach((image) =>
	image.addEventListener("click", (e) => {
		images[0].src = e.target.src;
		images.forEach((img) => {
			if (img !== e.target) {
				img.classList.remove("selected");
			}
		});
		e.target.classList.add("selected");
	})
);
