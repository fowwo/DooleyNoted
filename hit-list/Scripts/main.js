import { createPhoto, createGhostOption } from "./element.js";

const main = document.querySelector("main");
const ghostsContainer = document.getElementById("ghosts");

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
	main.appendChild(createPhoto(ghost));
	ghostsContainer.appendChild(createGhostOption(ghost));
}
