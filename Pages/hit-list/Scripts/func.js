/**
 * Converts an integer to roman numerals.
 */
export function toRomanNumerals(/** @type {Number} */ x) {
	const list = [ ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1] ];
	let string = "";
	for (const [ numeral, value ] of list) {
		let n = Math.floor(x / value);
		string += numeral.repeat(n);
		x -= n * value;
	}
	return string;
}

/**
 * Filters strings to be suitable for CSS id and class names.
 */
export function filterCSSString(string) {
	return string.replace(/ /g, "-").replace(/\./g, "").toLowerCase();
}
