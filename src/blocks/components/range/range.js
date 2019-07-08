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

window.onresize = () => {

	if (document.documentElement.clientWidth > 768) {
		let leftPos = togglePosition.style.left;
		const topPos = togglePosition.style.top;
		if(topPos > 0) {
			togglePosition.style.top = 0;
			togglePosition.style.left = topPos;

		}
		console.log(leftPos, topPos, 'up')
	}

	if (document.documentElement.clientWidth < 767) {
		let leftPos = togglePosition.style.left;
		const topPos = togglePosition.style.top;
		if(leftPos > 0) {
			togglePosition.style.top = leftPos;
			togglePosition.style.left = 0;
		}
		console.log(leftPos, topPos, 'down')
	}

};