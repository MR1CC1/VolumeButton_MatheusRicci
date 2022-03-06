const btnUp = document.querySelector(".btnUp");
const btnDown = document.querySelector(".btnDown");
const volume = document.querySelector(".volume");
let widthDefault = 50;

btnDown.addEventListener("click", function () {
	if (widthDefault > 0) {
		widthDefault = widthDefault - 10;
		volume.style.width = `${widthDefault}%`;
	}
});

btnUp.addEventListener("click", function () {
	if (widthDefault < 100) {
		widthDefault = widthDefault + 10;
		volume.style.width = `${widthDefault}%`;
	}
});

