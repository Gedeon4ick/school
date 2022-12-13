window.addEventListener('DOMContentLoaded', () => {
	const mobileMenu = document.querySelector('.mobile__menu');
	const humburger = document.querySelector('.humburger');
	const overlay = document.querySelector('.overlay');

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






	// const menu = document.querySelector('.mobile__menu');
	// const humburger = document.querySelector('.humburger');
	// const overlay = document.querySelector('.overlay');
	// const menuLinks = document.querySelectorAll('nav > .link > li > a');

	// function closeMenu() {
	//   document.querySelector('body').style.overflow = 'auto';
	//   menu.style.height = `0px`;
	//   menu.style.padding = '0';
	//   humburger.classList.toggle('humburger-active');
	//   if (humburger.classList.contains('humburger-active')) {
	//     humburger.classList.toggle('humburger-active');
	//   }
	//   overlay.classList.remove('overlay_active');
	// }


	// menuLinks.forEach(item => {
	//   item.addEventListener('click', () => {
	//     if (humburger.classList.contains('humburger-active')) {
	//       closeMenu();
	//     }
	//   });
	// });

	// overlay.addEventListener('click', (e) => {
	//   if (e.target.classList.contains('overlay_active')) {
	//     closeMenu();
	//   }
	// });


	// humburger.addEventListener('click', () => {
	//   humburger.classList.toggle('humburger-active');
	//   overlay.classList.toggle('overlay_active');

	//   if (humburger.classList.contains('humburger-active')) {
	//     document.querySelector('body').style.overflow = 'hidden';
	//     menu.style.paddingTop = '22px';
	//     menu.style.height = `${menu.scrollHeight + 48}px`;

	//   } else {
	//     closeMenu();
	//   }
	//   menu.classList.toggle('mobile__menu-active');
	// });

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

	// inputPhone.addEventListener('')



});