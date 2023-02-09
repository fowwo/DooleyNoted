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
