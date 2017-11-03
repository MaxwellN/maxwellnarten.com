var projectImg = document.querySelectorAll('.project__img');
var nextImg = document.querySelectorAll('.project__img--actions-next');
var prevImg = document.querySelectorAll('.project__img--actions-prev');
var zoomImg = document.querySelectorAll('.project__img--actions-zoom');


//	ID hooks	//
var imgCloseup = document.querySelector('#imgCloseup');
var randstad_rebrand = document.querySelector('.randstad_rebrand');
var randstad_branch = document.querySelector('.randstad_branch');
var randstad_abtest = document.querySelector('.randstad_abtest');
var randstad_settings = document.querySelector('.randstad_settings');

// Initial image counter //
var i = 0;
		rr = 0;
		abt = 0;
		rb = 0;
		rs = 0;

function setAttributes(el, attrs) {
	for(var key in attrs) {
		el.setAttribute(key, attrs[key]);
	};
};

window.onload = function() {

		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[i].src, 'srcset': images.randstad.rebrand[i].srcset, 'sizes': images.randstad.rebrand[i].sizes, 'alt': images.randstad.rebrand[i].alt});

		setAttributes(randstad_branch, {'src': images.randstad.branch[i].src, 'srcset': images.randstad.branch[i].srcset, 'sizes': images.randstad.branch[i].sizes, 'alt': images.randstad.branch[i].alt});

		setAttributes(randstad_abtest, {'src': images.randstad.abtest[i].src, 'srcset': images.randstad.abtest[i].srcset, 'sizes': images.randstad.abtest[i].sizes, 'alt': images.randstad.abtest[i].alt});

		setAttributes(randstad_settings, {'src': images.randstad.settings[i].src, 'srcset': images.randstad.settings[i].srcset, 'sizes': images.randstad.settings[i].sizes, 'alt': images.randstad.settings[i].alt});

}


// Next Image //

function imgNext(element) {
	if (element.parentNode.classList.contains('randstad_rebrand_parent')) {
		rr++;
		if (rr > images.randstad.rebrand.length - 1) {
			rr=0;
		}
		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[rr].src, 'srcset': images.randstad.rebrand[rr].srcset, 'sizes': images.randstad.rebrand[rr].sizes, 'alt': images.randstad.rebrand[rr].alt});
	}
	else if (element.parentNode.classList.contains('randstad_abtest_parent')) {
		abt++;
		if (abt > images.randstad.abtest.length - 1) {
			abt=0;
		}
		setAttributes(randstad_abtest, {'src': images.randstad.abtest[abt].src, 'srcset': images.randstad.abtest[abt].srcset, 'sizes': images.randstad.abtest[abt].sizes, 'alt': images.randstad.abtest[abt].alt});
	}
	else if (element.parentNode.classList.contains('randstad_branch_parent')) {
		rb++;
		if (rb > images.randstad.branch.length - 1) {
			rb=0;
		}
		setAttributes(randstad_branch, {'src': images.randstad.branch[rb].src, 'srcset': images.randstad.branch[rb].srcset, 'sizes': images.randstad.branch[rb].sizes, 'alt': images.randstad.branch[rb].alt});
	}
	else if (element.parentNode.classList.contains('randstad_settings_parent')) {
		rs++;
		if (rs > images.randstad.settings.length - 1) {
			rs=0;
		}
		setAttributes(randstad_settings, {'src': images.randstad.settings[rs].src, 'srcset': images.randstad.settings[rs].srcset, 'sizes': images.randstad.settings[rs].sizes, 'alt': images.randstad.settings[rs].alt});
	}
}


// Next Zoom Image //

function imgNextZoom(element) {
	if (element.previousElementSibling.firstElementChild.classList.contains('randstad_rebrand_zoom')) {
		rr++;
		if (rr > images.randstad.rebrand.length - 1) {
			rr=0;
		}
		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[rr].src, 'srcset': images.randstad.rebrand[rr].srcset, 'sizes': images.randstad.rebrand[rr].sizes, 'alt': images.randstad.rebrand[rr].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.rebrand[rr].src, 'alt': zoomImages.randstad.rebrand[rr].alt});
	}
	else if (element.previousElementSibling.firstElementChild.classList.contains('randstad_abtest_zoom')) {
		abt++;
		if (abt > images.randstad.abtest.length - 1) {
			abt=0;
		}
		setAttributes(randstad_abtest, {'src': images.randstad.abtest[abt].src, 'srcset': images.randstad.abtest[abt].srcset, 'sizes': images.randstad.abtest[abt].sizes, 'alt': images.randstad.abtest[abt].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.abtest[abt].src, 'alt': zoomImages.randstad.abtest[abt].alt});
	}
	else if (element.previousElementSibling.firstElementChild.classList.contains('randstad_branch_zoom')) {
		rb++;
		if (rb > images.randstad.branch.length - 1) {
			rb=0;
		}
		setAttributes(randstad_branch, {'src': images.randstad.branch[rb].src, 'srcset': images.randstad.branch[rb].srcset, 'sizes': images.randstad.branch[rb].sizes, 'alt': images.randstad.branch[rb].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.branch[rb].src, 'alt': zoomImages.randstad.branch[rb].alt});
	}
	else if (element.previousElementSibling.firstElementChild.classList.contains('randstad_settings_zoom')) {
		rs++;
		if (rs > images.randstad.settings.length - 1) {
			rs=0;
		}
		setAttributes(randstad_settings, {'src': images.randstad.settings[rs].src, 'srcset': images.randstad.settings[rs].srcset, 'sizes': images.randstad.settings[rs].sizes, 'alt': images.randstad.settings[rs].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.settings[rs].src, 'alt': zoomImages.randstad.settings[rs].alt});
	}
}


