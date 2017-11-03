var projectImg = document.querySelectorAll('.project__img');
var nextImg = document.querySelectorAll('.project__img--actions-next');
var prevImg = document.querySelectorAll('.project__img--actions-prev');
var zoomImg = document.querySelectorAll('.project__img--actions-zoom');


//	ID hooks	//
var imgCloseup = document.querySelector('#imgCloseup');
var hln_redesign = document.querySelector('.hln_redesign');
var hln_schedule = document.querySelector('.hln_schedule');
var hln_prototypes = document.querySelector('.hln_prototypes');
// Initial image counter //

var i = 0;
		hlnr = 0;
		hlns = 0;
		hlnp = 0;

function setAttributes(el, attrs) {
	for(var key in attrs) {
		el.setAttribute(key, attrs[key]);
	};
};

window.onload = function() {

		setAttributes(hln_redesign, {'src': images.hln.redesign[i].src, 'srcset': images.hln.redesign[i].srcset, 'sizes': images.hln.redesign[i].sizes, 'alt': images.hln.redesign[i].alt});

		setAttributes(hln_schedule, {'src': images.hln.schedule[i].src, 'srcset': images.hln.schedule[i].srcset, 'sizes': images.hln.schedule[i].sizes, 'alt': images.hln.schedule[i].alt});

		setAttributes(hln_prototypes, {'src': images.hln.prototypes[i].src, 'srcset': images.hln.prototypes[i].srcset, 'sizes': images.hln.prototypes[i].sizes, 'alt': images.hln.prototypes[i].alt});

}


// Next Image //

function imgNext(element) {
	if (element.parentNode.classList.contains('hln_redesign_parent')) {
		hlnr++;
		if (hlnr > images.hln.redesign.length - 1) {
			hlnr=0;
		}
		setAttributes(hln_redesign, {'src': images.hln.redesign[hlnr].src, 'srcset': images.hln.redesign[hlnr].srcset, 'sizes': images.hln.redesign[hlnr].sizes, 'alt': images.hln.redesign[hlnr].alt});
	}
	else if (element.parentNode.classList.contains('hln_schedule_parent')) {
		hlns++;
		if (hlns > images.hln.schedule.length - 1) {
			hlns=0;
		}
		setAttributes(hln_schedule, {'src': images.hln.schedule[hlns].src, 'srcset': images.hln.schedule[hlns].srcset, 'sizes': images.hln.schedule[hlns].sizes, 'alt': images.hln.schedule[hlns].alt});
	}
	else if (element.parentNode.classList.contains('hln_prototypes_parent')) {
		hlnp++;
		if (hlnp > images.hln.prototypes.length - 1) {
			hlnp=0;
		}
		setAttributes(hln_prototypes, {'src': images.hln.prototypes[hlnp].src, 'srcset': images.hln.prototypes[hlnp].srcset, 'sizes': images.hln.prototypes[hlnp].sizes, 'alt': images.hln.prototypes[hlnp].alt});
	}
}


// Next Zoom Image //

function imgNextZoom(element) {
	if (element.previousElementSibling.firstElementChild.classList.contains('hln_redesign_zoom')) {
		hlnr++;
		if (hlnr > images.hln.redesign.length - 1) {
			hlnr=0;
		}
		setAttributes(hln_redesign, {'src': images.hln.redesign[hlnr].src, 'srcset': images.hln.redesign[hlnr].srcset, 'sizes': images.hln.redesign[hlnr].sizes, 'alt': images.hln.redesign[hlnr].alt});
		setAttributes(imgCloseup, {'src': zoomImages.hln.redesign[hlnr].src, 'alt': zoomImages.hln.redesign[hlnr].alt});
	}
	else if (element.previousElementSibling.firstElementChild.classList.contains('hln_schedule_zoom')) {
		hlns++;
		if (hlns > images.hln.schedule.length - 1) {
			hlns=0;
		}
		setAttributes(hln_schedule, {'src': images.hln.schedule[hlns].src, 'srcset': images.hln.schedule[hlns].srcset, 'sizes': images.hln.schedule[hlns].sizes, 'alt': images.hln.schedule[hlns].alt});
		setAttributes(imgCloseup, {'src': zoomImages.hln.schedule[hlns].src, 'alt': zoomImages.hln.schedule[hlns].alt});
	}
	else if (element.previousElementSibling.firstElementChild.classList.contains('hln_prototypes_zoom')) {
		hlnp++;
		if (hlnp > images.hln.prototypes.length - 1) {
			hlnp=0;
		}
		setAttributes(hln_prototypes, {'src': images.hln.prototypes[hlnp].src, 'srcset': images.hln.prototypes[hlnp].srcset, 'sizes': images.hln.prototypes[hlnp].sizes, 'alt': images.hln.prototypes[hlnp].alt});
		setAttributes(imgCloseup, {'src': zoomImages.hln.prototypes[hlnp].src, 'alt': zoomImages.hln.prototypes[hlnp].alt});
	}
}


