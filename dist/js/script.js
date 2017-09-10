// Copy Email On Click

// function copyToClipboard(element) {
// 	var $copy = document.getElementById('email');
//
// }
//
// document.getElementById('menu__work').addEventListener('mouseover', function(){
// 	document.getElementById('menu__work__ul').classList.remove('header__menu__work--hide');
// 	document.getElementById('menu__work__ul').classList.add('header__menu__work--show');
// });

// $(document).ready(function() {
// 	var hamburger = $('.hamburger')
// 	var header__links = $('.header__links')
// 	var projectImg = $('.project__img')
//
// 	function setImage() {
//
// 	}
//
//
//
// });




document.addEventListener("DOMContentLoaded", function() {

  var project__img = document.getElementsByClassName('project__img');

	//	ID hooks	//
	var randstad_rebrand = document.getElementById('randstad_rebrand');
	var randstad_branch = document.getElementById('randstad_branch');


	(function imgAttributes() {
		//	Randstad Rebrand
		// randstad_rebrand.setAttribute('src', images.randstad.rebrand[0].src);
		// randstad_rebrand.setAttribute('srcset', images.randstad.rebrand[0].srcset);
		// randstad_rebrand.setAttribute('sizes', images.randstad.rebrand[0].sizes);
		// randstad_rebrand.setAttribute('alt', images.randstad.rebrand[0].alt);


		function setAttributes(el, attrs) {
		  for(var key in attrs) {
		    el.setAttribute(key, attrs[key]);
		  }
		};
		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[0].src, 'srcset': images.randstad.rebrand[0].srcset, 'sizes': images.randstad.rebrand[0].sizes, 'alt': images.randstad.rebrand[0].alt});
		setAttributes(randstad_branch, {'src': images.randstad.branch[0].src, 'srcset': images.randstad.branch[0].srcset, 'sizes': images.randstad.branch[0].sizes, 'alt': images.randstad.branch[0].alt});
	})();
});