// Previous Image //

function imgPrev(element) {
	if (element.parentNode.classList.contains('randstad_rebrand_parent')) {
		rr--;
		if (rr < 0) {
			rr = images.randstad.rebrand.length - 1;
		}
		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[rr].src, 'srcset': images.randstad.rebrand[rr].srcset, 'sizes': images.randstad.rebrand[rr].sizes, 'alt': images.randstad.rebrand[rr].alt});
	}
	else if (element.parentNode.classList.contains('randstad_abtest_parent')) {
		abt--;
		if (abt < 0) {
			abt = images.randstad.abtest.length - 1;
		}
		setAttributes(randstad_abtest, {'src': images.randstad.abtest[abt].src, 'srcset': images.randstad.abtest[abt].srcset, 'sizes': images.randstad.abtest[abt].sizes, 'alt': images.randstad.abtest[abt].alt});
	}
	else if (element.parentNode.classList.contains('randstad_branch_parent')) {
		rb--;
		if (rb < 0) {
			rb = images.randstad.branch.length - 1;
		}
		setAttributes(randstad_branch, {'src': images.randstad.branch[rb].src, 'srcset': images.randstad.branch[rb].srcset, 'sizes': images.randstad.branch[rb].sizes, 'alt': images.randstad.branch[rb].alt});
	}
	else if (element.parentNode.classList.contains('randstad_settings_parent')) {
		rs--;
		if (rs < 0) {
			rs = images.randstad.settings.length - 1
		}
		setAttributes(randstad_settings, {'src': images.randstad.settings[rs].src, 'srcset': images.randstad.settings[rs].srcset, 'sizes': images.randstad.settings[rs].sizes, 'alt': images.randstad.settings[rs].alt});
	}
}


// Previous Zoom Image //

function imgPrevZoom(element) {
	if (element.nextElementSibling.firstElementChild.classList.contains('randstad_rebrand_zoom')) {
		rr--;
		if (rr < 0) {
			rr = images.randstad.rebrand.length - 1;
		}
		setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[rr].src, 'srcset': images.randstad.rebrand[rr].srcset, 'sizes': images.randstad.rebrand[rr].sizes, 'alt': images.randstad.rebrand[rr].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.rebrand[rr].src, 'alt': zoomImages.randstad.rebrand[rr].alt});
	}
	else if (element.nextElementSibling.firstElementChild.classList.contains('randstad_abtest_zoom')) {
		abt--;
		if (abt < 0) {
			abt = images.randstad.abtest.length - 1;
		}
		setAttributes(randstad_abtest, {'src': images.randstad.abtest[abt].src, 'srcset': images.randstad.abtest[abt].srcset, 'sizes': images.randstad.abtest[abt].sizes, 'alt': images.randstad.abtest[abt].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.abtest[abt].src, 'alt': zoomImages.randstad.abtest[abt].alt});
	}
	else if (element.nextElementSibling.firstElementChild.classList.contains('randstad_branch_zoom')) {
		rb--;
		if (rb < 0) {
			rb = images.randstad.branch.length - 1;
		}
		setAttributes(randstad_branch, {'src': images.randstad.branch[rb].src, 'srcset': images.randstad.branch[rb].srcset, 'sizes': images.randstad.branch[rb].sizes, 'alt': images.randstad.branch[rb].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.branch[rb].src, 'alt': zoomImages.randstad.branch[rb].alt});
	}
	else if (element.nextElementSibling.firstElementChild.classList.contains('randstad_settings_zoom')) {
		rs--;
		if (rs < 0) {
			rs = images.randstad.settings.length - 1
		}
		setAttributes(randstad_settings, {'src': images.randstad.settings[rs].src, 'srcset': images.randstad.settings[rs].srcset, 'sizes': images.randstad.settings[rs].sizes, 'alt': images.randstad.settings[rs].alt});
		setAttributes(imgCloseup, {'src': zoomImages.randstad.settings[rs].src, 'alt': zoomImages.randstad.settings[rs].alt});
	}
}


// Image Zoom //

function imgZoom(element) {
	document.querySelector('.overlay').style.display='inline-block';
	if (element.parentNode.nextElementSibling.classList.contains('randstad_rebrand')) {
		setAttributes(imgCloseup, {'src': zoomImages.randstad.rebrand[rr].src, 'alt': zoomImages.randstad.rebrand[rr].alt});
		imgCloseup.className = "randstad_rebrand_zoom";
	}
	else if (element.parentNode.nextElementSibling.classList.contains('randstad_abtest')) {
		setAttributes(imgCloseup, {'src': zoomImages.randstad.abtest[abt].src, 'alt': zoomImages.randstad.abtest[abt].alt});
		imgCloseup.className = "randstad_abtest_zoom";
	}
	else if (element.parentNode.nextElementSibling.classList.contains('randstad_branch')) {
		setAttributes(imgCloseup, {'src': zoomImages.randstad.branch[rb].src, 'alt': zoomImages.randstad.branch[rb].alt});
		imgCloseup.className = "randstad_branch_zoom";
	}
	else if (element.parentNode.nextElementSibling.classList.contains('randstad_settings')) {
		setAttributes(imgCloseup, {'src': zoomImages.randstad.settings[rs].src, 'alt': zoomImages.randstad.settings[rs].alt});
		imgCloseup.className = "randstad_settings_zoom";
	}
}



// Close Zoom Image //

function closeOverlay(){
	document.querySelector('.overlay').style.display='none';
	imgCloseup.className = '';
}


// Set Zoom Image only on desktop //

(function() {
	if (window.innerWidth > 1099) {
		for (var i = 0; i < zoomImg.length; i++) {
			zoomImg[i].setAttribute('onclick', 'imgZoom(this)');
		}
	}
}());
