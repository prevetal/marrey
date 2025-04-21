WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			lazy: true,
			spaceBetween: 4,
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: $(el).hasClass('big') ? 3 : 4
				},
				1280: {
					slidesPerView: $(el).hasClass('big') ? 4 : 5
				},
				1440: {
					slidesPerView: $(el).hasClass('big') ? 4 : 6
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Materials slider
	const materialsSliders = [],
		materials = document.querySelectorAll('.materials .swiper')

	materials.forEach((el, i) => {
		el.classList.add('materials_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			lazy: true,
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 4
				},
				768: {
					spaceBetween: 24
				},
				1440: {
					spaceBetween: 40
				}
			}
		}

		materialsSliders.push(new Swiper('.materials_s' + i, options))
	})


	// Material products slider
	const materialProductsSliders = [],
		materialProducts = document.querySelectorAll('.material_info .swiper.slider')

	materialProducts.forEach((el, i) => {
		el.classList.add('material_products_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 4,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1440: {
					spaceBetween: 50,
					slidesPerView: 2
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		materialProductsSliders.push(new Swiper('.material_products_s' + i, options))
	})


	// Socials gallery slider
	const socialsGallerySliders = [],
		socialsGallery = document.querySelectorAll('.socials_gallery .swiper')

	socialsGallery.forEach((el, i) => {
		el.classList.add('socials_gallery_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			lazy: true,
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 4
				},
				1440: {
					spaceBetween: 5
				}
			}
		}

		socialsGallerySliders.push(new Swiper('.socials_gallery_s' + i, options))
	})


	// Enter
	$('.enter .btn').click(function(e) {
		e.preventDefault()

		$('.enter').addClass('hide')
		$('.wrap').removeClass('lock')

		setTimeout(() => $('.slogan:not(.hide)').addClass('hide'), 1500)
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Top banner
	$('.top_banner .close_btn').click(function(e) {
		e.preventDefault()

		$('.top_banner').remove()
	})


	// Menu
	$('header .menu_btn').click((e) => {
		e.preventDefault()

		$('header .menu_item > a.sub_link').removeClass('active')
		$('header .sub_menu').removeClass('show')

		$('header .menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.menu_modal').toggleClass('show')

		$('header .menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	$('header .menu_item > a.sub_link').mouseenter(function(e) {
		e.preventDefault()

		$('header .menu_btn').removeClass('active')
		$('body').removeClass('lock')
		$('.menu_modal').removeClass('show')

		const subMenu = $(this).data('sub-menu')

		$('header .menu_item > a.sub_link').removeClass('active')
		$('header .sub_menu').removeClass('show')

		$(this).addClass('active')
		$('header .sub_menu.' + subMenu).addClass('show')

		$(this).hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	$('header .sub_menu .main a').click(function(e) {
		e.preventDefault()

		const subMenu = $(this).closest('.sub_menu'),
			sub = $(this).data('sub')

		subMenu.find('.main a').removeClass('active')
		$(this).addClass('active')

		subMenu.find('.sub').hide()
		subMenu.find('.sub.' + sub).fadeIn(300)
	})


	$('.overlay').click(function(e) {
		e.preventDefault()

		$('body').removeClass('lock')

		$('header .menu_btn').removeClass('active')
		$('.menu_modal').removeClass('show')

		$('header .menu_item > a.sub_link').removeClass('active')
		$('header .sub_menu').removeClass('show')

		$('.side_modal_btn').removeClass('active')
		$('.side_modal').removeClass('show')

		$('.filter_btn').removeClass('active')
		$('body').removeClass('filter_open')
		$('.filter').removeClass('show')

		$('.overlay').fadeOut(300)
	})


	// Mob. menu
	$('header .menu_modal .categories a.sub_link').click(function(e) {
		e.preventDefault()

		const sub = $(this).data('sub-categories')

		$('header .menu_modal .categories a.sub_link').removeClass('active')
		$('header .menu_modal .sub_categories').removeClass('show')

		$(this).addClass('active')
		$('header .menu_modal .sub_categories.' + sub).addClass('show')
	})


	$('header .menu_modal .sub_categories .back .btn').click(function(e) {
		e.preventDefault()

		$('header .menu_modal .categories a.sub_link').removeClass('active')
		$(this).closest('.sub_categories').removeClass('show')
	})


	$('header .menu_modal .sub_categories .main a').click(function(e) {
		e.preventDefault()

		const subCategories = $(this).closest('.sub_categories'),
			sub = $(this).data('sub')

		subCategories.find('.main a').removeClass('active')
		$(this).addClass('active')

		subCategories.find('.sub').hide()
		subCategories.find('.sub.' + sub).fadeIn(300)
	})


	// 'Up' button
	$('.buttonUp .btn').click((e) => {
		e.preventDefault()

		document.body.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		}, 1000)
	})


	// Password toggle
	$('.form .toggle_btn').click(function(e) {
		e.preventDefault()

		const input = $(this).closest('.field').find('.input')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? input.attr('type', 'text')
			: input.attr('type', 'password')
	})


	// Orders
	$('.orders .order .head').click(function(e) {
		e.preventDefault()

		const order = $(this).closest('.order')

		order.toggleClass('open')
		order.find('.data').slideToggle(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Change the quantity
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Promocode
	$('.promocode form').submit(function(e) {
		e.preventDefault()

		Fancybox.show([{
			src: document.getElementById('promocode_error_modal'),
			type: 'inline'
		}])
	})


	// Side modal
	$('.side_modal_btn').click(function(e) {
		e.preventDefault()

		const modal = $(this).data('modal')

		$('body').addClass('lock side_modal_open')

		$('.side_modal_btn').removeClass('active')
		$(this).addClass('active')

		$('.side_modal').removeClass('show')
		$('#' + modal).addClass('show')

		$(this).hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	$('.side_modal .close_btn').click(function(e) {
		e.preventDefault()

		$('body').removeClass('lock side_modal_open')

		$('.side_modal_btn').removeClass('active')
		$('.side_modal').removeClass('show')

		$('.overlay').fadeOut(300)
	})


	// Filter
	$('.filter_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('body').toggleClass('filter_open')
		$('.filter').toggleClass('show')

		$(this).hasClass('active') && WW < 768
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	$('.filter .checkbox').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			const item = $(this).closest('.item')

			setTimeout(() => {
				item.find('.checkbox input:checked').length
					? item.find('.clear_btn').attr('disabled', false)
					: item.find('.clear_btn').attr('disabled', true)
			})
		}
	})


	$('.filter .clear_btn[type="button"]').click(function(e) {
		e.preventDefault()

		const item = $(this).closest('.item')

		item.find('.checkbox input:checked').prop('checked', false)
		$(this).attr('disabled', true)
	})


	$('.filter .clear_btn[type="reset"]').click(function(e) {
		$('.filter .clear_btn[type="button"]').attr('disabled', true)

		$('.products .filter').remove()
	})


	$('.filter .mob_header .close_btn').click(function(e) {
		$('.filter_btn').removeClass('active')
		$('body').removeClass('filter_open')
		$('.filter').removeClass('show')

		$('.overlay').fadeOut(300)
	})


	// Product info
	$('.product_info .color .checkbox').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			const section = $(this).closest('.color'),
				colorName = $(this).data('name')

			section.find('.label span').text(colorName)
		}
	})


	$('.product_info .information .head').click(function(e) {
		const item = $(this).closest('.item')

		item.toggleClass('open')
		item.find('.info').slideToggle(300)
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// LK
	$('.lk_info aside .mob_current_link').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.lk_info aside .links').slideToggle(300)
	})


	// Page head
	$('.page_head .mob_current_link').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.page_head .links').slideToggle(300)
	})


	// Product images
	initProductImagesSlider()


	// Cart - Promocode
	$('.cart_info .promocode .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.cart_info .promocode .form').toggleClass('show')
	})


	// Cart - Mob. checkout
	$('.cart_info .mob_checkout_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.cart_info .checkout_info').slideToggle(300)
	})
})



