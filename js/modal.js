var quitBtn = document.getElementById('quit-btn');

var loginBtn = document.getElementById('login-btn')

var overlay = document.getElementById('overlay');

var close = document.getElementById('close-btn');

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.style.display = 'none';
  })
  document.querySelector('#overlay').style.display = 'flex';
  document.querySelector(modal).style.display = 'block';
}

loginBtn.onclick = function() {
	openModal('#loginModal')
}

quitBtn.onclick = function() {
	openModal('#quitModal')
}

function closeModal() {
	overlay.style.display = 'none';
}

close.onclick = function() {
	closeModal()
}

overlay.onclick = function(e) {
	if (e.target === this) {
		closeModal()
	}
}

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})