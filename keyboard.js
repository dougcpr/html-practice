let alphabet = "abcdefghijklmnopqrstuvwxyz";
let letters = alphabet.split('');
let keyboard = document.getElementsByClassName("keyboard");
let textarea = document.getElementsByClassName("textarea");

keyboard[0].addEventListener("click", (event) => {
	let letter = event.target.innerText;
	let l = event.shiftKey ? letter.toUpperCase() : letter;
	textarea[0].value = textarea[0].value + l;
});

letters.forEach((letter) => {
	let key = document.createElement("div");
	key.className = "letter";
	let keyText = document.createTextNode(letter);
	key.appendChild(keyText);
	keyboard[0].appendChild(key);
});

