// Range
// При клике на уровень переносить стрелку к текущему уровню

const status = document.querySelectorAll(".range__item");
const togglePosition = document.querySelector(".range__toggle-icon");

for (i = 0; i < status.length; i++) {
	status[i].onclick = function () {

		if (document.documentElement.clientWidth > 767) {
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

	if (document.documentElement.clientWidth > 767) {
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

window.addEventListener('resize', () => {
	const leftStyle = parseInt(togglePosition.style.left);
	const topStyle = parseInt(togglePosition.style.top);

	if (document.documentElement.clientWidth > 767) {
		togglePosition.style.top = 0;
		if(topStyle > 0 && topStyle < 99) {
			togglePosition.style.left = `${topStyle - 2.5}%`;
		} else {
			togglePosition.style.left = `${topStyle}%`;
		}
	}

	if (document.documentElement.clientWidth < 768) {
		togglePosition.style.left = 0;

		if(leftStyle > 0 && leftStyle < 99) {
			togglePosition.style.top = `${leftStyle + 4}%`;
		} else {
			togglePosition.style.top = `${leftStyle}%`;
		}
	}
});