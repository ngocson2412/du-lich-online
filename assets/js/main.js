/*============================Menu Table===================
- 1, init
- 2, Navigation
- 3, Happy Client Slider
- 4, Box discover slider
- 5, du-thuyen-desktop load more 
- 6, Box partner slider
*/
/* ============================= 1, init  ============================= */

$(document).ready(function() {
	navigation.init();
	date.init();
	happyClient.init()
	boxDiscoverSlider.init();
	customModal.init();
	// boxpartnertslider.init();
	loadMore.init();
	animationService.init();
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

/* ============================= 4, Custom modal  ============================= */
const customModal = {
	init:function(){
		this.customModal();
	},
	customModal:function(){
		$(".openPopup").on("click",function() {
			var popup = $(this).data("popup")
			$(popup).removeClass('hidden');
			$("body").addClass("modal-open");
		})
		$(".closePopup").on("click",function() {
			$('.full-screen').addClass('hidden');
			$("body").removeClass("modal-open");
		})
	}
}
/* ============================= 5,du-thuyen-desktop load more  ============================= */
const loadMore={
	init:function(){
		this.clickLoad()
	},
	clickLoad:function(){
		var data=[
			{img:'assets/images/box-yacht/lee-06355.png'},
			{img:'assets/images/box-yacht/lee-06355.png'},
			{img:'assets/images/box-yacht/lee-06355.png'},
			{img:'assets/images/box-yacht/lee-06355.png'},
			{img:'assets/images/box-yacht/lee-06355.png'},
			{img:'assets/images/box-yacht/lee-06355.png'},
			{img:'assets/images/box-yacht/lee-06355.png'},
			{img:'assets/images/box-yacht/lee-06355.png'}
		]
		$(".box-yacht__wrap .row .col-lg-4.col-md-6").slice(0, 6).show();
		var items='';
		if(data){
			for (let i = 0; i < data.length; i++) {
				items+= `<div class="col-lg-4 col-md-6">
							<div class="yacht__items">
								<div class="yacht__items-img"><img src=${data[i].img} alt="">
									<div class="endow">
									<p>Ưu đãi -40%</p>
									</div>
								</div>
								<div class="yacht__items-text"><a href="">
									<h3 class="title">Serenity Cruise</h3></a>
									<ul>
										<li>
											<div class="dots"></div>
											<p>Cảng khởi hành: Tuần Châu</p>
										</li>
										<li>
											<div class="dots"></div>
											<p>Thời gian khởi hành: 08h15</p>
										</li>
										<li>
											<div class="dots"></div>
											<p>Các dịch vụ theo tàu</p>
										</li>
										<li>
											<div class="dots"></div>
											<p>HDV suốt hành trình</p>
										</li>
										<li>
											<div class="dots"></div>
											<p>Ăn trên tàu</p>
										</li>
									</ul>
									<div class="price">
										<h3>đ 399,000</h3><span>đ 599,000</span>
									</div><a class="btn btn-booking" href="./booking-train-desktop.html">Đặt tàu</a>
								</div>
							</div>
						</div>`
			}
		}
		let $newrow = $(items);
		var ajaxDelay = 1000,
			animationDuration = 201;
		$newrow.appendTo($(".box-yacht__wrap .row"));
		$(".btn-more").on("click", function(e){
			e.preventDefault();
			let $self = $(e.currentTarget);
			if($self.hasClass('loading')){
				return;
			}
			$self.addClass('loading');
			setTimeout(function() {
				let numberItem=$(".btn-more span").html();
				$(".box-yacht__wrap .row .col-lg-4.col-md-6:hidden").slice(0, 6).slideDown();
				$(".btn-more span").html(parseInt(numberItem)-6)
				if($(".box-yacht__wrap .row .col-lg-4.col-md-6:hidden").length == 0) {
					$(".btn-more span").html("0");
					$(".btn-more").css({'display':'none'});
					$("#loader").css({'display':'none'});
				}
				setTimeout(function() {
				  $self.removeClass('loading');
				}, animationDuration);
			}, ajaxDelay);
		});
		
	}
}

/* ============================= 6, Box partner slider  ============================= */
var owl = $('.box-partner__main');
owl.owlCarousel({
	loop:true,
	nav:false,
	autoplay:true,
	responsive:{
		0:{
			items:2
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	},
	autoplayTimeout:3000,
	autoplayHoverPause:true
});
/* ============================= 7, Animtation Service  ============================= */
const animationService = {
	init:function () {
		this.aniService();
	},
	aniService:function () {
		let widthBox = $(".service-section .service__main-content .box__service-content .content__detail").outerWidth();
		if($(window).width() >= 993) {
			$(window).scroll(function (event) {
				let scroll = $(window).scrollTop();
				let icon = $(".service-section .service__main-content .box__service-content .content__detail-right i");
				let boxContent = $(".service-section .service__main-content .box__service-content .content__detail");
				let content = $('.box__service-content');
				let footer = $('.footer').position().top;
				let y = 0;
				($('.service__main-content').position() === 'undefined') ? y = $('.service__main-content').position().top : y =0;
				if (scroll >= y - content.height()) {
					icon.css({"-webkit-transform": "translateX(0%)"});
				} else {
					icon.css({"-webkit-transform": "translateX(-38%)"});
				}
				if (scroll < y + content.height() - 100 || scroll > footer - 840) {
					boxContent.removeAttr('style');
				}
				if (scroll >= y + content.height() - 120 && scroll <= y + content.height() || scroll > footer - 920) {
					icon.css({"-webkit-transform": "translateX(-38%)"});
				}
				if (scroll >= y + content.height() - 100 && scroll <= footer - 920) {
					icon.css({"-webkit-transform": "translateX(0%)"});
					boxContent.css({
						"position": "fixed",
						"bottom": "0",
						"width": widthBox + "px",
						"animation": "contentFadeIn 1s",
						"border-top-right-radius": "10px",
						"border-top-left-radius": "10px",
						"border-bottom-left-radius": "0px",
						"border-bottom-right-radius": "0px",
					});
				}
			});
		}
	}
}

