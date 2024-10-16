// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

$(() => {
	$('body').on('click', '.open-header-js', function (e) {
		e.preventDefault()

		if ($('.open-header-js').hasClass('_active')) {
			$('.open-header-js').removeClass('_active')
			$('.header').removeClass('_show')
			$('body').removeClass('_look-menu')
		} else {
			$('.open-header-js').addClass('_active')
			$('.header').addClass('_show')
			$('body').addClass('_look-menu')
		}

		if ( $(this).hasClass('open-header-js_catalog') ){
			$('.open-catalog-js').click()
		}
	})


	$('body').on('click', '.js-favorite, .js-compare', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})


	$('body').on('submit', '.form_ajax', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#modal-successful',
			type: 'inline'
		}])
	})


	//
	if ($('.main-slider').length) {
		mainSlider = new Swiper('.main-slider', {
			loop: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 0,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.stocks__slider').length) {
		new Swiper('.stocks__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'768': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 2,
					slidesPerGroup: 2
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 2,
					slidesPerGroup: 2
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 2,
					slidesPerGroup: 2
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')

					let heightStock = $(swiper.el).find('.stocks__box').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', heightStock/2)
				},
				resize: function (swiper) {
					let heightStock = $(swiper.el).find('.stocks__box').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', heightStock/2)
				}
			}
		})
	}


	if ($('.certificates__slider').length) {
		new Swiper('.certificates__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 4,
					slidesPerGroup: 4
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 5,
					slidesPerGroup: 5
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 6,
					slidesPerGroup: 6
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.main-brand__slider').length) {
		new Swiper('.main-brand__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 4,
					slidesPerGroup: 4
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 5,
					slidesPerGroup: 5
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 6,
					slidesPerGroup: 6
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.main-news__slider').length) {
		new Swiper('.main-news__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 'auto'
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.main-news__slider2').length) {
		new Swiper('.main-news__slider2', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.main-news__slider3').length) {
		new Swiper('.main-news__slider3', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.brand-products__slider').length) {
		new Swiper('.brand-products__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 3
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 'auto'
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.products__slider').length) {
		new Swiper('.products__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'768': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 4,
					slidesPerGroup: 4
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 5,
					slidesPerGroup: 5
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 6,
					slidesPerGroup: 6
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product').removeClass('_load')

					$(swiper.el).find('.product').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product'))
					setHeight($(swiper.el).find('.product__name'))

					setTimeout(() => {
						$(swiper.el).find('.product').addClass('_load')
					}, 100)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product').removeClass('_load')

					$(swiper.el).find('.product').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product'))
					setHeight($(swiper.el).find('.product__name'))

					setTimeout(() => {
						$(swiper.el).find('.product').addClass('_load')
					}, 100)
				}
			}
		})
	}


	if ($('.page-compare__slider').length) {
		new Swiper('.page-compare__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'768': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 3,
					slidesPerGroup: 3
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 4,
					slidesPerGroup: 4
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 5,
					slidesPerGroup: 5
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 6,
					slidesPerGroup: 6
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product').removeClass('_load')

					$(swiper.el).find('.product__heig').height('auto')
					$(swiper.el).find('.product__wrap').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product__wrap'))
					setHeight($(swiper.el).find('.product__name'))

					setTimeout(() => {
						$(swiper.el).find('.product').addClass('_load')
					}, 100)

					setTimeout(() => {
						compareHeight()
					})

					let heightProduct = $(swiper.el).find('.product__wrap:not(._fix)').outerHeight()

					$(swiper.el).find('.product__heig').height(heightProduct)

					$(swiper.el).find('.slider-button-next, .slider-button-prev').css('top',heightProduct/2)

					$(swiper.el).closest('.page-compare__wrap').find('.page-compare__checkbox').css('top',heightProduct)

					setTimeout( function() {
						if( $(window).scrollTop() > $('.page-compare__checkbox').offset().top  + $('.page-compare__checkbox').innerHeight() ) {
							$('.product__wrap_fix').addClass('_fix')
							$('.producproduct__heig-box').addClass('_abs')
						} else{
							$('.product__wrap_fix').removeClass('_fix')
							$('.product__heig-box').removeClass('_abs')
						}
	
						$(window).scroll(function(){
							if( $(window).scrollTop() > $('.page-compare__checkbox').offset().top + $('.page-compare__checkbox').innerHeight() ) {
								$('.product__wrap_fix').addClass('_fix')
								$('.product__heig-box').addClass('_abs')
							} else{
								$('.product__wrap_fix').removeClass('_fix')
								$('.product__heig-box').removeClass('_abs')
							}
						})
					},100)

					WW2 = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth
				},
				resize: function (swiper) {
					let windowW2 = window.outerWidth

					if (typeof WW2 !== 'undefined' && WW2 != windowW2) {
						WW2 = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth
						$(swiper.el).find('.product').removeClass('_load')

						$('.product__wrap_fix').removeClass('_fix')
						$('.product__heig-box').removeClass('_abs')

						$(swiper.el).find('.product__wrap:not(._fix)').find('.product__heig').height('auto')
						$(swiper.el).find('.product__wrap:not(._fix)').height('auto')
						$(swiper.el).find('.product__wrap:not(._fix)').find('.product__name').height('auto')
						setHeight($(swiper.el).find('.product__wrap:not(._fix)'))
						setHeight($(swiper.el).find('.product__wrap:not(._fix)').find('.product__name'))

						setTimeout(() => {
							$(swiper.el).find('.product').addClass('_load')
						}, 100)

						setTimeout(() => {
							compareHeight()
						})

						let heightProduct = $(swiper.el).find('.product__wrap:not(._fix)').outerHeight()

						$(swiper.el).find('.product__heig').height(heightProduct)

						$(swiper.el).find('.slider-button-next, .slider-button-prev').css('top',heightProduct/2)

						$(swiper.el).closest('.page-compare__wrap').find('.page-compare__checkbox').css('top',heightProduct)
					}
				}
			}
		})
	}


	if ($('.page-compare__slider2').length) {
		new Swiper('.page-compare__slider2', {
			loop: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 1,
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')

					$(swiper.el).closest('.page-compare__mob').find('.product').removeClass('_load')

					$(swiper.el).closest('.page-compare__mob').find('.product__wrap').height('auto')
					$(swiper.el).closest('.page-compare__mob').find('.product__name').height('auto')
					
					setTimeout( function() {
						setHeight($(swiper.el).closest('.page-compare__mob').find('.product__wrap'))
						setHeight($(swiper.el).closest('.page-compare__mob').find('.product__name'))

						let heightSlider = $(swiper.el).closest('.page-compare__mob').height()
	
						$(swiper.el).closest('.page-compare__wrap-top').height(heightSlider)
					}, 50)

					setTimeout(() => {
						$(swiper.el).closest('.page-compare__mob').find('.product').addClass('_load')
					}, 100)

					let lengthSlide = $(swiper.el).find('.product:not(.swiper-slide-duplicate)').length

					$(swiper.el).find('.slider-number__active').text(swiper.realIndex + 1)

					$(swiper.el).find('.slider-number__all').text(lengthSlide)

					setTimeout( function() {
						if( $(window).scrollTop() > $('.products__feature_mob').offset().top - 96) {
							$('.page-compare__mob').addClass('_fix')
							$('.page-compare__wrap-heigh').addClass('_abs')
						} else{
							$('.page-compare__mob').removeClass('_fix')
							$('.page-compare__wrap-heigh').removeClass('_abs')
						}
	
						$(window).scroll(function(){
							if( $(window).scrollTop() > $('.products__feature_mob').offset().top - 96) {
								$('.page-compare__mob').addClass('_fix')
								$('.page-compare__wrap-heigh').addClass('_abs')
							} else{
								$('.page-compare__mob').removeClass('_fix')
								$('.page-compare__wrap-heigh').removeClass('_abs')
							}
						})
					})

					WW3 = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth
				},
				resize: function (swiper) {
					let windowW3 = window.outerWidth

					if (typeof WW3 !== 'undefined' && WW3 != windowW3) {
						WW3 = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

						$(swiper.el).closest('.page-compare__mob').find('.product').removeClass('_load')

						$('.page-compare__mob').removeClass('_fix')
						$('.page-compare__wrap-heigh').removeClass('_abs')

						$(swiper.el).closest('.page-compare__mob:not(._fix)').find('.product__wrap').height('auto')
						$(swiper.el).closest('.page-compare__mob:not(._fix)').find('.product__name').height('auto')
						setHeight($(swiper.el).closest('.page-compare__mob:not(._fix)').find('.product__wrap'))
						setHeight($(swiper.el).closest('.page-compare__mob:not(._fix)').find('.product__name'))

						let heightSlider = $(swiper.el).closest('.page-compare__mob:not(._fix)').height()

						$(swiper.el).closest('.page-compare__wrap-top').height(heightSlider)

						setTimeout(() => {
							$(swiper.el).closest('.page-compare__mob').find('.product').addClass('_load')
						}, 100)
					}
				},
				slideChange: function (swiper){
					$(swiper.el).find('.slider-number__active').text(swiper.realIndex + 1)
				}
			}
		})
	}


	if ($('.products__slider2').length) {
		new Swiper('.products__slider2', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'768': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 3,
					slidesPerGroup: 3
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 4,
					slidesPerGroup: 4
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 4,
					slidesPerGroup: 4
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product').removeClass('_load')

					setTimeout(() => {
						$(swiper.el).find('.product').addClass('_load')
					}, 100)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product').removeClass('_load')

					setTimeout(() => {
						$(swiper.el).find('.product').addClass('_load')
					}, 100)
				}
			}
		})
	}


	if ($('.gallery__slider').length) {
		new Swiper('.gallery__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 1
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}
	
	if ($('.inner-cats__slider').length) {
		new Swiper('.inner-cats__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 3,
					slidesPerGroup: 3
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 4,
					slidesPerGroup: 4
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 4,
					slidesPerGroup: 4
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.reviews__slider').length) {
		new Swiper('.reviews__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'640': {
					spaceBetween: 12,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 'auto',
					slidesPerGroup: 1
				},
				'1280': {
					spaceBetween: 20,
					slidesPerView: 3,
					slidesPerGroup: 3
				},
				'1400': {
					spaceBetween: 20,
					slidesPerView: 4,
					slidesPerGroup: 4
				},
				'1500': {
					spaceBetween: 30,
					slidesPerView: 4,
					slidesPerGroup: 4
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.product__images.swiper').length) {
		new Swiper('.product__images.swiper', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 1,
			preloadImages: false,
			nested: true,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
		})
	}


	if ($('.product-info__slider').length) {
		productInfoSlider = new Swiper(".product-info__slider", {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerGroup: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				},
				slideChange: function (swiper) {
					$(swiper.el).closest('.product-info').find('.product-info__thumbs-item').removeClass('_active')

					$(swiper.el).closest('.product-info').find(`.product-info__thumbs-item:eq(${swiper.realIndex})`).addClass('_active')
				}
			}
		})

		$('body').on('click', '.product-info__thumbs-item', function(e) {
			e.preventDefault()

			let numberSlide = $(this).data('index-slide');
			productInfoSlider.slideTo(numberSlide);
		})
	}


	//
	$('body').on('click', '.amount__btn_minus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let minimum = parseFloat(input.data('minimum'))
		let step = parseFloat(input.data('step'))

		if (inputVal > minimum) {
			input.val(inputVal - step)

			parent.find('.amount__btn_plus').prop("disabled", false)
		}

		if (inputVal-1 == minimum) {
			$(this).prop("disabled", true)
		}
	})
	
	$('body').on('click', '.amount__btn_plus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let maximum = parseFloat(input.data('maximum'))
		let step = parseFloat(input.data('step'))

		if (inputVal < maximum) {
			input.val(inputVal + step)

			parent.find('.amount__btn_minus').prop("disabled", false)
		}

		if (inputVal+1 == maximum) {
			$(this).prop("disabled", true)
		}
	})

	$('.amount__input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})

	//
	$priceRange = $("#range_price").ionRangeSlider({
		type     : 'double',
		min      : 0,
		max      : 50000,
		from     : 5000,
		to       : 35000,
		step     : 1,
		onChange : function (data) {
			$('.range_price input.ot').val( data.from.toLocaleString('ru-RU') )
			$('.range_price input.do').val( data.to.toLocaleString('ru-RU') )
		}
	}).data("ionRangeSlider")

	$('.range_price .range__input').keyup(function() {
		$priceRange.update({
			from : $('.range_price input.ot').val().replace(/\s/g,''),
			to : $('.range_price input.do').val().replace(/\s/g,'')
		})
	})

	$('.filter__reset').click(function(){
		if ( $('.range_price').length ) {
			$priceRange.reset()
		}
	})

	if ( $(window).width() < 1025 ) {
		$('.header__search').each(function() {
    		let parent = $('.header-mob__info')

    		$(this).appendTo(parent)
    	})
    }
});


