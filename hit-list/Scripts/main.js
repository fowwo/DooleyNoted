const main = document.querySelector("main");

const ghosts = {
	"Banshee": 0,
	"Demon": 0,
	"Deogen": 0,
	"Goryo": 0,
	"Hantu": 0,
	"Jinn": 0,
	"Mare": 0,
	"Moroi": 0,
	"Myling": 0,
	"Obake": 0,
	"Oni": 0,
	"Onryo": 0,
	"Phantom": 0,
	"Poltergeist": 0,
	"Raiju": 0,
	"Revenant": 0,
	"Shade": 0,
	"Spirit": 0,
	"Thaye": 0,
	"The Mimic": 0,
	"The Twins": 0,
	"Wraith": 0,
	"Yokai": 0,
	"Yurei": 0
};

for (const ghost in ghosts) {
	const photo = document.createElement("div");
	const div = document.createElement("div");
	const img = document.createElement("img");
	const buttons = document.createElement("div");
	const minus = button("-");
	const plus = button("+");

	photo.className = "photo";
	photo.style.rotate = `${8 * Math.random() - 4}deg`;

	// img.src = `Images/Ghosts/${ghost}.jpg`;
	div.appendChild(img);

	const count = svg("", "0 0 1 25");
	div.appendChild(count);

	photo.appendChild(div);

	const text = count.querySelector("text");
	minus.disabled = true;
	minus.addEventListener("click", () => {
		ghosts[ghost]--;
		if (ghosts[ghost] === 0) minus.disabled = true;
		text.innerHTML = toRomanNumerals(ghosts[ghost]);
	});
	buttons.appendChild(minus);

	plus.addEventListener("click", () => {
		ghosts[ghost]++;
		minus.disabled = false;
		text.innerHTML = toRomanNumerals(ghosts[ghost]);
	});
	buttons.appendChild(plus);

	div.appendChild(buttons);
	
	photo.appendChild(svg(ghost, "0 0 1 22"));

	main.appendChild(photo);
}

function svg(innerHTML, viewBox) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

	svg.setAttribute("viewBox", viewBox);

	text.innerHTML = innerHTML;
	text.setAttribute("x", "50%");
	text.setAttribute("y", "50%");
	text.setAttribute("text-anchor", "middle");
	text.setAttribute("dominant-baseline", "central");
	svg.appendChild(text);

	return svg;
}

function button(innerText) {
	const button = document.createElement("button");
	button.appendChild(svg(innerText, "0 0 25 25"));
	return button;
}

function toRomanNumerals(x) {
	const list = [ ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1] ];
	let string = "";
	for (const [ numeral, value ] of list) {
		let n = Math.floor(x / value);
		string += numeral.repeat(n);
		x -= n * value;
	}
	return string;
}
