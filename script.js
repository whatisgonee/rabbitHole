window.addEventListener('beforeunload', function(e) {
	e.preventDefault();
	e.returnValue = '';
});

document.addEventListener('DOMContentLoaded', () => {
	var rabbitHole = document.getElementById("rabbitHole");
	var width = 300;
	var isWhite = false;
	var count = 0;
	var message = document.getElementById("message");
	var text = null;

	rabbitHole.addEventListener('click', zoom);
	rabbitHole.addEventListener('click', event);

	fetch();

	function zoom() {
		rabbitHole.removeEventListener('click', zoom);
		rabbitHole.style.cursor = "none";
		document.getElementById("main").style.cursor = "none";
		if(isWhite) rabbitHole.style.color = "black";
		else rabbitHole.style.color = "white";
		setTimeout(() => {
			if(width <= window.screen.availWidth && window.screen.availWidth > window.screen.availHeight) {
				width += window.screen.availWidth / 20;
				rabbitHole.style.width = width + "px";
				rabbitHole.style.height = width + "px";

				zoom();
			} else if(width <= window.screen.availHeight && window.screen.availHeight > window.screen.availWidth) {
				width += window.screen.availHeight / 20;
				rabbitHole.style.width = width + "px";
				rabbitHole.style.height = width + "px";

				zoom();
			} else {
				rabbitHole.style.borderRadius = "0%";
				width = 0;
				isWhite = !isWhite;
				setTimeout(() => {
					count += 1;
					reset();
				}, 100);
			}
		}, 100);
	}

	function reset() {
		var circleColor = "";
		var mainColor = "";
		if(isWhite) {
			circleColor = "black";
			mainColor = "white";
		} else {
			circleColor = "white";
			mainColor = "black";
		}
		document.body.style.backgroundColor = mainColor;
		rabbitHole.style.width = "0px";
		rabbitHole.style.height = "0px";
		rabbitHole.style.borderRadius = "50%";
		rabbitHole.style.backgroundColor = "transparent";
		rabbitHole.style.cursor = "pointer";
		rabbitHole.innerHTML = "#" + count;
		document.getElementById("main").style.cursor = "default";
		setTimeout(() => {
			rabbitHole.style.backgroundColor = circleColor;
			resetZoom();
		}, 500);
	}

	function resetZoom() {
		setTimeout(() => {
			if(width < 300) {
				width += 20;
				rabbitHole.style.width = width + "px";
				rabbitHole.style.height = width + "px";
				resetZoom();
			} else {
				rabbitHole.addEventListener('click', zoom);
			}
		}, 100);
	}

	function event() {
		var replicas = text.match(/\/\/(.*): (.*)/g);
		
		for(var i = 0; i < replicas.length; i++) {
			var divided = replicas[i].match(/\/\/(.*): (.*)/);
			if(count == parseInt(divided[1])) message.innerHTML = divided[2]; 
		}
	}

	function fetch() {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://raw.githubusercontent.com/whatisgonee/rabbitHole/main/replicas.txt", false);
		xmlhttp.send();
		if (xmlhttp.status==200) {
			text = xmlhttp.responseText;
		}
	}
});
		if(isWhite) {
			circleColor = "black";
			mainColor = "white";
		} else {
			circleColor = "white";
			mainColor = "black";
		}
		document.body.style.backgroundColor = mainColor;
		rabbitHole.style.width = "0px";
		rabbitHole.style.height = "0px";
		rabbitHole.style.borderRadius = "50%";
		rabbitHole.style.backgroundColor = "transparent";
		rabbitHole.style.cursor = "pointer";
		rabbitHole.innerHTML = "#" + count;
		document.getElementById("main").style.cursor = "default";
		setTimeout(() => {
			rabbitHole.style.backgroundColor = circleColor;
			resetZoom();
		}, 500);
	}

	function resetZoom() {
		setTimeout(() => {
			if(width < 300) {
				width += 20;
				rabbitHole.style.width = width + "px";
				rabbitHole.style.height = width + "px";
				resetZoom();
			} else {
				rabbitHole.addEventListener('click', zoom);
			}
		}, 100);
	}

	function event() {
		var replicas = text.match(/\/\/(.*): (.*)/g);
		
		for(var i = 0; i < replicas.length; i++) {
			var divided = replicas[i].match(/\/\/(.*): (.*)/);
			if(count == parseInt(divided[1])) message.innerHTML = divided[2]; 
		}
	}

	function fetch() {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://raw.githubusercontent.com/whatisgonee/rabbitHole/main/replicas.txt", false);
		xmlhttp.send();
		if (xmlhttp.status==200) {
			text = xmlhttp.responseText;
		}
	}
});
