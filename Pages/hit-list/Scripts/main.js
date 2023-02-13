import { createPhoto, createEvidenceOption, createGhostOption, createResponsiveText, createCenteredResponsiveText, createToggleButton } from "./element.js";

const header = document.querySelector("header");
const board = document.querySelector("#board > div");
const evidenceContainer = document.getElementById("evidence");
const ghostsContainer = document.getElementById("ghosts");

const ghosts = {
	"Spirit": [ "EMF Level 5", "Ghost Writing", "Spirit Box" ],
	"Wraith": [ "EMF Level 5", "D.O.T.S Projector", "Spirit Box" ],
	"Phantom": [ "D.O.T.S Projector", "Fingerprints", "Spirit Box" ],
	"Poltergeist": [ "Fingerprints", "Ghost Writing", "Spirit Box" ],
	"Banshee": [ "D.O.T.S Projector", "Fingerprints", "Ghost Orb" ],
	"Jinn": [ "EMF Level 5", "Fingerprints", "Freezing Temperatures" ],
	"Mare": [ "Ghost Orb", "Ghost Writing", "Spirit Box" ],
	"Revenant": [ "Ghost Orb", "Ghost Writing", "Freezing Temperatures" ],
	"Shade": [ "EMF Level 5", "Ghost Writing", "Freezing Temperatures" ],
	"Demon": [ "Fingerprints", "Ghost Writing", "Freezing Temperatures" ],
	"Yurei": [ "D.O.T.S Projector", "Ghost Orb", "Freezing Temperatures" ],
	"Oni": [ "EMF Level 5", "D.O.T.S Projector", "Freezing Temperatures" ],
	"Yokai": [ "D.O.T.S Projector", "Ghost Orb", "Spirit Box" ],
	"Hantu": [ "Fingerprints", "Ghost Orb", "Freezing Temperatures" ],
	"Goryo": [ "EMF Level 5", "D.O.T.S Projector", "Fingerprints" ],
	"Myling": [ "EMF Level 5", "Fingerprints", "Ghost Writing" ],
	"Onryo": [ "Ghost Orb", "Spirit Box", "Freezing Temperatures" ],
	"The Twins": [ "EMF Level 5", "Spirit Box", "Freezing Temperatures" ],
	"Raiju": [ "EMF Level 5", "D.O.T.S Projector", "Ghost Orb" ],
	"Obake": [ "EMF Level 5", "Fingerprints", "Ghost Orb" ],
	"The Mimic": [ "Fingerprints", "Spirit Box", "Freezing Temperatures" ],
	"Moroi": [ "Ghost Writing", "Spirit Box", "Freezing Temperatures" ],
	"Deogen": [ "D.O.T.S Projector", "Ghost Writing", "Spirit Box" ],
	"Thaye": [ "D.O.T.S Projector", "Ghost Orb", "Ghost Writing" ]
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

// Header buttons
header.appendChild(createToggleButton(
	'<svg viewBox="0 0 100 48.45"><g transform="translate(0 -25.77)"><path opacity=33% d="M33.25,71.58l.77.59a24.23,24.23,0,1,1,0-44.33l-.76.58a27.29,27.29,0,0,0-3.47,40c.35.38.71.75,1.09,1.12A26.85,26.85,0,0,0,33.25,71.58Z"/><path opacity=66% d="M59,71.58l.77.59L56.61,73.3a23.79,23.79,0,0,1-6.61.93A24.21,24.21,0,0,1,37.89,71a22.22,22.22,0,0,1-2.73-1.85,24.21,24.21,0,0,1,0-38.28A21.72,21.72,0,0,1,37.89,29l.69-.38a24.24,24.24,0,0,1,21.22-.8l-.76.58a27.32,27.32,0,0,0,0,43.16Z"/><path d="M100,50A24.22,24.22,0,0,1,63.66,71a23.38,23.38,0,0,1-2.73-1.84,24.22,24.22,0,0,1,0-38.29A21.72,21.72,0,0,1,63.66,29l.69-.38A24.22,24.22,0,0,1,100,50Z"/></g></svg>',
	"Toggle animation",
	(enabled) => {
		if (enabled) {
			document.documentElement.classList.remove("no-animation");
		} else {
			document.documentElement.classList.add("no-animation");
		}
	},
	true
));
header.appendChild(createToggleButton(
	'<svg viewBox="0 0 95 65"><path d="M87.5,17.5h-75a10,10,0,0,0-10,10v45a10,10,0,0,0,10,10h75a10,10,0,0,0,10-10v-45A10,10,0,0,0,87.5,17.5Zm-50,5h25v25h-25Zm-5,55h-20a5,5,0,0,1-5-5v-20h25Zm0-30H7.5v-20a5,5,0,0,1,5-5h20Zm30,30h-25v-25h25Zm30-5a5,5,0,0,1-5,5h-20v-25h25Zm-25-25v-25h20a5,5,0,0,1,5,5v20Z" transform="translate(-2.5 -17.5)"/></svg>',
	"Toggle board-only mode",
	(enabled) => {
		if (enabled) {
			document.documentElement.classList.add("board-only");
		} else {
			document.documentElement.classList.remove("board-only");
		}
	}
));

// Clipboard text
document.querySelector("#clipboard h1").replaceWith(createResponsiveText("Evidence", "0 0 200 15"));
document.querySelector("#clipboard span").replaceWith((() => {
	const text = createCenteredResponsiveText("Using the evidence we've found, we believe the ghost is a:", "0 0 400 20");
	text.style.margin = "3%";
	return text;
})());

// Evidence list
for (const type of evidence) {
	const option = createEvidenceOption(type);
	if (type === "Freezing Temperatures") {
		const strikethrough = option.querySelector("image#strikethrough");
		strikethrough.setAttribute("transform", "scale(1.4, 0.6)");
		strikethrough.setAttribute("x", "-4%");
	}
	evidenceContainer.appendChild(option);
}

// Ghost list
for (const ghost in ghosts) {
	board.appendChild(createPhoto(ghost));
	ghostsContainer.appendChild(createGhostOption(ghost, ghosts[ghost]));
}

// View clipboard
document.querySelector("#view-clipboard").appendChild(createCenteredResponsiveText("[ hover to view clipboard ]", "0 0 175 25"));
