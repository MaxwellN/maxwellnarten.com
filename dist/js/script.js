var projectImg = document.getElementsByClassName('project__img');
var nextImg = document.getElementsByClassName('project__img--actions-next');
var prevImg = document.getElementsByClassName('project__img--actions-prev');
var zoomImg = document.getElementsByClassName('project__img--actions-zoom');


//	ID hooks	//
var randstad_rebrand = document.querySelector('.randstad_rebrand');
var imgCloseup = document.getElementById('imgCloseup');
var randstad_branch = document.querySelector('.randstad_branch');
// var randstad_branch_zoom = document.getElementById('randstad_rebrand_zoom');
var randstad_abtest = document.querySelector('.randstad_abtest');


// Initial image counter //
var i = 0;

function setAttributes(el, attrs) {
	for(var key in attrs) {
		el.setAttribute(key, attrs[key]);
	};
};

window.onload = function() {

	setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[i].src, 'srcset': images.randstad.rebrand[i].srcset, 'sizes': images.randstad.rebrand[i].sizes, 'alt': images.randstad.rebrand[i].alt});

	setAttributes(randstad_branch, {'src': images.randstad.branch[i].src, 'srcset': images.randstad.branch[i].srcset, 'sizes': images.randstad.branch[i].sizes, 'alt': images.randstad.branch[i].alt});

	setAttributes(randstad_abtest, {'src': images.randstad.abtest[i].src, 'srcset': images.randstad.abtest[i].srcset, 'sizes': images.randstad.abtest[i].sizes, 'alt': images.randstad.abtest[i].alt});
}


// Rebrand
var rr=0;
function imgNext_rr() {
	rr++;
 	if (rr > images.randstad.rebrand.length - 1) {
		rr=0;
	}
	setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[rr].src, 'srcset': images.randstad.rebrand[rr].srcset, 'sizes': images.randstad.rebrand[rr].sizes, 'alt': images.randstad.rebrand[rr].alt});
	setAttributes(imgCloseup, {'src': zoomImages.randstad.rebrand[rr].src, 'alt': zoomImages.randstad.rebrand[rr].alt});
}
function imgPrev_rr() {
	rr--;
	if (rr < 0) {
		rr = images.randstad.rebrand.length - 1;
	}
	setAttributes(randstad_rebrand, {'src': images.randstad.rebrand[rr].src, 'srcset': images.randstad.rebrand[rr].srcset, 'sizes': images.randstad.rebrand[rr].sizes, 'alt': images.randstad.rebrand[rr].alt});
	setAttributes(imgCloseup, {'src': zoomImages.randstad.rebrand[rr].src, 'alt': zoomImages.randstad.rebrand[rr].alt});
}
function imgZoom(element) {
	document.querySelector('.overlay').style.display='inline-block';
	if (element.parentNode.nextElementSibling.classList.contains('randstad_rebrand')) {
		setAttributes(imgCloseup, {'src': images.randstad.rebrand[rr].src, 'alt': images.randstad.rebrand[rr].alt});
	} else if (element.parentNode.nextElementSibling.classList.contains('randstad_branch')) {
		setAttributes(imgCloseup, {'src': images.randstad.branch[rb].src, 'alt': images.randstad.branch[rb].alt});
	}

}




 // AB Test
var ab=0;
function imgNext_ab() {
	ab++;
 	if (ab > images.randstad.abtest.length - 1) {
		ab=0;
	}
	setAttributes(randstad_abtest, {'src': images.randstad.abtest[ab].src, 'srcset': images.randstad.abtest[ab].srcset, 'sizes': images.randstad.abtest[ab].sizes, 'alt': images.randstad.abtest[ab].alt});
}
function imgPrev_ab() {
	ab--;
	if (ab < 0) {
		ab = images.randstad.abtest.length - 1;
	}
	setAttributes(randstad_abtest, {'src': images.randstad.abtest[ab].src, 'srcset': images.randstad.abtest[ab].srcset, 'sizes': images.randstad.abtest[ab].sizes, 'alt': images.randstad.abtest[ab].alt});
}

// randstad branch
var rb=0;
function imgNext_rb() {
 rb++;
 if (rb > images.randstad.branch.length - 1) {
	 rb=0;
 }
 setAttributes(randstad_branch, {'src': images.randstad.branch[rb].src, 'srcset': images.randstad.branch[rb].srcset, 'sizes': images.randstad.branch[rb].sizes, 'alt': images.randstad.branch[rb].alt});
}
function imgPrev_rb() {
 rb--;
 if (rb < 0) {
	 rb = images.randstad.branch.length - 1;
 }
 setAttributes(randstad_branch, {'src': images.randstad.abtest[rb].src, 'srcset': images.randstad.branch[rb].srcset, 'sizes': images.randstad.branch[rb].sizes, 'alt': images.randstad.branch[rb].alt});
}



function closeOverlay(){
	document.querySelector('.overlay').style.display='none';
}