window.addEventListener('load', function () {
	// Fixed header
	headerInit = true,
	headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	pageScrollOffset = $(window).scrollTop()
})



window.addEventListener('scroll', function () {
	// Fixed header
	if (typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() < pageScrollOffset && $(window).scrollTop() > headerHeight) {
		$('header').addClass('fixed')
	} else {
		$('header').removeClass('fixed')

		$('header .menu_item > a.sub_link').removeClass('active')
		$('header .sub_menu').removeClass('show')
		$('.overlay').fadeOut(300)
	}

	pageScrollOffset = $(window).scrollTop()
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Fixed header
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit   = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() < pageScrollOffset
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Product images
		initProductImagesSlider()


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Product images
productImagesSliders = []

function initProductImagesSlider() {
	if (WW >= 1024) {
		productImagesSliders.forEach(element => element.destroy(true, true))

		productImagesSliders = []

		$('.product_info .images .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.product_info .images .row > *').removeClass('swiper-slide')
	} else {
		if ($('.product_info .images .row').length) {
			$('.product_info .images .row > *').addClass('swiper-slide')
			$('.product_info .images .row').addClass('swiper-wrapper').removeClass('row')

			$('.product_info .images .swiper:not(.swiper-initialized)').each(function (i) {
				$(this).addClass('product_images_s' + i)

				let options = {
					loop: true,
					loopAdditionalSlides: 1,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 1,
					spaceBetween: 0,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					}
				}

				productImagesSliders.push(new Swiper('.product_images_s' + i, options))
			})
		}
	}
}