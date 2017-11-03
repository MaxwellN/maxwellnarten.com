var hamburger = document.querySelector('.header__links');
var triangle = document.querySelector('.triangle');
function openMenu() {
	hamburger.classList.toggle('header__links');
	hamburger.classList.toggle('header__links--active');


	triangle.style.display = 'none';
	

}