// Previous Image //

function imgPrev(element) {
	if (element.parentNode.classList.contains('hln_redesign_parent')) {
		hlnr--;
		if (hlnr < 0) {
			hlnr = images.hln.redesign.length - 1;
		}
		setAttributes(hln_redesign, {'src': images.hln.redesign[hlnr].src, 'srcset': images.hln.redesign[hlnr].srcset, 'sizes': images.hln.redesign[hlnr].sizes, 'alt': images.hln.redesign[hlnr].alt});
	}
	else if (element.parentNode.classList.contains('hln_schedule_parent')) {
		hlns--;
		if (hlns < 0) {
			hlns = images.hln.schedule.length - 1;
		}
		setAttributes(hln_schedule, {'src': images.hln.schedule[hlns].src, 'srcset': images.hln.schedule[hlns].srcset, 'sizes': images.hln.schedule[hlns].sizes, 'alt': images.hln.schedule[hlns].alt});
	}
	else if (element.parentNode.classList.contains('hln_prototypes_parent')) {
		hlnp--;
		if (hlnp < 0) {
			hlnp = images.hln.prototypes.length - 1;
		}
		setAttributes(hln_prototypes, {'src': images.hln.prototypes[hlnp].src, 'srcset': images.hln.prototypes[hlnp].srcset, 'sizes': images.hln.prototypes[hlnp].sizes, 'alt': images.hln.prototypes[hlnp].alt});
	}
}


// Previous Zoom Image //

function imgPrevZoom(element) {
	if (element.nextElementSibling.firstElementChild.classList.contains('hln_redesign_zoom')) {
		hlnr--;
		if (hlnr < 0) {
			hlnr = images.hln.redesign.length - 1;
		}
		setAttributes(hln_redesign, {'src': images.hln.redesign[hlnr].src, 'srcset': images.hln.redesign[hlnr].srcset, 'sizes': images.hln.redesign[hlnr].sizes, 'alt': images.hln.redesign[hlnr].alt});
		setAttributes(imgCloseup, {'src': zoomImages.hln.redesign[hlnr].src, 'alt': zoomImages.hln.redesign[hlnr].alt});
	}
	else if (element.nextElementSibling.firstElementChild.classList.contains('hln_schedule_zoom')) {
		hlns--;
		if (hlns < 0) {
			hlns = images.hln.schedule.length - 1;
		}
		setAttributes(hln_schedule, {'src': images.hln.schedule[hlns].src, 'srcset': images.hln.schedule[hlns].srcset, 'sizes': images.hln.schedule[hlns].sizes, 'alt': images.hln.schedule[hlns].alt});
		setAttributes(imgCloseup, {'src': zoomImages.hln.schedule[hlns].src, 'alt': zoomImages.hln.schedule[hlns].alt});
	}
	else if (element.nextElementSibling.firstElementChild.classList.contains('hln_prototypes_zoom')) {
		hlnp--;
		if (hlnp < 0) {
			hlnp = images.hln.prototypes.length - 1;
		}
		setAttributes(hln_prototypes, {'src': images.hln.prototypes[hlnp].src, 'srcset': images.hln.prototypes[hlnp].srcset, 'sizes': images.hln.prototypes[hlnp].sizes, 'alt': images.hln.prototypes[hlnp].alt});
		setAttributes(imgCloseup, {'src': zoomImages.hln.prototypes[hlnp].src, 'alt': zoomImages.hln.prototypes[hlnp].alt});
	}
}


// Image Zoom //

function imgZoom(element) {
	document.querySelector('.overlay').style.display='inline-block';
	if (element.parentNode.nextElementSibling.classList.contains('hln_redesign')) {
		setAttributes(imgCloseup, {'src': zoomImages.hln.redesign[hlnr].src, 'alt': zoomImages.hln.redesign[hlnr].alt});
		imgCloseup.className = "hln_redesign_zoom";
	}
	else if (element.parentNode.nextElementSibling.classList.contains('hln_schedule')) {
		setAttributes(imgCloseup, {'src': zoomImages.hln.schedule[hlns].src, 'alt': zoomImages.hln.schedule[hlns].alt});
		imgCloseup.className = "hln_schedule_zoom";
	}
	else if (element.parentNode.nextElementSibling.classList.contains('hln_prototypes')) {
		setAttributes(imgCloseup, {'src': zoomImages.hln.prototypes[hlnp].src, 'alt': zoomImages.hln.prototypes[hlnp].alt});
		imgCloseup.className = "hln_prototypes_zoom";
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
