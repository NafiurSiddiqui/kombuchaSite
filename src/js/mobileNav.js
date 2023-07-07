const mobileNavcontainer = document.querySelector('.nav-mobile-btn');
const header = document.querySelector('.header');
const navcontainer = document.querySelector('.nav');

// burger nav logic

mobileNavcontainer?.addEventListener('click', () => {
	header.classList.toggle('navActive');
});
