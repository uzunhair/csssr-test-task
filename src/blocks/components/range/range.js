// Range
// При клике на уровень переносить стрелку к текущему уровню

const status = document.querySelectorAll(".range__item");
const togglePosition = document.querySelector(".range__toggle-icon");

for (i = 0; i < status.length; i++) {
	status[i].onclick = function () {
		const positionParent = parseInt(window.getComputedStyle(this).left);
		const positionChildren = parseInt(window.getComputedStyle(this.children[0]).left);
		const toggleContainerWidth = parseInt(document.querySelector('.range__toggle').offsetWidth);
		const positionLine = 100/toggleContainerWidth * (positionParent + positionChildren);
		togglePosition.style.left = `${positionLine}%`;
	};
}

const toggle = document.querySelector(".range__toggle");

toggle.onclick = function (e) {
	const cursorPosition = e.offsetX;
	const toggleContainerWidth = parseInt(document.querySelector('.range__toggle').offsetWidth);
	const positionLine = 100/toggleContainerWidth * cursorPosition;
	togglePosition.style.left = `${positionLine}%`;
};