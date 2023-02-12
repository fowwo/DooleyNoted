import { createPhoto, createEvidenceOption, createGhostOption, createResponsiveText, createCenteredResponsiveText } from "./element.js";

const board = document.querySelector("#board > div");
const evidenceContainer = document.getElementById("evidence");
const ghostsContainer = document.getElementById("ghosts");

const ghosts = {
	"Banshee": [ "D.O.T.S Projector", "Fingerprints", "Ghost Orb" ],
	"Demon": [ "Fingerprints", "Ghost Writing", "Freezing Temperatures" ],
	"Deogen": [ "D.O.T.S Projector", "Ghost Writing", "Spirit Box" ],
	"Goryo": [ "EMF Level 5", "D.O.T.S Projector", "Fingerprints" ],
	"Hantu": [ "Fingerprints", "Ghost Orb", "Freezing Temperatures" ],
	"Jinn": [ "EMF Level 5", "Fingerprints", "Freezing Temperatures" ],
	"Mare": [ "Ghost Orb", "Ghost Writing", "Spirit Box" ],
	"Moroi": [ "Ghost Writing", "Spirit Box", "Freezing Temperatures" ],
	"Myling": [ "EMF Level 5", "Fingerprints", "Ghost Writing" ],
	"Obake": [ "EMF Level 5", "Fingerprints", "Ghost Orb" ],
	"Oni": [ "EMF Level 5", "D.O.T.S Projector", "Freezing Temperatures" ],
	"Onryo": [ "Ghost Orb", "Spirit Box", "Freezing Temperatures" ],
	"Phantom": [ "D.O.T.S Projector", "Fingerprints", "Spirit Box" ],
	"Poltergeist": [ "Fingerprints", "Ghost Writing", "Spirit Box" ],
	"Raiju": [ "EMF Level 5", "D.O.T.S Projector", "Ghost Orb" ],
	"Revenant": [ "Ghost Orb", "Ghost Writing", "Freezing Temperatures" ],
	"Shade": [ "EMF Level 5", "Ghost Writing", "Freezing Temperatures" ],
	"Spirit": [ "EMF Level 5", "Ghost Writing", "Spirit Box" ],
	"Thaye": [ "D.O.T.S Projector", "Ghost Orb", "Ghost Writing" ],
	"The Mimic": [ "Fingerprints", "Spirit Box", "Freezing Temperatures" ],
	"The Twins": [ "EMF Level 5", "Spirit Box", "Freezing Temperatures" ],
	"Wraith": [ "EMF Level 5", "D.O.T.S Projector", "Spirit Box" ],
	"Yokai": [ "D.O.T.S Projector", "Ghost Orb", "Spirit Box" ],
	"Yurei": [ "D.O.T.S Projector", "Ghost Orb", "Freezing Temperatures" ]
};

const evidence = [
	"EMF Level 5",
	"D.O.T.S Projector",
	"Fingerprints",
	"Ghost Orb",
	"Ghost Writing",
	"Spirit Box",
	"Freezing Temperatures"
];

document.querySelector("#clipboard h1").replaceWith(createResponsiveText("Evidence", "0 0 200 15"));
document.querySelector("#clipboard span").replaceWith((() => {
	const text = createCenteredResponsiveText("Using the evidence we've found, we believe the ghost is a:", "0 0 400 20");
	text.style.margin = "3%";
	return text;
})());

for (const type of evidence) {
	const option = createEvidenceOption(type);
	if (type === "Freezing Temperatures") {
		const strikethrough = option.querySelector("image#strikethrough");
		strikethrough.setAttribute("transform", "scale(1.4, 0.6)");
		strikethrough.setAttribute("x", "-4%");
	}
	evidenceContainer.appendChild(option);
}

for (const ghost in ghosts) {
	board.appendChild(createPhoto(ghost));
	ghostsContainer.appendChild(createGhostOption(ghost, ghosts[ghost]));
}

document.querySelector("#view-clipboard").appendChild(createCenteredResponsiveText("[ hover to view clipboard ]", "0 0 175 25"));