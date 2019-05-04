function toggleMenu(visible) {
  	document.querySelector('.menu').classList.toggle('show', visible)
}

function hideMenu(hidden) {
	document.querySelector('.sidebar').classList.toggle('hide', hidden)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  	e.preventDefault();
  	toggleMenu();
  	hideMenu()
});