// Range
// При клике на уровень переносить стрелку к текущему уровню

const status = document.querySelectorAll(".range__item");
const togglePosition = document.querySelector(".range__toggle-icon");

for (i = 0; i < status.length; i++) {
	status[i].onclick = function () {

		if (document.documentElement.clientWidth > 768) {
			const positionParent = parseInt(window.getComputedStyle(this).left);
			const positionChildren = parseInt(window.getComputedStyle(this.children[0]).left);
			const toggleContainerWidth = parseInt(document.querySelector('.range__toggle').offsetWidth);
			const positionLine = 100/toggleContainerWidth * (positionParent + positionChildren);
			togglePosition.style.left = `${positionLine}%`;

		} else {
			const positionParent = parseInt(window.getComputedStyle(this).top);
			const positionChildren = parseInt(window.getComputedStyle(this.children[0]).top);
			const toggleContainerWidth = parseInt(document.querySelector('.range__toggle').offsetHeight);
			const positionLine = 100/toggleContainerWidth * (positionParent + positionChildren);
			togglePosition.style.top = `${positionLine}%`;
		}
	};
}

const toggle = document.querySelector(".range__toggle");

toggle.onclick = function (e) {

	if (document.documentElement.clientWidth > 768) {
		const cursorPosition = e.offsetX;
		const toggleContainerWidth = parseInt(document.querySelector('.range__toggle').offsetWidth);
		const positionLine = 100 / toggleContainerWidth * cursorPosition;
		togglePosition.style.left = `${positionLine}%`;
	} else {
		const cursorPosition = e.offsetY;
		const toggleContainerWidth = parseInt(document.querySelector('.range__toggle').offsetHeight);
		const positionLine = 100 / toggleContainerWidth * cursorPosition;
		togglePosition.style.top = `${positionLine}%`;
	}
};