/*
	minecraft.uz
	Dogecore & Srakasan
	SPURDOHOOK 2019
*/

console.log('%cСеня иди нахуй', 'background: gray; color: white;');

document.addEventListener("DOMContentLoaded", () => {
	const clickSound = new Audio('sounds/click.ogg');
	const buttonArray = document.getElementsByClassName('link');
	const randomAudio = `sounds/menu${Math.round(0.5 + Math.random() * 4)}.ogg`;
	
	for (let button of buttonArray) {
		button.addEventListener("click", () => {
			clickSound.play();
			setTimeout(() => {
				window.location.href = button.dataset.href;
			}, 200);
		});
	}
	
	if (window.chrome) {
		let iframe = document.createElement("iframe");
		iframe.style = "display: none;";
		iframe.allow = "autoplay";
		iframe.src = randomAudio;
		document.body.appendChild(iframe);
	}
	else {
		let menuAudio = new Audio(randomAudio);
		let main = document.getElementsByTagName("main")[0];
		let audioButton = document.createElement("div");
		audioButton.className = "button active audio";
		audioButton.innerHTML = "Enable audio";
		main.appendChild(audioButton);

		audioButton.addEventListener("click", () => {
			if (!menuAudio.paused) return;
			clickSound.play();
			menuAudio.play();
			audioButton.className = "button inactive audio";
		});
	}
});