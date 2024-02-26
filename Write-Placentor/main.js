const container = document.querySelector('.container');
if (!container) {
	const body = document.body.innerHTML;
	document.body.innerHTML = `<div class="container">${body}</div>`;
}
