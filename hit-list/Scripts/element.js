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
