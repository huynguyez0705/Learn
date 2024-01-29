// script.js

// Chờ cho trang HTML được tải hoàn toàn
document.addEventListener('DOMContentLoaded', function () {
	// Kiểm tra nếu có class 'container' trong HTML
	if (!document.querySelector('.container')) {
		// Nếu không có, thêm một thẻ div mới với class 'container' bao bọc toàn bộ nội dung HTML
		const existingHtml = document.body.innerHTML;
		document.body.innerHTML = `<div class="grid container">
										<div class ="row no-gutters ">
											<div class="col l-9 ">${existingHtml}</div></div>`;
	}
	const p = document.querySelectorAll('p');
	p.forEach((e, i) => {
		const img = e.querySelector('img');
		const em = e.querySelector('em');
		if (img) {
			e.style.textAlign = 'center';
			if (p[i + 1]) {
				p[i + 1].style.textAlign = 'center';
			}
		}
		if (em && !e.previousElementSibling) {
			const newP = document.createElement('p');
			newP.appendChild(em.cloneNode(true));
			document.body.insertBefore(newP, e);
		}
	});
	//accor
	const accors = document.querySelectorAll('.accor__item');
	if (accors) {
		accors.forEach(accor => {
			accor.addEventListener('click', () => {
				const accIconUp = accor.querySelector('.fa-chevron-up');
				const accIconD = accor.querySelector('.fa-chevron-down');
				const accDes = accor.nextElementSibling;
				if (accIconUp && accIconD) {
					accIconUp.classList.toggle('show');
					accIconD.classList.toggle('hide');
					accDes.classList.toggle('show');
				}
			});
		});
	}
	// Lấy đối tượng có lớp là "row-main"
	const rowMain = document.querySelector('.row-main');

	// Kiểm tra xem có "entry-header" trong "row-main" hay không
	const entryHeader = rowMain.querySelector('.entry-header');

	// Kiểm tra xem có "entry-title" trong "entry-header" hay không
	const entryTitle = entryHeader.querySelector('.entry-title');

	// Nếu cả hai điều kiện đều đúng, thêm style vào "row-main"
	if (entryHeader && entryTitle) {
		rowMain.style.justifyContent = 'center';
	}
});
