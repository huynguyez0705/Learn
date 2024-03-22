const usernameLogin = document.getElementById('usernameLogin')
const passwordLogin = document.getElementById('passwordLogin')
import { checkUsername, handleInput, showError } from '.js/signup.js'

handleInput(usernameLogin, () => {
	checkUsername(usernameLogin)
})
handleInput(passwordLogin, () => {
	checkUsername(passwordLogin)
})

function checkInput() {
	let isCheck = true
	checkUsername(usernameLogin)
	checkUsername(passwordLogin)
	document.querySelectorAll('.form-control').forEach(control => {
		if (control.classList.contains('error')) {
			isCheck = false
		}
	})
	return isCheck
}
document.querySelector('.form-sign-in').addEventListener('submit', e => {
	e.preventDefault()
	const usernameLgValue = usernameLogin.value
	const passwordLgValue = passwordLogin.value
	let listAccount = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : []
	if (!checkInput()) {
		window.location.replace = 'index.html'
		return
	}
	const checkLogin = listAccount.some(value => {
		return (
			(value.username === usernameLgValue && value.password === passwordLgValue) ||
			(value.email === usernameLgValue && value.password === passwordLgValue)
		)
	})
	if (!checkLogin) {
	} else {
		alert('Đăng nhập thành công')
		window.location.replace = 'index.html'
	}
})
