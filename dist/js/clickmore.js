var imgCloseup = document.querySelector('#imgCloseup');
var clickmore = document.querySelector('.clickmore');

function setAttributes(el, attrs) {
	for(var key in attrs) {
		el.setAttribute(key, attrs[key]);
	};
};

window.onload = function() {
		setAttributes(clickmore, {'src': images.clickmore.src, 'srcset': images.clickmore.srcset, 'sizes': images.clickmore.sizes, 'alt': images.clickmore.alt});
}


function imgZoom(element) {
	document.querySelector('.overlay').style.display='inline-block';
	if (element.parentNode.nextElementSibling.classList.contains('clickmore')) {
		setAttributes(imgCloseup, {'src': zoomImages.clickmore.src, 'alt': zoomImages.clickmore.alt});
		imgCloseup.className = "hln_redesign_zoom";
	}
}


function closeOverlay(){
	document.querySelector('.overlay').style.display='none';
	imgCloseup.className = '';
}
