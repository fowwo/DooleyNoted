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
	photo.className = "photo";
	photo.style.rotate = `${8 * Math.random() - 4}deg`;

	const img = document.createElement("img");
	// img.src = `Images/Ghosts/${ghost}.jpg`;
	img.draggable = false;
	photo.appendChild(img);

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("viewBox", "0 0 1 22");

	const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
	text.innerHTML = ghost;
	text.setAttribute("x", "50%");
	text.setAttribute("y", "50%");
	text.setAttribute("text-anchor", "middle");
	text.setAttribute("dominant-baseline", "central");

	svg.appendChild(text);
	photo.appendChild(svg);
	main.appendChild(photo);
}
