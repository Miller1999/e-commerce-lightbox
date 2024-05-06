import "normalize.css";
import "./style.sass";
import { v4 as uuidv4 } from "uuid";
import minusIcon from "./assets/icon-minus.svg";
import plusIcon from "./assets/icon-plus.svg";
import cartIcon from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import img1 from "./assets/image-product-1.jpg";
import img2 from "./assets/image-product-2.jpg";
import img3 from "./assets/image-product-3.jpg";
import img4 from "./assets/image-product-4.jpg";
import previousIcon from "./assets/icon-previous.svg";
import nextIcon from "./assets/icon-next.svg";
import deleteIcon from "./assets/icon-delete.svg";
import closeIcon from "./assets/icon-close.svg";
import menuIcon from "./assets/icon-menu.svg";

const cartItems = [];
const app = document.querySelector("#app");
// header

const createMenuContainer = () => {
	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu__container");
	const menuButton = document.createElement("button");
	menuButton.classList.add("menu__button");
	menuButton.id = "menu";
	menuButton.innerHTML = `
  <img src=${menuIcon} alt="menu"/>
`;
	const title = document.createElement("h1");
	title.textContent = "sneakers";
	menuContainer.append(menuButton, title);
	return menuContainer;
};
const createCartContainer = () => {
	const cartContainer = document.createElement("div");
	cartContainer.classList.add("cart__container");
	const cartButton = document.createElement("button");
	cartButton.classList.add("cart__button");
	cartButton.innerHTML = `
  <span class="hidden__number"></span>
  <img src=${cartIcon} alt="cart"/>
`;
	const profile = document.createElement("button");
	profile.innerHTML = `
  <img src=${avatar} alt="profile-avatar"/>
`;
	cartContainer.append(cartButton, profile);
	return cartContainer;
};
const createCartInfo = () => {
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
	return cartInfo;
};

// menu mobile
const createMenu = () => {
	const menu = document.createElement("aside");
	menu.classList.add("hidden");
	const closeButton = document.createElement("button");
	closeButton.id = "close";
	closeButton.innerHTML = `
  <img src=${closeIcon} alt="close menu"/>
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
	return menu;
};
const menu = createMenu();

// main article
const createMainContainer = () => {
	const mainContainer = document.createElement("main");
	const article = createArticle();
	mainContainer.append(article);
	return mainContainer;
};
const createArticle = () => {
	const article = document.createElement("article");
	const carrouselContainer = createCarrousel();
	const infoContainer = createInfoContainer();
	article.append(carrouselContainer, infoContainer);
	return article;
};
const createCarrousel = () => {
	const carrouselContainer = document.createElement("div");
	carrouselContainer.classList.add("carrousel__container");
	const carrousel = document.createElement("div");
	const principalImage = document.createElement("img");
	principalImage.classList.add("principal__image");
	principalImage.src = img1;
	carrousel.classList.add("carrousel__images");
	const carrouselImg1 = document.createElement("img");
	const carrouselImg2 = document.createElement("img");
	const carrouselImg3 = document.createElement("img");
	const carrouselImg4 = document.createElement("img");
	carrouselImg1.src = img1;
	carrouselImg2.src = img2;
	carrouselImg3.src = img3;
	carrouselImg4.src = img4;
	if (window.innerWidth < 1280) {
		carrouselImg2.classList.add("hidden__image");
		carrouselImg3.classList.add("hidden__image");
		carrouselImg4.classList.add("hidden__image");
	}

	const leftButtonCarrousel = document.createElement("button");
	leftButtonCarrousel.id = "previous";
	leftButtonCarrousel.innerHTML = `
  <img src=${previousIcon} alt="previous button"/>
`;
	leftButtonCarrousel.classList.add("previous-button__carrousel");
	const rightButtonCarrousel = document.createElement("button");
	rightButtonCarrousel.id = "next";
	rightButtonCarrousel.innerHTML = `
  <img src=${nextIcon} alt="next button"/>
`;
	rightButtonCarrousel.classList.add("next-button__carrousel");
	if (window.innerWidth > 1280) {
		carrousel.append(
			principalImage,
			carrouselImg1,
			carrouselImg2,
			carrouselImg3,
			carrouselImg4
		);
	} else {
		carrousel.append(
			carrouselImg1,
			carrouselImg2,
			carrouselImg3,
			carrouselImg4
		);
	}
	carrouselContainer.append(
		leftButtonCarrousel,
		rightButtonCarrousel,
		carrousel
	);
	return carrouselContainer;
};

const createInfoContainer = () => {
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
  <img src="${minusIcon} alt="minus button"/>
`;
	const amount = document.createElement("span");
	amount.textContent = 0;
	const rightButtonQuantity = document.createElement("button");
	rightButtonQuantity.id = "plus";
	rightButtonQuantity.innerHTML = `
  <img src=${plusIcon} alt="more button"/>
`;
	const addCartButton = document.createElement("button");
	addCartButton.id = "buy";
	addCartButton.innerHTML = `
  <img src=${cartIcon} alt="button cart"/>
  <p>Add to cart</p>
`;
	addCartButton.classList.add("addCart__button");
	addCartButton.disabled = true;
	buyContainer.append(quantityContainer, addCartButton);
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
	return infoContainer;
};

