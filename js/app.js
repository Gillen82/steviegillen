'use strict';

window.addEventListener('scroll', reveal);

function reveal() {
	let reveals = document.querySelectorAll('.reveal');

	for (var i = 0; i < reveals.length; i++) {
		var wh = window.innerHeight;
		var rt = reveals[i].getBoundingClientRect().top;
		const rp = 250;

		if (rt < wh - rp) {
			reveals[i].classList.add('active');
		}
	}
}
