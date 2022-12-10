function setBlock1() {
	const block1 = document.getElementById('block-1');
	let itemsBlock1 = block1.querySelectorAll('#item');

	for (let i = 0; i < itemsBlock1.length; i=i+2) {
		itemsBlock1[i].classList.add('decoration', 'top-right');
	}
	for (let i=2; i<itemsBlock1.length; i=i+4) {
		itemsBlock1[i].classList.remove('top-right');
		itemsBlock1[i].classList.add('orange-decoration', 'bottom-right');
	}
}
function setBlock2() {
	const block2 = document.getElementById('block-2');
	let itemsBlock2 = block2.querySelectorAll('#itemDecoration');
	let items = block2.querySelectorAll('#item');

	for ([index, element] of itemsBlock2.entries()) {
		element.textContent = `${index+1}`; 
	}

	for ([index, element] of items.entries()) {
		if (index%2==1 && index!=0) {
			element.classList.add('reverse');
		}
	}
}
function setBlock3() {
	const block3 = document.getElementById('block-3');
	let icons = block3.querySelectorAll('#icon');
	let texts = block3.querySelectorAll('#text');

	for ([index, element] of icons.entries()) {
		let value = `url('img/block3/icon-${index+1}.svg')`
		element.style.backgroundImage = value;
	}
	for (element of texts) {
		element.classList.add('orange-decoration', 'decoration', 'top-left');
	}
}

setBlock1();
setBlock2();
setBlock3();

const showSliderBlock1 = new Swiper('.item__slider', {
	loop: true,
	speed: 1200,
	navigation: {
		nextEl: '.slider-navigation__next',
		prevEl: '.slider-navigation__prev'
	}
})