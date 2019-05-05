function toggleMenu(visible) {
  	document.querySelector('.menu').classList.toggle('show', visible)
}

function hideMenu(hidden) {
	document.querySelector('.sidebar').classList.toggle('hide', hidden)
	document.querySelector('.main-content').classList.toggle('full-width', hidden)
	document.querySelector('.top-bar').classList.toggle('full-width', hidden)
	document.querySelector('.logo').classList.toggle('hidden', hidden)
	document.querySelector('.contacts').classList.toggle('none', hidden)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  	e.preventDefault();
  	toggleMenu();
  	hideMenu()
});