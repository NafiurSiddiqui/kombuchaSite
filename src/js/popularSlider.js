const cards = document.querySelectorAll('.popular-card');
const navNumber = document.querySelectorAll('.popular-nav-number ');
const navNumberBorder = document.querySelectorAll(
	'.popular-nav-number__border '
);
const btnLeft = document.getElementById('popular-btn-left');
const btnRight = document.getElementById('popular-btn-right');
const slider = document.querySelector('.popular-cards__slider');
// console.log(slider);

navNumber[0]?.classList.add('nav-number-active');
navNumberBorder[0]?.classList.add('border-active');
leftBtnHide();

let curSlide = 0;
let slideRange = 25;
let maxSlide = 3;
let navMaxSlide = 4;
btnLeft?.addEventListener('click', () => {
	if (curSlide === 0) {
		slider.style.transform = `translateX(-${slideRange * 3}%)`;
		curSlide = 3;
	} else {
		curSlide--;
		let slide = (slider.style.transform = `translateX(-${
			slideRange * curSlide
		}%)`);
		console.log(`Left:${curSlide}`);
		console.log(`left: ${slide}`);
	}
	navigationRemoveRight();
	navigationShow();
});

btnRight?.addEventListener('click', () => {
	if (curSlide === maxSlide) {
		curSlide = 0;
		leftBtnHide();
	} else {
		curSlide++;
	}
	if (curSlide > 0) {
		leftBtnShow();
	}
	let sliderPosition = (slider.style.transform = `translateX(-${
		slideRange * curSlide
	}%)`);

	navigationRemove();
	navigationShow();
	console.log(curSlide);
	console.log(sliderPosition);
});

function leftBtnHide() {
	btnLeft.style.display = 'none';
}

function leftBtnShow() {
	btnLeft.style.display = 'inline-block';
}
function rightBtnHide() {
	btnRight.style.display = 'none';
}
function rightBtnShow() {
	btnRight.style.display = 'inline-block';
}

function navigationShow() {
	navNumber[curSlide].classList.add('nav-number-active');
	navNumberBorder[curSlide].classList.add('border-active');
}

function navigationRemove() {
	if (curSlide === 0) {
		navNumber[maxSlide].classList.remove('nav-number-active');
		navNumberBorder[maxSlide].classList.remove('border-active');
	} else {
		navNumber[curSlide - 1].classList.remove('nav-number-active');
		navNumberBorder[curSlide - 1].classList.remove('border-active');
	}
}

function navigationRemoveRight() {
	try {
		navNumber[curSlide + 1].classList.remove('nav-number-active');
		navNumberBorder[curSlide + 1].classList.remove('border-active');
	} catch (error) {
		if (error) {
			navNumber[curSlide].classList.remove('nav-number-active');
			navNumberBorder[curSlide].classList.remove('border-active');
			navNumber[0].classList.remove('nav-number-active');
			navNumberBorder[0].classList.remove('border-active');
		}
	}
}
