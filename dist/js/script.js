var projectImg = document.getElementsByClassName('project__img');
var nextImg = document.getElementsByClassName('project__img--actions-next');
var prevImg = document.getElementsByClassName('project__img--actions-prev');
var zoomImg = document.getElementsByClassName('project__img--actions-zoom');


//	ID hooks	//
var randstad_rebrand = document.getElementById('randstad_rebrand');
var randstad_branch = document.getElementById('randstad_branch');
var randstad_ab_test = document.getElementById('randstad_ab_test');


// var portfolioImg = (function() {

	function setAttributes(el, attrs) {
	  for(var key in attrs) {
	    el.setAttribute(key, attrs[key]);
	  };
	};



function imgNext() {
	for (i = 0; i <= images.randstad.rebrand.length; i++) {
		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[i].src, 'srcset': images.randstad.rebrand[i].srcset, 'sizes': images.randstad.rebrand[i].sizes, 'alt': images.randstad.rebrand[i].alt});
	}
}
function imgPrev() {
	for (i = 0; i <= images.randstad.rebrand.length; i--) {
		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[i].src, 'srcset': images.randstad.rebrand[i].srcset, 'sizes': images.randstad.rebrand[i].sizes, 'alt': images.randstad.rebrand[i].alt});
	}
}


// (function(window, document) {
	setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[0].src, 'srcset': images.randstad.rebrand[0].srcset, 'sizes': images.randstad.rebrand[0].sizes, 'alt': images.randstad.rebrand[0].alt});

	setAttributes(randstad_branch, {'src': images.randstad.branch[0].src, 'srcset': images.randstad.branch[0].srcset, 'sizes': images.randstad.branch[0].sizes, 'alt': images.randstad.branch[0].alt});

	setAttributes(randstad_ab_test, {'src': images.randstad.abtest[0].src, 'srcset': images.randstad.abtest[0].srcset, 'sizes': images.randstad.abtest[0].sizes, 'alt': images.randstad.abtest[0].alt});
// })(window, document);


// });




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
