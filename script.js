"use strict";

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

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

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
