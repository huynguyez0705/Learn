function toast({ type = '', title = '', msg = '', duration = 0 }) {
	const toastContainer = document.getElementById('toast__container')
	if (toastContainer) {
		const toast = document.createElement('div')
		// auto Remove Toast
		const removeToast = setTimeout(function () {
			toastContainer.removeChild(toast)
		}, duration + 1000)
		// Remove when click
		toast.onclick = function (e) {
			if (e.target.closest('.toast__close')) {
				toastContainer.removeChild(toast)
				clearTimeout(removeToast)
			}
		}
		const icons = {
			success: 'fas fa-check-circle',
			error: 'fas fa-exclamation-circle'
		}
		const icon = icons[type]
		const delay = (duration / 1000).toFixed(2)
		toast.classList.add('toast', `toast--${type}`)
		toast.style.animation = `slideInLeft .5s ease, fadeOut 1s ${delay}s forwards`
		toast.innerHTML = `
    <div class="toast__icon">
					<i class="${icon}"></i>
				</div>
				<div class="toast__body">
					<h3 class="toast__title">${title}</h3>
					<p class="toast__msg">${msg}</p>
				</div>
				<div class="toast__close">
					<i class="fas fa-times"></i>
				</div>
    `
		toastContainer.appendChild(toast)
	}
}
export default toast
