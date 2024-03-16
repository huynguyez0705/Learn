const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cfpassword = document.getElementById('cfpassword')
function checkName() {
	const errorcode = document.getElementById('errorName')
	const regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/
	username.addEventListener('blur', () => {
		if (username.value == '' || username.value == null) {
			errorcode.innerHTML = 'Họ tên không được để trống !'
		} else if (!regexName.test(username.value)) {
			errorcode.innerHTML = 'Họ tên không hợp lệ !'
		} else {
			errorcode.innerText = ''
			return username.value
		}
	})
}
checkName()

function checkEmail() {
	const errorEmail = document.getElementById('errorEmail')
	const regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim
	email.addEventListener('blur', () => {
		if (email.value == '' || email.value == null) {
			errorEmail.innerHTML = 'Email không được để trống !'
		} else if (!regexEmail.test(email.value)) {
			errorEmail.innerHTML = 'Email không hợp lệ !'
		} else {
			errorEmail.innerText = ''
			return email.value
		}
	})
}
checkEmail()

function checkPass(min) {
	const errorPass = document.getElementById('errorPass')
	password.addEventListener('blur', () => {
		if (password.value == '' || password.value == null) {
			errorPass.innerHTML = 'Mật khẩu không được để trống !'
		}
	})
}
checkPass()

function checkCfPass() {
	const errorCfPass = document.getElementById('errorCfPass')
	cfpassword.addEventListener('blur', () => {
		if (cfpassword.value == '' || cfpassword.value == null) {
			errorCfPass.innerHTML = 'Vui lòng nhập lại mật khẩu !'
		} else if (cfpassword.value !== password.value) {
			errorCfPass.innerHTML = 'Xác nhận mật khẩu không đúng !'
		}
	})
}
checkCfPass()
const btnSignUp = document.getElementById('btn-signup')
btnSignUp.addEventListener('click', e => {
	e.preventDefault()

	let user = {
		username: username.value,
		email: email.value,
		password: password.value,
		cfpass: cfpassword.value
	}

	const json = JSON.stringify(user)
	if (user.username != '' && user.email != '' && user.password != '' && user.cfpass != '') {
		localStorage.setItem(username.value, json)
		alert('Sign Up Success')
		window.location.href = 'login.html'
	} else {
		alert('Vui lòng nhập đầy đủ thông tin !')
	}
})
