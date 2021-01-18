/*============================Menu Table===================
- 1, init
- 2, Navigation
- 3, Box discover slider
*/
/* ============================= 1, init  ============================= */

$(document).ready(function() {
	navigation.init();
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
/* ============================= 3, Box discover slider  ============================= */
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
			}
		})
	},
}
