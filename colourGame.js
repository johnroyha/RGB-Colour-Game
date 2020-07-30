let numSquares = 6;
let colours = generateRandomColours(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColour = pickColour();
let colourDisplay = document.getElementById("colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function () {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
}

function reset() {
	colours = generateRandomColours(numSquares);
	//pick a new random colour from array
	pickedColour = pickColour();
	//change colourDisplay to match picked Colour
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	//change colours of squares
	for (let i = 0; i < squares.length; i++) {
		if (colours[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
	reset();
});

colourDisplay.textContent = pickedColour;

for (let i = 0; i < squares.length; i++) {
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function () {
		//grab colour of clicked squares
		let clickedColour = this.style.backgroundColor;
		messageDisplay.style.fontFamily = "Montserrat", "Avenir";
		messageDisplay.style.color = "steelblue";
		messageDisplay.style.fontWeight = "700";
		resetButton.style.fontFamily = "Montserrat", "Avenir";
		resetButton.style.color = "steelblue";
		resetButton.style.fontWeight = "700";
		//compare colour to pickedColour
		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColours(colour) {
	for (let i = 0; i < squares.length; i++) {
		//change each colour to match given colour
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour() {
	let random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num) {
	//make an array
	let arr = [];
	//add num random colours to arr
	for (let i = 0; i < num; i++) {
		//get random colour and push into arr
		arr.push(randomColour());
	}
	//return that array
	return arr;
}

function randomColour() {
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
