"use strict";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
	modal?.classList.remove("hidden");
	overlay?.classList.remove("hidden");
};

const closeModal = function () {
	modal?.classList.add("hidden");
	overlay?.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
	btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal?.addEventListener("click", closeModal);
overlay?.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
		closeModal();
	}
});

///////////////////////////////////////
// Button scrolling
btnScrollTo?.addEventListener("click", (e) => {
	const s1coords = section1?.getBoundingClientRect();
	// console.log(s1coords);

	// console.log(e.target?.getBoundingClientRect());

	// console.log("Current scroll (x/y)", window.pageXOffset, window.pageYOffset);

	// console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);

	// Scrolling
	// window.scrollTo(s1coords?.left + window.pageXOffset, s1coords?.top + window.pageYOffset);

	// window.scrollTo({
	// 	left: s1coords?.left + window.pageXOffset,
	// 	top: s1coords?.top + window.pageYOffset,
	// 	behavior: "smooth"
	// });

	section1?.scrollIntoView({ behavior: "smooth" }); // Only works in modern browsers, use previous if needed support for older browsers
});

/////////////////////////////////////////////////////////////////
// Page navigation

// The following is not efficient, it's not good to add an event listener to every link
// document.querySelectorAll(".nav__link").forEach((e) => {
// 	e.addEventListener("click", function (i) {
// 		i.preventDefault();
// 		const id = this.getAttribute("href");
// 		console.log(id);
// 		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
// 	});
// });

// Use event delegation as a better alternative
document.querySelector(".nav__links")?.addEventListener("click", function (e) {
	e.preventDefault();
	if (e.target?.classList.contains("nav__link")) {
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});

/////////////////////////////////////////////////////////////////

// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Using delegation again
tabsContainer.addEventListener("click", (e) => {
	const clicked = e.target.closest(".operations__tab");
	// Guard clause
	if (!clicked) return;

	// Remove all active class names
	tabs.forEach((t) => t.classList.remove("operations__tab--active"));
	tabsContent.forEach((c) =>
		c.classList.remove("operations__content--active")
	);
	// Add active class names
	clicked.classList.add("operations__tab--active");
	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		?.classList.add("operations__content--active");
});

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
console.log(document.documentElement); // Entire HTML
console.log(document.head);
const allSections = document.querySelectorAll(".section");
console.log(allSections);

const header = document.querySelector(".header");
document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// Create and insert elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent =
// 	"We use cookies for improved functionality and analytics.";
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// header?.prepend(message);
header?.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

document
	.querySelector(".btn--close-cookie")
	?.addEventListener("click", () => message.remove());

// Styles

message.style.backgroundColor = "#37383D";
message.style.width = "120%";
// console.log(message.style.height); // Will not work, these are inline styles
// message.style.height = "100px";
// console.log(message.style.height); // Will work now after setting inline style
console.log(getComputedStyle(message).color); // You can call this built in function to get the style before defining it

message.style.height =
	Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

const logo = document.querySelector(".nav__logo");
console.log(logo.className);
console.log(logo.getAttribute("designer"));
logo?.setAttribute("company", "bankist");

console.log(logo.getAttribute("src")); // relative
console.log(logo.src); // absolute

console.log(logo.dataset.versionNumber);

logo?.classList.add("c");
logo?.classList.remove("c");
logo?.classList.toggle("c");
logo?.classList.contains("c");

const h1 = document.querySelector("h1");
// h1?.addEventListener("mouseenter", (e) => {
// 	console.log("You hovered over the heading 1");
// });

// Prefer addEventListener of this one:
// h1.onmouseenter = (e) => {
// 	console.log("You hovered over the heading 1");
// };

const logH1 = (e) => {
	console.log("You hovered over the heading 1");
	h1?.removeEventListener("mouseenter", logH1);
};

h1?.addEventListener("mouseenter", logH1);
*/

// Not all events have a capture and bubbling phase (propigate)

/*
const randomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
	`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link")?.addEventListener("click", function (e) {
	this.style.backgroundColor = randomColor();
	// this === e.currentTarget === e.target

	// Stop propigation
	// e.stopPropagation();
	console.log("LINK", e.currentTarget);
});
document.querySelector(".nav__links")?.addEventListener("click", function (e) {
	this.style.backgroundColor = randomColor();
	// e.currentTarget === this
	// e.target === document.querySelector(".nav__link")
	console.log("LINKS", e.currentTarget);
});
document.querySelector(".nav")?.addEventListener(
	"click",
	function (e) {
		this.style.backgroundColor = randomColor();
		// e.currentTarget === this
		// e.target === document.querySelector(".nav__link")
		console.log("NAV", e.currentTarget);
	},
	true // Not used much anymore
); // Respond as going down to target, called first now


const h1 = document.querySelector("h1");

console.log(h1?.querySelectorAll(".highlight"));
console.log(h1?.childNodes);
console.log(h1?.children);
h1.firstElementChild.style.color = "red";
h1.lastElementChild.style.color = "yellow";

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

console.log(h1?.previousElementSibling);
console.log(h1?.nextElementSibling);

console.log(h1?.previousSibling);
console.log(h1?.nextSibling);

[...h1?.parentElement.children].forEach((e) => {
	if (e !== h1) e.style.transform = "scale(0.5)";
});
*/
