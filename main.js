// Close element function
function closeElement(id) {
	// Query the HTML element
	var closingElement = document.querySelector(`#${id}`);
	closingElement.style.visibility = "hidden";
}

// Show element function
function showElement(id) {
	// Query the HTML element
	var closingElement = document.querySelector(`#${id}`);
	closingElement.style.visibility = "visible";
}

// TEST function
function clickDoubleFunctTest() {
	console.log("And now coockies should be set");
}