$(window).on('load', () => {
	if ( $('.checkout-table').length ) {
		checkoutTable()
	}

	if ( $('.themed-packages__wrap').length ) {
		themedPackages()
	}

	if( $('.products__grid').length ){
		$('.products__grid').find('.product').removeClass('_load')

		$('.products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--products_number')))
		})

		setTimeout(() => {
			$('.products__grid').find('.product').addClass('_load')
		}, 100)
	}
});


$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
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

		if( $('.products__grid').length ){
			$('.products__grid').find('.product').removeClass('_load')
	
			$('.products__grid').each(function() {
				productsHeight($(this), parseInt($(this).css('--products_number')))
			})
	
			setTimeout(() => {
				$('.products__grid').find('.product').addClass('_load')
			}, 100)
		}
	}

	if ( $('.checkout-table').length ) {
		checkoutTable()
	}

	if ( $(window).width() > 1024 && !$('.header__search').closest('.header').hasClass('header') && !$('.header__search').hasClass('_pc') ) {
		$('.header__search').addClass('_pc')
		$('.header__search').removeClass('_mob')

    	$('.header__search').each(function() {
    		let parent = $('.heade__catalog')

    		$(this).insertAfter(parent)
    	})
    }

	if ( $(window).width() < 1025 && $('.header__search').closest('.header').hasClass('header') && !$('.header__search').hasClass('_mob') ) {
		$('.header__search').removeClass('_pc')
		$('.header__search').addClass('_mob')

    	$('.header__search').each(function() {
    		let parent = $('.header-mob__info')

    		$(this).appendTo(parent)
    	})
    }
});


