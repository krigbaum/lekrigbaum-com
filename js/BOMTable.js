function getWindowLocation() {
	document.getElementById("location").innerHTML = window.location;
}

function getWindowScreen() {
	document.getElementById("screen").textContent = window.screen;		// <-- Uses textContent to change cell contents.  
}

function getWindowScreenWidth() {
	document.getElementById("screenWidth").innerHTML = window.screen.width;
}

function getWindowScreenHeight() {
	document.getElementById("screenHeight").innerHTML = window.screen.height;
}

function getWindowScreenX() {
	document.getElementById("screenX").innerHTML = window.screenX;
}

function getWindowScreenY() {
	document.getElementById("screenY").innerHTML = window.screenY;
}

function getWindowInnerWidth() {
	document.getElementById("innerWidth").innerHTML = window.innerWidth;
}

function getWindowInnerHeight() {
	document.getElementById("innerHeight").innerHTML = window.innerHeight;
}

function getWindowDocument() {
	document.getElementById("document").innerHTML = window.document;
}

function getWindowHistory() {
	document.getElementById("history").innerHTML = window.history;
}

function getWindowHistoryLength() {
	document.getElementById("historyLength").innerHTML = window.history.length;
}