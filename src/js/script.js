window.addEventListener('DOMContentLoaded', () => {
	const mobileMenu = document.querySelector('.mobile__menu');
	const humburger = document.querySelector('.humburger');
	const overlay = document.querySelector('.overlay');
	const menuLinks = document.querySelectorAll('.mobile__menu > ul > li > a');

	humburger.addEventListener('click', () => {
		if (humburger.classList.contains('humburger-active')) {
			closeMenu();
		} else {
			humburger.classList.add('humburger-active');
			mobileMenu.style.height = `${mobileMenu.scrollHeight + 48}px`;
			overlay.classList.add('overlay_active');
			document.body.style.overflow = 'hidden';
		}
	});


	function closeMenu() {
		document.body.style.overflow = '';
		overlay.classList.remove('overlay_active');
		humburger.classList.remove('humburger-active');
		mobileMenu.style.height = '0px';
	}

	overlay.addEventListener('click', () => {
		closeMenu();
	});


	menuLinks.forEach(item => {
		item.addEventListener('click', () => {
			closeMenu();
		});
	});


	// модальное окно
	const modalTrigger = document.querySelector('[data-open]');
	const overlayModal = document.querySelector('.overlayModal');
	const btnSubmit = document.querySelector('[data-close]');
	const modalFirst = document.querySelector('#first');
	const modalSecond = document.querySelector('#second');
	const input = document.querySelectorAll('input');
	const textarea = document.querySelector('textarea');
	const inputName = document.querySelector('[name=name]');
	const inputPhone = document.querySelector('[name="phone]');


	// modalTrigger.forEach(item  => {
		
	// });

	modalTrigger.addEventListener('click', () => {
		overlayModal.classList.add('overlayModal_active');
		modalFirst.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	});

	function closeModal() {
		overlayModal.classList.remove('overlayModal_active');
		document.body.style.overflow = '';

	}

	overlayModal.addEventListener('click', (e) => {
		if (e.target === overlayModal) {
			closeModal();
			modalSecond.classList.remove("show");
		}
	});

	btnSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		modalFirst.classList.add('hide');
		modalSecond.classList.add("show");
		textarea.value = '';
		input.forEach((elemet) => {
			elemet.value = "";
		});
	});



	inputName.addEventListener('input', function () {
		this.value = this.value.replace(/[^А-Яа-яЁёA-Za-z]/g, '');
	});

	// Кнопка подробнее на слайдорах
	// const triggerCard = document
	const triggers = document.querySelectorAll('.wrapper__slider_item-body > a');


	triggers.forEach(trigger => {
		trigger.addEventListener('click', (e) => {
			if (e.target.previousElementSibling.style.height == '170px') {
				e.target.previousElementSibling.style.height = `${e.target.previousElementSibling.scrollHeight + 20}px`;
			} else {
				e.target.previousElementSibling.style.height = '170px'
			}
		});
	});

	$('.slider__mini').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true
	});

	
	$('.sliderDiplom').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true
	});

	$('.reviewsSlider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 1400,
			settings: {
				arrows: false,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				
			}
		},
		{
			breakpoint: 770,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	],
	});



	$('.wrapper__slider').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 1400,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					
				}
			},
			{
				breakpoint: 770,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],

	});


});