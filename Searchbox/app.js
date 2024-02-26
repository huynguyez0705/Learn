const searchBtn = document.querySelector('.search-box__btn');
searchBtn.addEventListener('click', function () {
	this.parentElement.classList.toggle('open');
	this.previousElementSibling.focus();
});
function ischeckEmail(input) {
	const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
	return reg.test(input);
}
