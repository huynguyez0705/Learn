function isValidEmail(email) {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
	return emailRegex.test(email)
}

function isValidPhoneNumber(phone) {
	const phoneRegex = /^[0-9]{10,11}$/
	return phoneRegex.test(phone)
}

document.addEventListener('DOMContentLoaded', function () {
	let saveButton = document.getElementById('btnsave')
	let resetButton = document.getElementById('btnreset')

	saveButton.addEventListener('click', function () {
		// Di chuyển khai báo biến vào trong sự kiện click
		const nameInput = document.getElementById('name')
		const emailInput = document.getElementById('mail')
		const phoneInput = document.getElementById('phone')
		const genderElement = document.querySelector('input[name=gioiTinh]:checked')

		const name = nameInput.value
		const email = emailInput.value
		const phone = phoneInput.value

		if (!name && !email && !phone && !genderElement) {
			alert('Nhập đầy đủ thông tin học sinh')
			return false
		}

		const conditions = [
			{ condition: name.trim() !== '', message: 'Nhập tên học sinh' },
			{ condition: isValidEmail(email), message: 'Email không đúng định dạng' },
			{
				condition: isValidPhoneNumber(phone),
				message: 'Số điện thoại không đúng định dạng'
			},
			{ condition: genderElement !== null, message: 'Chọn giới tính' }
		]

		for (const condition of conditions) {
			if (!condition.condition) {
				alert(condition.message)
				return false
			}
		}

		let listStudent = JSON.parse(localStorage.getItem('students')) || []
		const students = {
			name: name,
			email: email,
			phone: phone,
			gender: genderElement.value
		}
		listStudent.push(students)
		localStorage.setItem('students', JSON.stringify(listStudent))
		alert('Đã lưu thông tin học sinh')
	})

	if (resetButton) {
		resetButton.addEventListener('click', function () {
			const nameInput = document.getElementById('name')
			const emailInput = document.getElementById('mail')
			const phoneInput = document.getElementById('phone')

			nameInput.value = ''
			emailInput.value = ''
			phoneInput.value = ''
			document.getElementById('nam').checked = false
			document.getElementById('nu').checked = false
		})
	}
})
