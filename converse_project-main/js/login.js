const btnLogin = document.getElementById('btn-login')
btnLogin.addEventListener('click', e => {
	e.preventDefault()
	const usernameEle = document.getElementById('username').value
	const emailEle = document.getElementById('email').value
	const passwordEle = document.getElementById('password').value
	let user = localStorage.getItem(username.value)
	console.log(user)
	let data = JSON.parse(user)

	if (user == null) {
		alert('Vui lòng nhập đầy đủ thông tin đăng nhập !')
	} else if (usernameEle == data.username && emailEle == data.email && passwordEle == data.password) {
		alert('Login success')
		window.location.href = 'index.html'
	} else {
		alert('Login false')
	}
})
