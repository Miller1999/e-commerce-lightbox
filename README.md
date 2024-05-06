# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![imagen](https://github.com/Miller1999/e-commerce-lightbox/assets/22383830/af9c37af-bf99-4a72-9dc2-aad4f4322369)
![imagen](https://github.com/Miller1999/e-commerce-lightbox/assets/22383830/c50694b3-0604-48f6-a2e8-a3785181d4ea)
![imagen](https://github.com/Miller1999/e-commerce-lightbox/assets/22383830/2d0622c9-1b9a-4ad4-8741-02ed5b9473b2)



### Links

- Solution URL: [Repository](https://github.com/Miller1999/e-commerce-lightbox)
- Live Site URL: [Live](https://e-commerce-lightbox.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS variables and mixins
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/) - For styles
- 
### What I learned

This project caught my attention because I'd never tackled making a modal in vanilla JavaScript before. So, naturally, I had to hit the books to figure out how to pull it off. I spent a good chunk of time digging into different sources, trying to wrap my head around the whole thing. It was kind of like a scavenger hunt for knowledge, you know? But with each piece of info I gathered, I got closer to cracking the code on that modal.

```js
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
```

## Author


- Website - [Miller Arias](https://miller-arias-dev.vercel.app/)
- Frontend Mentor - [@Miller1999](https://www.frontendmentor.io/profile/Miller1999)
- Twitter - [@miller_arias](https://twitter.com/miller_arias)
- Github - [@Miller1999](https://github.com/Miller1999)

