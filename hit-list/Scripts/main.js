const main = document.querySelector("main");

const ghosts = [
	"Banshee",
	"Demon",
	"Deogen",
	"Goryo",
	"Hantu",
	"Jinn",
	"Mare",
	"Moroi",
	"Myling",
	"Obake",
	"Oni",
	"Onryo",
	"Phantom",
	"Poltergeist",
	"Raiju",
	"Revenant",
	"Shade",
	"Spirit",
	"Thaye",
	"The Mimic",
	"The Twins",
	"Wraith",
	"Yokai",
	"Yurei"
];

for (const ghost of ghosts) {
	const photo = document.createElement("div");
	const div = document.createElement("div");
	const img = document.createElement("img");
	const buttons = document.createElement("div");

	photo.className = "photo";
	photo.style.rotate = `${8 * Math.random() - 4}deg`;

	// img.src = `Images/Ghosts/${ghost}.jpg`;
	div.appendChild(img);

	div.appendChild(svg("", "0 0 1 25")); // Count

	photo.appendChild(div);

	buttons.appendChild(button("-"));
	buttons.appendChild(button("+"));
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
