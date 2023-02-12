import { createPhoto, createEvidenceOption, createGhostOption } from "./element.js";

const main = document.querySelector("main");
const evidenceContainer = document.getElementById("evidence");
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

const evidence = [
	"EMF Level 5",
	"D.O.T.S Projector",
	"Fingerprints",
	"Ghost Orb",
	"Ghost Writing",
	"Spirit Box",
	"Freezing Temperatures"
];

for (const type of evidence) {
	const option = createEvidenceOption(type);
	if (type === "Freezing Temperatures") {
		const strikethrough = option.querySelector("image#strikethrough");
		strikethrough.setAttribute("transform", "scale(1.4, 0.6)");
		strikethrough.setAttribute("x", "-4%");
	}
	evidenceContainer.appendChild(option);
}

for (const ghost of ghosts) {
	main.appendChild(createPhoto(ghost));
	ghostsContainer.appendChild(createGhostOption(ghost));
}
