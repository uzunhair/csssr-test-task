const textarea = document.querySelector('.form__control_textarea');
const initialHeight = 50;

const textareaResize = () => {
	textarea.style.height = `${initialHeight}px`;
	const height = textarea.scrollHeight;
	textarea.style.height = `${height + initialHeight}px`;
};

textareaResize();

textarea.addEventListener('input', textareaResize);