import { toRomanNumerals } from "./func.js";

/**
 * Creates center-aligned responsive text using an SVG element.
 */
export function createCenteredResponsiveText(
	/** @type {String} */ innerHTML,
	/** @type {String} */ viewBox
) {
	const svg = createResponsiveText(innerHTML, viewBox);
	const text = svg.querySelector("text");
	text.setAttribute("x", "50%");
	text.setAttribute("text-anchor", "middle");
	return svg;
}

/**
 * Creates responsive text using an SVG element.
 */
export function createResponsiveText(
	/** @type {String} */ innerHTML,
	/** @type {String} */ viewBox
) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

	svg.setAttribute("viewBox", viewBox);
	svg.appendChild(text);

	text.innerHTML = innerHTML;
	text.setAttribute("y", "50%");
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
		button.appendChild(createCenteredResponsiveText(innerText, "0 0 25 25"));
		return button;
	};

	const photo = document.createElement("div");
	const imageContainer = document.createElement("div");
	const image = document.createElement("img");
	const countElement = createCenteredResponsiveText("", "0 0 1 25");
	const countTextElement = countElement.querySelector("text");
	const buttons = document.createElement("div");
	const minus = createButton("-");
	const plus = createButton("+");

	photo.className = "photo";
	photo.style.rotate = `${8 * Math.random() - 4}deg`;
	photo.appendChild(imageContainer);
	photo.appendChild(createCenteredResponsiveText(ghost, "0 0 1 22"));

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
 * Creates an element containing an evidence option.
 */
export function createEvidenceOption(
	/** @type {String} */ evidence
) {
	const option = createResponsiveText(evidence, "0 0 160 30");
	const text = option.querySelector("text");
	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	const selection = document.createElementNS("http://www.w3.org/2000/svg", "g");
	const selection1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
	const selection2 = document.createElementNS("http://www.w3.org/2000/svg", "image");
	const strikethrough = document.createElementNS("http://www.w3.org/2000/svg", "image");

	text.setAttribute("x", "25");
	text.setAttribute("y", "47%");
	option.appendChild(text);

	path.setAttribute("d", "M20,1V20H1V1H20m1-1H0V21H21V0Z");
	path.setAttribute("transform", "translate(0 4)");
	option.appendChild(path);

	selection.id = "selection";
	selection.setAttribute("visibility", "hidden");
	option.appendChild(selection);

	selection1.setAttribute("href", "Images/strikethrough.png");
	selection1.setAttribute("width", "40");
	selection1.setAttribute("height", "5");
	selection1.setAttribute("transform", "rotate(45)");
	selection.appendChild(selection1);

	selection2.setAttribute("href", "Images/strikethrough.png");
	selection2.setAttribute("width", "40");
	selection2.setAttribute("height", "5");
	selection2.setAttribute("x", "-15");
	selection2.setAttribute("y", "-20");
	selection2.setAttribute("transform", "rotate(135)");
	selection.appendChild(selection2);

	strikethrough.id = "strikethrough";
	strikethrough.setAttribute("href", "Images/strikethrough.png");
	strikethrough.setAttribute("width", "100%");
	strikethrough.setAttribute("height", "166%");
	strikethrough.setAttribute("x", "-5%");
	strikethrough.setAttribute("transform", "scale(1 0.6)");
	strikethrough.setAttribute("visibility", "hidden");
	option.appendChild(strikethrough);

	option.addEventListener("click", () => {
		const ghosts = document.getElementById("ghosts");
		const evidenceString = filterEvidenceString(evidence);
		if (selection.getAttribute("visibility") === "visible") {
			ghosts.classList.remove(evidenceString);
			ghosts.classList.add(`-${evidenceString}`);
			selection.setAttribute("visibility", "hidden");
			strikethrough.setAttribute("visibility", "visible");
		} else if (strikethrough.getAttribute("visibility") === "visible") {
			ghosts.classList.remove(`-${evidenceString}`);
			strikethrough.setAttribute("visibility", "hidden");
		} else {
			ghosts.classList.add(evidenceString);
			selection.setAttribute("visibility", "visible");
		}
	});
	return option;
}

/**
 * Creates an element containing a ghost option.
 */
export function createGhostOption(
	/** @type {String} */ ghost,
	/** @type {String[]} */ evidence
) {
	const option = createCenteredResponsiveText(ghost, "0 0 100 25");
	const selection = document.createElementNS("http://www.w3.org/2000/svg", "image");
	const strikethrough = document.createElementNS("http://www.w3.org/2000/svg", "image");

	selection.id = "selection";
	selection.setAttribute("href", "Images/selection.png");
	selection.setAttribute("width", "100%");
	selection.setAttribute("height", "120%");
	selection.setAttribute("y", "-10%");
	selection.setAttribute("visibility", "hidden");
	option.appendChild(selection);

	strikethrough.id = "strikethrough";
	strikethrough.setAttribute("href", "Images/strikethrough.png");
	strikethrough.setAttribute("width", "90%");
	strikethrough.setAttribute("height", "120%");
	strikethrough.setAttribute("x", "10%");
	strikethrough.setAttribute("y", "-5%");
	strikethrough.setAttribute("visibility", "hidden");
	option.appendChild(strikethrough);

	for (const type of evidence) option.classList.add(filterEvidenceString(type));
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

/**
 * Filters evidence names to be suitable for CSS class names.
 */
function filterEvidenceString(evidence) {
	return evidence.replace(/ /g, "-").replace(/\./g, "").toLowerCase();
}
