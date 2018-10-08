console.log("Starting books.js");
function getReviews() {
	console.log("getReviews() has been called.");

	var xmlhttp = new XMLHttpRequest();
	var url = "../data/reviews.json";
	console.log(url);

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4 &&xmlhttp.status == 200) {
			var json_in = JSON.parse(xmlhttp.responseText);
			load_json(json_in);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function load_json(data) {
	var out = "";
	var i;

	for(i = 0; i < data.length; i++) {
		console.log(data[i].title);
		out = data[i].title;
	}
	document.getElementById("showbooks").innerHTML = out;
}