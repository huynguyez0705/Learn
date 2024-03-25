import { checkUsername, handleInput } from './signup.js'
import toast from './toast.js'

const usernameLogin = document.getElementById('usernameLogin')
const passwordLogin = document.getElementById('passwordLogin')

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
		toast({
			type: 'error',
			title: 'Thất bại',
			msg: 'Bạn chưa nhập tài khoản và mật khẩu',
			duration: 9000
		})
		return
	}

	const checkLogin = listAccount.some(value => {
		return (
			(value.username !== usernameLgValue && value.password !== passwordLgValue) ||
			(value.email !== usernameLgValue && value.password !== passwordLgValue)
		)
	})
	if (!checkLogin) {
		toast({
			type: 'error',
			title: 'Thất bại',
			msg: 'Tài khoản hoặc mật khẩu không đúng',
			duration: 9000
		})
	} else {
		toast({
			type: 'success',
			title: 'Thành công',
			msg: 'Bạn đã đăng nhập thành công',
			duration: 9000
		})
	}
})
