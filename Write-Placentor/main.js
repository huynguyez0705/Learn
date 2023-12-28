// script.js

// Chờ cho trang HTML được tải hoàn toàn
document.addEventListener('DOMContentLoaded', function () {
	// Kiểm tra nếu có class 'container' trong HTML
	if (!document.querySelector('.container')) {
		// Nếu không có, thêm một thẻ div mới với class 'container' bao bọc toàn bộ nội dung HTML
		const existingHtml = document.body.innerHTML;
		document.body.innerHTML = `<div class="grid container">
										<div class ="row no-gutters ">
											<div class="col l-9 ">${existingHtml}</div>
											<div class="col l-3"></div>
										</div></div>`;
	}
	const p = document.querySelectorAll('p');
	p.forEach(e => {
		const img = e.querySelector('img');
		if (img) {
			e.classList.add('center');
		}
	});
});
