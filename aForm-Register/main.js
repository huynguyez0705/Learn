const passwordContainers = document.querySelectorAll('.password-container')

passwordContainers.forEach(container => {
	const passwordInput = container.querySelector('input[type="password"]')
	const showPasswordIcon = container.querySelector('.show-password')

	showPasswordIcon.addEventListener('click', () => {
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text'
			showPasswordIcon.classList.replace('fa-eye', 'fa-eye-slash')
		} else {
			passwordInput.type = 'password'
			showPasswordIcon.classList.replace('fa-eye-slash', 'fa-eye')
		}
	})
})
