/*============================Menu Table===================
- 1, init
- 2, Navigation
- 3, Happy Client Slider
- 4, Box discover slider
*/
/* ============================= 1, init  ============================= */

$(document).ready(function() {
	navigation.init();
	date.init();
	happyClient.init()
	boxDiscoverSlider.init();
});

/* ============================= 2, Navigation  ============================= */
const navigation = {
	init: function () {
		this.navbarFixed();
		this.slideToggle();
	},
	navbarFixed: function () {
		window.onscroll = function () {
			var topBar = $(".nav__top-bar");
			var nav = $('.nav')
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				$(".nav").addClass("nav--fixed");
				topBar.css({"display": "none"});
			} else {
				$(".nav").removeClass("nav--fixed");
				topBar.css({"display": "flex"});
			}
		}
	},	
	slideToggle:function(){
		$(".slideToggle").click(function(){
			$(".wrapper__service-price").slideToggle();
		});
		$(".toggleslide").click(function(){
			$(".wrapper__refund-detail").slideToggle();
		});
	}

	
}

/* ============================= 3, Happy Client Slider  ============================= */

const happyClient = {
	init: function() {
		this.happyClientCarousel()
	},
	happyClientCarousel: function() {
		const optionsDevice = {
			loop: true,
			margin: 0,
			autoplay: false,
			dots: true,
			dotsContainer: '.client-carousel-control .pagination-control',
			nav: false,
			responsive: {
				0: {
					items: 1
				},
			}
		}
		const optionsClient = {
			loop: true,
			margin: 10,
			autoplay: true,
			dots: false,
			nav: true,
			navText: ["<img src='./assets/images/happy-client-slider/icon-angle-left.svg' />","<img src='./assets/images/happy-client-slider/icon-angle-right.svg' />"],
			navContainer: '.client-carousel-control .nav-control',
			responsive: {
				0: {
					items: 2
				},
				1200: {
					items: 3
				}
			}
		}
		const slideLength = document.querySelectorAll('.device-carousel .device-slide')
		showPerPageCarousel(1, slideLength.length)

		const owlDevice = $('.device-carousel').owlCarousel(optionsDevice)
		const owlClient = $('.client-card-carousel').owlCarousel(optionsClient)

		function showPerPageCarousel(perpage, pages) {
			$('.carousel-info #client-carousel-current-slide').html(perpage)
			$('.carousel-info #client-carousel-total').html(pages)
		}

		if (owlDevice && owlClient) {
			// Event Change Carousel
			owlClient.on('changed.owl.carousel', function (event) {
				const currentIndex = event.item.index
				owlDevice.trigger('to.owl.carousel', [currentIndex - 3, 200]);
			})
			owlDevice.on('changed.owl.carousel', function (event) {
				const currentIndex = event.item.index
				owlClient.trigger('to.owl.carousel', [currentIndex - 3, 200]);
				showPerPageCarousel(currentIndex - 2, slideLength.length)
			})
		}
	}
}

/* ============================= 4, Box discover slider  ============================= */
const boxDiscoverSlider = {
	init: function () {
		this.boxDiscoverSlider();
	},
	boxDiscoverSlider: function () {
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			},
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
	},
}

/* ============================= 3, Datepicker  ============================= */
const date = {
	init:function(){
		this.datePicker();
	},
	datePicker:function(){
		//set current date
		var today = moment();
		$("#dateInput").val(today.format('YYYY-MM-DD'));

		//setting datepicker
		$("#datepicker").datepicker({
			format: 'yyyy-mm-dd',
			autoclose: true,
			language: 'vi',
			startDate: "currentDate",
		});
		today = new Date(today.format('YYYY-MM-DD'))
		$("#datepicker").datepicker("setDate", today);
		$("#datepicker").text(`${today.getDate()} tháng ${today.getMonth()+1}, ${today.getFullYear()}`);
		$("#toggle").click(function(e) {
			e.preventDefault();
			$("#datepicker").datepicker("show");
		})

		$("#toggle_cal").click(function(e) {
			e.preventDefault();
			$("#datepicker").datepicker("show");
		})
		$("#dateLabel").click(function(e) {
			e.preventDefault();
			$("#datepicker").datepicker("show");
		});
		$("#datepicker").on("changeDate", function() {
			var selectedDate = $("#datepicker").datepicker("getFormattedDate")
			$("#dateInput").val(selectedDate);
			selectedDate = new Date(selectedDate)
			$("#datepicker").text(`${selectedDate.getDate()} tháng ${selectedDate.getMonth()+1}, ${selectedDate.getFullYear()}`);

		});
	},
}