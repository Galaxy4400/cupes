/**
 * sliders.js
 *
 * Copyright (c) 2023 Moiseev Evgeny
 * Organization: WebisGroup
 *
 * Скрипты инициализации и обработки слайдеров.
 */

/**
 * Инициализация слайдеров по атрибуту data-swiper.
 *
 * Используется библиотека swiper.js: assets/js/libs/swiper.min.js
 * Документация: https://swiperjs.com/swiper-api
 * Примеры: https://swiperjs.com/demos
 *
 * Требуется подключение стилей: assets/scss/_swiper.scss
 *
 * Данный скрипт необходим для того, чтобы не привязываться к стандартным классам свипер-слайдера. На сайте слайдера в документации предоставляется HTML разметка c определёнными классами, без которых он не буедет функционировать. Скрипт же просто расставляет эти обязательные классы и поэтому нет необходимости о них думать. Структура HTML разметки слайдера должна быть такой же, как и указано в документации, но классы могут быть какими угодно. Необходимые поставятся автоматически.
 */
document.querySelectorAll("[data-swiper]").forEach((slider) => {
	slider.classList.add("swiper");

	if (slider.classList.contains("swiper-bild")) return;

	const sliderWrapper = slider.firstElementChild;
	const sliderItems = Array.from(sliderWrapper.children);

	sliderWrapper.classList.add("swiper-wrapper");

	sliderItems.forEach((slide) => slide.classList.add("swiper-slide"));

	slider.classList.add("swiper-bild");
});

//===============================================================
//===============================================================
//===============================================================
const mainSlider = new Swiper(".main-slider", {
	effect: "fade",
	slidesPerView: 1,
	speed: 500,
	autoplay: {
		delay: 8000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".main-slider__pagination",
		bulletClass: "main-slider__bullet",
		bulletActiveClass: "_active",
		clickable: true,
		renderBullet: (index) => getMainSliderBullet(index),
	},
});

// Функция построения кастомных буллетов
function getMainSliderBullet(index) {
	const bulletTitle = document.querySelectorAll(".main-slide")[index].dataset.bullet;

	const bullet = `
		<div class="main-slider__bullet">
			<div class="main-slider__bullet-title">
				${bulletTitle}
			</div>
		</div>
	`;
	return bullet;
}

//===============================================================
const partnersSlider = new Swiper(".partners-slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
	speed: 800,
	loop: true,
	navigation: {
		disabledClass: "_disabled",
		prevEl: ".partners__arrow_prev",
		nextEl: ".partners__arrow_next",
	},
});

//===============================================================
const resourcesSlider = new Swiper(".resources-slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
	speed: 800,
	loop: true,
	navigation: {
		disabledClass: "_disabled",
		prevEl: ".resources__arrow_prev",
		nextEl: ".resources__arrow_next",
	},
});

//===============================================================
const innerGalleryThumbs = new Swiper(".inner-gallery-thumbs", {
	slidesPerView: "auto",
	spaceBetween: 20,
	speed: 800,
	direction: "vertical",
	mousewheel: true,
	navigation: {
		disabledClass: "_disabled",
		prevEl: ".inner-gallery-thumbs__arrow_prev",
		nextEl: ".inner-gallery-thumbs__arrow_next",
	},
});

const innerGallerySlider = new Swiper(".inner-gallery-slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 800,
	thumbs: {
		swiper: innerGalleryThumbs,
	},
});

//===============================================================

/**
 * Инициализация слайдера
 */
const swiper = new Swiper(".slider", {
	speed: 1500,
	spaceBetween: 100,
	slidesPerView: 1,
	parallax: true,
	navigation: {
		prevEl: ".slider__arrow_prev",
		nextEl: ".slider__arrow_next",
		disabledClass: "_disabled",
	},
	pagination: {
		el: ".slider__pagination",
		bulletClass: "slider__bullet",
		bulletActiveClass: "_active",
		clickable: true,
	},
});

/**
 * Пример инициализации слайдера
 */
new Swiper(".news-slider__body", {
	slidesPerView: 4,
	spaceBetween: 30,
	speed: 800,
	autoheight: true,
	navigation: {
		disabledClass: "_disabled",
		prevEl: ".news-slider-arrows__arrow_prev",
		nextEl: ".news-slider-arrows__arrow_next",
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		480: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		992: { slidesPerView: 3 },
		1201: { slidesPerView: 3 },
		1583: { slidesPerView: 4 },
	},
});
