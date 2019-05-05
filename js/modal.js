var quitBtn = document.getElementById('quit-btn');

var loginBtn = document.getElementById('login-btn');

var messageBtn = document.getElementById('message');

var overlay = document.getElementById('overlay');

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.style.display = 'none';
  })
  document.querySelector('#overlay').style.display = 'flex';
  document.querySelector(modal).style.display = 'block';
}


function closeModal() {
  overlay.style.display = 'none';
}

document.querySelectorAll('#overlay .close-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

loginBtn.onclick = function() {
	openModal('#loginModal')
}

quitBtn.onclick = function() {
	openModal('#quitModal')
}

messageBtn.onclick = function() {
  openModal('#messageModal')
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