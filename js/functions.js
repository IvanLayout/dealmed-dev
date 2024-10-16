$(() => {
	// Observer API
	const boxes = document.querySelectorAll('.lazyload')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-src') && !entry.target.classList.contains('loaded')) {
				entry.target.src = entry.target.getAttribute('data-src')

				entry.target.classList.add('loaded')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')


	// Мини всплывающие окна
	$('.mini-modal__btn').click(function (e) {
		e.preventDefault()

		const parent = $(this).closest('.mini-modal')

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$('.mini-modal__modal').removeClass('_active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini-modal__btn').removeClass('_active')
			$(this).addClass('_active')

			$('.mini-modal__modal').removeClass('_active')
			parent.find('.mini-modal__modal').addClass('_active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ( !e.target.closest('.mini-modal') ) {
			$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	$('body').on('click', '.open-catalog-js', function (e) {
		e.preventDefault()

		if ($('.open-catalog-js').hasClass('_active')){
			$('.open-catalog-js').removeClass('_active')

			$('.heade__catalog-abs').removeClass('_show')
		} else {
			$('.open-catalog-js').addClass('_active')

			$('.heade__catalog-abs').addClass('_show')
		}
	})

	// Наведение на пункты меню
	if ( $(window).width() > 1024 ) {
		$('body').on('mouseover', '.heade__list-item', function (e) {
			e.preventDefault()
	
			if (!$(this).hasClass('_active-pc')) {
				$(this).closest('.heade__list').find('.heade__list-item').removeClass('_active-pc')
	
				$(this).addClass('_active-pc')
			}
		})
	}

	if ( $(window).width() < 1025 ) {
		$('body').on('click', '.heade__list-link._sub', function(e) {
			e.preventDefault()

			if ( $(this).hasClass('_active')) {
				$(this).removeClass('_active')
				$(this).next().removeClass('_active')
			} else {
				$(this).addClass('_active')
				$(this).next().addClass('_active')
			}
		})

		$('body').on('click', '.haede__menu-link._sub', function(e) {
			e.preventDefault()

			if ( $(this).hasClass('_active')) {
				$(this).removeClass('_active')
				$(this).next().removeClass('_active')
			} else {
				$(this).addClass('_active')
				$(this).next().addClass('_active')
			}
		})

		$('body').on('click', '.footer__menu-link._sub', function(e) {
			e.preventDefault()

			if ( $(this).hasClass('_active')) {
				$(this).removeClass('_active')
				$(this).next().removeClass('_active')
			} else {
				$(this).addClass('_active')
				$(this).next().addClass('_active')
			}
		})

		$('body').on('click', '.main-cats__name', function(e) {
			e.preventDefault()

			if ( $(this).hasClass('_active')) {
				$(this).removeClass('_active')
				$(this).next().removeClass('_show')
			} else {
				$(this).addClass('_active')
				$(this).next().addClass('_show')
			}
		})

		$('body').on('click', '.categories__head', function(e) {
			e.preventDefault()

			if ( $(this).hasClass('_active')) {
				$(this).removeClass('_active')
				$(this).next().removeClass('_show')
			} else {
				$(this).addClass('_active')
				$(this).next().addClass('_show')
			}
		})
	}

	
	$('body').on('click', '.heade__catalog-link._sub', function(e) {
		e.preventDefault()

		if ( $(this).closest('.heade__catalog-item').hasClass('_active')) {
			$(this).closest('.heade__catalog-item').removeClass('_active')
		} else {
			$(this).closest('.heade__catalog-item').addClass('_active')
		}
	})


	if ( $(window).width() < 1025 ){
		$('body').on('click', '.header__menu-link._sub', function(e) {
			e.preventDefault()
	
			if ( $(this).hasClass('_active')) {
				$(this).removeClass('_active')
				$(this).next().removeClass('_show')
			} else {
				$(this).addClass('_active')
				$(this).next().addClass('_show')
			}
		})
	}

	$('body').on('click', '.categories__link._sup', function(e) {
		e.preventDefault()

		if ( $(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$(this).next().removeClass('_show')
		} else {
			$(this).addClass('_active')
			$(this).next().addClass('_show')
		}
	})

	// Маска ввода
	$('input[type=tel]').each(function(){
		let datamask = $(this).data('mask');

		$(this).inputmask(`${datamask}`, {
			showMaskOnHover: false
		})
	})


	$('body').on('click', '.accordion__title', function (e) {
		e.preventDefault()

		if ($(this).closest('.accordion__item').hasClass('_active')) {
			$(this).closest('.accordion__item').removeClass('_active')
		} else {
			$(this).closest('.accordion__item').addClass('_active')
		}
	})

	$('body').on('click', '.tabs-accordion__title', function (e) {
		e.preventDefault()

		if ($(this).closest('.tabs-accordion__item').hasClass('_active')) {
			$(this).closest('.tabs-accordion__item').removeClass('_active')
		} else {
			$(this).closest('.tabs-accordion__item').addClass('_active')
		}
	})


	$('body').on('click', '.products__feature-open', function (e) {
		e.preventDefault()

		let index = $(this).closest('.products__feature-wrap').data('index')

		if ($(this).closest('.page-compare__wrap').find(`.products__feature-wrap[data-index="${index}"`).hasClass('_active')) {
			$(this).closest('.page-compare__wrap').find(`.products__feature-wrap[data-index="${index}"`).removeClass('_active')
		} else {
			$(this).closest('.page-compare__wrap').find(`.products__feature-wrap[data-index="${index}"`).addClass('_active')
		}
	})


	$('body').on('click', '.open-filter', function (e) {
		e.preventDefault()

		$('.aside_filter').addClass('_show')

		$('body').addClass('_look-filter')
	})

	$('body').on('click', '.filter__close', function (e) {
		e.preventDefault()

		$('.aside_filter').removeClass('_show')

		$('body').removeClass('_look-filter')
	})

	$('body').on('click', '.filter__title', function (e) {
		e.preventDefault()

		if ($(this).closest('.filter__item').hasClass('_active')) {
			$(this).closest('.filter__item').removeClass('_active')
		} else {
			$(this).closest('.filter__item').addClass('_active')
		}
	})

	$('body').on('click', '.filter__more', function (e) {
		e.preventDefault()

		if ($(this).closest('.filter__item').hasClass('_more')) {
			$(this).closest('.filter__item').removeClass('_more')
		} else {
			$(this).closest('.filter__item').addClass('_more')
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false

	Fancybox.defaults.template = {
		closeButton: '<svg viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 1L1 21" stroke-width="2" stroke-linecap="round"/><path d="M1.18359 1L21.1836 21" stroke-width="2" stroke-linecap="round"/></svg>',
	}

	// Всплывающие окна
	$('body').on('click', '.modal-btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}])
	})

	$('body').on('click', '.modal-close', function (e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Увеличение картинки
	Fancybox.bind('.fancy-img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Кастомный select
	$('select').niceSelect()

	//Анимация в полях форм
	$('form .form__input, form .form__textarea').each(function(){
		let value = $(this).val()

		if ( value != '' ) {
			$(this).closest('.form__field').addClass('_full')
		} else {
			$(this).closest('.form__field').removeClass('_full')
		}
	})

	$('form .form__input, form .form__textarea').change(function() {
		let value = $(this).val()

		if ( value != '' ) {
			$(this).closest('.form__field').addClass('_full')
		} else {
			$(this).closest('.form__field').removeClass('_full')
		}
	})


	$('.search-city__input').keydown(function () {
		const _self = $(this)

		setTimeout(function() {
			let value = _self.val()
			if ( value != '' ) {
				_self.closest('.search-city').find('.search-city__clear').addClass('_show')
			} else {
				_self.closest('.search-city').find('.search-city__clear').removeClass('_show')
			}
		})
	})

	$('.search-city__clear').click(function () {
		$(this).removeClass('_show')

		$(this).closest('.search-city').find('.search-city__input').val('')
	})


	$('.header__search-input').keydown(function () {
		const _self = $(this)

		setTimeout(function() {
			let value = _self.val()
			if ( value != '' ) {
				_self.closest('.header__search').addClass('_active')

				$('body').addClass('_look-search')
			} else {
				_self.closest('.header__search').removeClass('_active')

				$('body').removeClass('_look-search')
			}
		})
	})

	$('.header__search-clear, .header__search-overlay').click(function () {
		$(this).closest('.header__search').removeClass('_active')

		$('body').removeClass('_look-search')

		$(this).closest('.header__search').find('.header__search-input').val('')
	})


	// Выбор файла
	$('.file-selection input[type=file]').change(function(){
		var val = $(this).val()

		var parent = $(this).parents('.file-selection')

		parent.find('.file-selection__name').text(val)

		if(parent.find('.file-selection__name').text() == '') {
			let namePath = parent.find('.file-selection__name').data('name')
			parent.find('.file-selection__name').text(namePath)
		}
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs__button', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('_active') ) {
			let parent = $(this).closest('.tabs-container')
			let activeTab = $(this).data('content')
			let level = $(this).data('level')

			parent.find('.tabs:first').find('.tabs__button').removeClass('_active')
			parent.find('.tab-content.' + level).removeClass('_active')

			$(this).addClass('_active')
			$(activeTab).addClass('_active')

			if ( $(this).closest('.tabs__wrap') ){
				let html = $(this).html();

				$(this).closest('.tabs').find('.tabs__open-text').html(html)

				$(this).closest('.tabs').find('.tabs__open').removeClass('_active')
				$(this).closest('.tabs__wrap').removeClass('_active')
			}
		}
	})

	if( locationHash && $('.tabs-container').length ) {
		let activeTab = $('.tabs__button[data-content="'+ locationHash +'"]')
		let parent = activeTab.closest('.tabs-container')
		let level = activeTab.data('level')

		parent.find('.tabs:first').find('.tabs__button').removeClass('_active')
		parent.find('.tab-content.' + level).removeClass('_active')

		activeTab.addClass('_active')
		$(locationHash).addClass('_active')

		$('html, body').stop().animate({
			scrollTop: $(locationHash).offset().top - 430
		}, 1000)
	}


	$('body').on('click', '.tabs__open', function(e) {
		e.preventDefault()

		if( $(this).hasClass('_active') ) {
			$(this).removeClass('_active')
			$(this).next().removeClass('_active')
		} else{
			$(this).addClass('_active')
			$(this).next().addClass('_active')
		}
	})


	$('body').on('click', '.checkout__radio-label_personal', function() {
		const _self = $(this)

		setTimeout( function() {
			if( _self.hasClass('legal-entity') && _self.find('input').prop('checked') ) {
				_self.closest('.checkout__sector').find('.checkout__form-line_legal').addClass('_show')
			} else{
				_self.closest('.checkout__sector').find('.checkout__form-line_legal').removeClass('_show')
			}
		})
		
	})

	$('body').on('click', '.sorting__more', function(e) {
		e.preventDefault()

		if( $(this).hasClass('_active') ) {
			$(this).removeClass('_active')
			$(this).closest('.sorting__grid').removeClass('_all')
		} else{
			$(this).addClass('_active')
			$(this).closest('.sorting__grid').addClass('_all')
		}
	})
})


$(window).on('load', () => {
	if ( $('.page-cart__colr').length ){
		if( $(window).scrollTop() > $('.page-cart__colr').offset().top - ($(window).height() - $('.page-cart__abs').innerHeight()) ) {
			$('.page-cart__abs').addClass('_hide')
		} else{
			$('.page-cart__abs').removeClass('_hide')
		}
	}

	$(window).scroll(function(){
		if ( $('.page-cart__colr').length ){
			if( $(window).scrollTop() > $('.page-cart__colr').offset().top - ($(window).height() - $('.page-cart__abs').innerHeight()) ) {
				$('.page-cart__abs').addClass('_hide')
			} else{
				$('.page-cart__abs').removeClass('_hide')
			}
		}
	})
})


// Вспомогательные функции
const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}

const is_touch_device = () => !!('ontouchstart' in window)

function setHeight(className){
    let maxheight = 0

    className.each(function() {
		let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
			maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}