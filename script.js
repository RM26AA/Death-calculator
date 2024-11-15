
window.onload = function() {
	let button = document.getElementById("calculate");
	button.addEventListener("click", calculateLove);
}

function calculateLove() {
	let yourName = document.getElementById("your-name").value;
	let crushName = document.getElementById("crush-name").value;
	let age = document.getElementById("age").value;
	let birth = document.getElementById("birth").value;
	
	if (yourName != "" && crushName != "") {
		let percentage = Math.floor(Math.random() * 101);	//0-.99999 * 101 -> 0-100.999, use math.floor to remove decimal and round down so 0-100
		//document.getElementById("result-message").innerText = yourName + " " + crushName + " chances of DEATH tommorrow is: "
		document.getElementById("result-message").innerText = yourName + " " + crushName + " (at age " + age + "), originally born in "
		+ birth + " and the chances of DEATH tommorrow for them is: "
		document.getElementById("result-percentage").innerText = percentage.toString() + "%";
	}
}