function checkoutTable() {
	if ($(window).width() < 1024 && !$('.checkout-table').hasClass('swiper-initialized')) {
		$('.checkout-table').addClass('swiper')
		$('.checkout-table__wrap').addClass('swiper-wrapper')
		$('.checkout-table__item').addClass('swiper-slide')

		checkoutTableSlider = new Swiper('.checkout-table', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 12,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
		})
	} else if ($(window).width() > 1025 && $('.checkout-table').hasClass('swiper-initialized')) {
		if ($('.checkout-table').length === 1 && $('.checkout-table').hasClass('swiper-initialized')) {
			checkoutTableSlider.destroy(true, true)
		} else if ($('.checkout-table').length >= 2 && $('.checkout-table').hasClass('swiper-initialized')) {
			checkoutTableSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.checkout-table').removeClass('swiper')
		$('.checkout-table__wrap').removeClass('swiper-wrapper')
		$('.checkout-table__item').removeClass('swiper-slide')
	}
}

// Выравнивание в сравнении
function compareHeight() {
	$('.products__feature-item').height('auto')

	let productFeatures = $('.products__feature'),
		featuresSizes = new Object()

	productFeatures.each(function () {
		$(this).find('.products__feature-item').each(function () {
			if (featuresSizes[$(this).index()]) {
				if ($(this).outerHeight() > featuresSizes[$(this).index()]) {
					featuresSizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				featuresSizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	$.each(featuresSizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('.products__feature-item:eq(' + key + ')').innerHeight(data)
		})
	})
}


function productsHeight(context, step) {
	let start    = 0
	let finish   = step
	let products = context.find('.product')

	products.height('auto')
	products.find('.product__name').height('auto')

	setTimeout(() => {
		for (let i = 0; i < products.length; i++) {
			setHeight(products.slice(start, finish))
			setHeight(products.slice(start, finish).find('.product__name'))

			start  = start + step
			finish = finish + step
		}
	}, 50)
}