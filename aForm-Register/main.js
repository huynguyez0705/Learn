function Validator(options) {
	var formElement = document.querySelector(options.form)
	// Hàm thực hiện validate
	function Validate(inpuElement, rule) {
		const errorElement = inpuElement.parentElement.querySelector(options.errorSlector)
		const errorMessage = rule.test(inpuElement.value)
		if (errorMessage) {
			errorElement.innerText = errorMessage
			inpuElement.parentElement.classList.add('error')
		} else {
			errorElement.innerText = ''
			inpuElement.parentElement.classList.add('success')
			inpuElement.parentElement.classList.remove('error')
		}
	}
	function validateInput(inpuElement, rule) {
		const errorElement = inpuElement.parentElement.querySelector(options.errorSlector)
		const errorMessage = rule.test(inpuElement.value)
		if (!errorMessage) {
			errorElement.innerText = ''
			inpuElement.parentElement.classList.add('success')
			inpuElement.parentElement.classList.remove('error')
		}
	}
	if (formElement) {
		options.rule.forEach(function (rule) {
			const inpuElement = formElement.querySelector(rule.selector)

			if (inpuElement) {
				inpuElement.addEventListener('blur', function () {
					Validate(inpuElement, rule)
				})
				inpuElement.addEventListener('input', function () {
					validateInput(inpuElement, rule)
				})
			}
		})
	}
}

Validator.isRequeried = function (selector) {
	return {
		selector,
		test: function (value) {
			return value.trim() ? undefined : 'Bạn chưa nhập Username'
		},
	}
}
Validator.isEmail = function (selector) {
	return {
		selector,
		test: function (value) {
			const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
			return emailRegex.test(value) ? undefined : 'Địa chỉ email không hợp lệ'
		},
	}
}
Validator.isLength = function (selector, min, max) {
	return { selector, min, max }
}
