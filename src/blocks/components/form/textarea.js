const textarea = document.querySelector('textarea');
const initialHeight = 60;

const resize = () => {
	textarea.style.height = `${initialHeight}px`;
	const height = textarea.scrollHeight;
	textarea.style.height = `${height + initialHeight}px`;
};

resize();

textarea.addEventListener('input', resize);