const mainContainer = createMainContainer();

const createHeader = () => {
	const header = document.createElement("header");
	const menuContainer = createMenuContainer();
	const cartContainer = createCartContainer();
	const cartInfo = createCartInfo();
	const menu = createMenu();
	if (window.innerWidth < 767) {
		header.append(menuContainer, cartContainer, cartInfo);
	} else {
		menu.classList.remove("hidden");
		header.append(menuContainer, menu, cartContainer, cartInfo);
	}
	return header;
};
const header = createHeader();
if (window.innerWidth < 767) {
	app.append(header, menu, mainContainer);
} else {
	menu.classList.remove("hidden");

	app.append(header, mainContainer);
}

//functions
const close = document.querySelector("#close");
const hamburguer = document.querySelector("#menu");

const cartBtn = document.querySelector(".cart__button");
const cartInfo = document.querySelector(".cart__info");
const carrouselImages = Array.from(
	document.querySelectorAll(".carrousel__images img")
);
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const amount = document.querySelector(".quantity__container span");
const buy = document.querySelector("#buy");
const images = Array.from(document.querySelectorAll(".carrousel__images img"));
const carrouselImg1 = images[0];
const discountPrice = document.querySelector(".discount__price");
const name = document.querySelector(".name__info");
const principalImage = document.querySelector(".principal__image");
let carrouselCount = 0;
let amountCount = 0;

if (window.innerWidth < 768) {
	close.addEventListener("click", () => {
		menu.classList.add("hidden");
	});
	hamburguer.addEventListener("click", () => {
		menu.classList.remove("hidden");
	});
}

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
	deleteBtn.innerHTML = `<img src=${deleteIcon} alt="delete button"/>`;
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
let isModalOpen = false;
const openModal = () => {
	if (isModalOpen) return;
	isModalOpen = true;
	const modal = document.createElement("div");
	modal.classList.add("modal");
	const closeButton = document.createElement("button");
	closeButton.id = "close";
	closeButton.innerHTML = `
  <img src=${closeIcon} alt="close menu"/>
`;
	const carouselModal = createCarrousel();
	modal.append(closeButton, carouselModal);
	app.appendChild(modal);
	const carouselModalImages = Array.from(
		document.querySelectorAll(".modal .carrousel__images img")
	);
	const principalImage = document.querySelector(
		".modal .carrousel__images .principal__image"
	);
	const previous = document.querySelector(".modal #previous");
	const next = document.querySelector(".modal #next");
	next.addEventListener("click", () => {
		carrouselCount++;
		if (carrouselCount >= carouselModalImages.length) {
			carrouselCount = 0;
		}
		principalImage.src = carouselModalImages[carrouselCount].src;
	});
	previous.addEventListener("click", () => {
		carrouselCount--;
		if (carrouselCount <= 0) {
			carrouselCount = carouselModalImages.length - 1;
		}
		principalImage.src = carouselModalImages[carrouselCount].src;
	});

	closeButton.addEventListener("click", () => {
		isModalOpen = false;
		images[0].classList.remove("selected");
		images[1].classList.add("selected");
		modal.remove();
	});
};

principalImage.addEventListener("click", openModal);
