const container = document.querySelector('.container')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cfpassword = document.getElementById('cfpassword')

const btnsignUp = document.getElementById('signUp')
const btnsignIn = document.getElementById('signIn')

btnsignIn.addEventListener('click', () => {
	container.classList.add('active-panel')
})
btnsignUp.addEventListener('click', () => {
	container.classList.remove('active-panel')
})

export function showError(input, message) {
	const inputElement = input.parentElement
	const errorElement = inputElement.querySelector('small')
	errorElement.innerText = message
	inputElement.classList.add('error')
	inputElement.classList.remove('success')
}
function showSuccess(input) {
	const inputElement = input.parentElement
	const errorElement = inputElement.querySelector('small')
	errorElement.innerText = ''
	inputElement.classList.add('success')
	inputElement.classList.remove('error')
}
export function checkUsername(input) {
	const inputElement = input.value.trim()
	const regex = /^[a-zA-Z0-9!@#$%^&*()_+-=<>?]{1,15}$/
	if (inputElement === '' || inputElement === null) {
		showError(input, `${getNameInput(input)} không được để trống`)
	} else if (!regex.test(inputElement)) {
		showError(input, `${getNameInput(input)} không hợp lệ`)
	} else showSuccess(input)
	return inputElement
}

function checkEmail(input) {
	const inputElement = input.value.trim()
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	if (inputElement === '' || inputElement === null) {
		showError(input, 'Email không được để trống')
	} else if (!regex.test(inputElement)) {
		showError(input, 'Email không chính xác')
	} else showSuccess(input)
	return input
}
function isLength(input, min, max) {
	const inputElement = input.value.trim()
	if (inputElement === '' || inputElement === null) {
		showError(input, 'Password không được để trống')
	} else if (inputElement.length < min) {
		showError(input, `Password không được ít hơn ${min} ký tự`)
		return inputElement
	} else if (inputElement.length > max) {
		showError(input, `Password không được dài hơn ${max} ký tự`)
	} else showSuccess(input)
	return input
}
function confirmPassword(input, input2) {
	const inputElement = input.value.trim()
	const inputElement2 = input2.value.trim()
	if (inputElement === '' || inputElement === null) {
		showError(input, 'Confirm Password không được để trống')
	} else if (inputElement !== inputElement2) {
		showError(input, 'Xác nhận mật khẩu không đúng')
	} else showSuccess(input)
	return inputElement
}
function showPassword(inputs) {
	inputs.forEach(function (input) {
		const formControl = input.parentElement
		const iconElement = formControl.querySelector('.icon-pw')
		let isPasswordVisible = false
		iconElement.onclick = function () {
			isPasswordVisible = !isPasswordVisible
			if (isPasswordVisible) {
				iconElement.classList.replace('fa-eye', 'fa-eye-slash')
				input.type = 'text'
			} else {
				iconElement.classList.replace('fa-eye-slash', 'fa-eye')
				input.type = 'password'
			}
		}
	})
}

export function handleInput(inputElement, validationFunction) {
	if (inputElement) {
		inputElement.addEventListener('blur', () => {
			validationFunction(inputElement)
		})
		inputElement.addEventListener('input', () => {
			validationFunction(inputElement)
		})
		return inputElement
	}
}
handleInput(username, () => {
	checkUsername(username)
})
handleInput(email, () => {
	checkEmail(email)
})
handleInput(password, () => {
	isLength(password, 8, 20)
})
handleInput(cfpassword, () => {
	confirmPassword(cfpassword, password)
})
showPassword([password, passwordLogin, cfpassword])

export function checkInput() {
	let isCheck = true
	checkUsername(username)
	checkEmail(email)
	isLength(password, 8, 20)
	confirmPassword(cfpassword, password)
	document.querySelectorAll('.form-control').forEach(control => {
		if (control.classList.contains('error')) {
			isCheck = false
		}
	})
	return isCheck
}
function getNameInput(input) {
	return input.id.charAt(0).toUpperCase() + input.id.toLowerCase().slice(1)
}

document.querySelector('.form-sign-up').addEventListener('submit', e => {
	e.preventDefault()
	let user = {
		username: username.value,
		email: email.value,
		password: password.value,
		cfpassword: cfpassword.value
	}
	const jsonUser = JSON.stringify(user)
	if (!checkInput()) {
		return
	} else {

		alert('đăng ký thành công')
		localStorage.setItem('account', jsonUser)
		history.pushState({}, '', 'index.html')
		window.location.reload()
	}
})
