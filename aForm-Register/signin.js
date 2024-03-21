const usernameLogin = document.getElementById('usernameLogin')
const passwordLogin = document.getElementById('passwordLogin')
import { checkUsername, handleInput, showError } from './signup.js'

handleInput(usernameLogin, () => {
	checkUsername(usernameLogin)
})
handleInput(passwordLogin, () => {
	checkUsername(passwordLogin)
})

document.querySelector('.form-sign-in').addEventListener('submit', e => {
	e.preventDefault()
})
