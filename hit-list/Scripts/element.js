import { toRomanNumerals } from "./func.js";

/**
 * Creates automatically scaling text using an SVG element.
 */
export function createScalableText(
	/** @type {String} */ innerHTML,
	/** @type {String} */ viewBox
) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

	svg.setAttribute("viewBox", viewBox);
	svg.appendChild(text);

	text.innerHTML = innerHTML;
	text.setAttribute("x", "50%");
	text.setAttribute("y", "50%");
	text.setAttribute("text-anchor", "middle");
	text.setAttribute("dominant-baseline", "central");

	return svg;
}

/**
 * Creates an element containing a ghost photo.
 */
export function createPhoto(
	/** @type {String} */ ghost
) {
	let count = 0;

	const createButton = (innerText) => {
		const button = document.createElement("button");
		button.appendChild(createScalableText(innerText, "0 0 25 25"));
		return button;
	};

	const photo = document.createElement("div");
	const imageContainer = document.createElement("div");
	const image = document.createElement("img");
	const countElement = createScalableText("", "0 0 1 25");
	const countTextElement = countElement.querySelector("text");
	const buttons = document.createElement("div");
	const minus = createButton("-");
	const plus = createButton("+");

	photo.className = "photo";
	photo.style.rotate = `${8 * Math.random() - 4}deg`;
	photo.appendChild(imageContainer);
	photo.appendChild(createScalableText(ghost, "0 0 1 22"));

	imageContainer.appendChild(image);
	imageContainer.appendChild(countElement);
	imageContainer.appendChild(buttons);

	// image.src = `Images/Ghosts/${ghost}.jpg`;

	buttons.appendChild(minus);
	buttons.appendChild(plus);

	minus.disabled = true;
	minus.addEventListener("click", () => {
		count--;
		if (count === 0) minus.disabled = true;
		countTextElement.innerHTML = toRomanNumerals(count);
	});

	plus.addEventListener("click", () => {
		count++;
		minus.disabled = false;
		countTextElement.innerHTML = toRomanNumerals(count);
	});

	return photo;
}

/**
 * Creates an element containing a ghost option.
 */
export function createGhostOption(
	/** @type {String} */ ghost
) {
	const option = createScalableText(ghost, "0 0 100 25");
	const selection = document.createElementNS("http://www.w3.org/2000/svg", "image");
	const strikethrough = document.createElementNS("http://www.w3.org/2000/svg", "image");

	selection.id = "selection";
	selection.setAttribute("visibility", "hidden");
	selection.setAttribute("href", "Images/selection.png");
	selection.setAttribute("width", "100%");
	selection.setAttribute("height", "120%");
	selection.setAttribute("y", "-10%");
	option.appendChild(selection);

	strikethrough.id = "strikethrough";
	strikethrough.setAttribute("visibility", "hidden");
	strikethrough.setAttribute("href", "Images/strikethrough.png");
	strikethrough.setAttribute("width", "90%");
	strikethrough.setAttribute("height", "120%");
	strikethrough.setAttribute("x", "10%");
	strikethrough.setAttribute("y", "-5%");
	option.appendChild(strikethrough);

	option.addEventListener("click", () => {
		if (selection.getAttribute("visibility") === "visible") {
			selection.setAttribute("visibility", "hidden");
			strikethrough.setAttribute("visibility", "visible");
		} else if (strikethrough.getAttribute("visibility") === "visible") {
			strikethrough.setAttribute("visibility", "hidden");
		} else {
			document.querySelector("#ghosts image#selection[visibility=visible]")?.setAttribute("visibility", "hidden");
			selection.setAttribute("visibility", "visible");
		}
	});
	return option;
}
