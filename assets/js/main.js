/*============================Menu Table===================
- 1, init
- 2, Navigation
- 3, Happy Client Slider
- 4, Box discover slider
- 5, du-thuyen-desktop load more 
- 6, Box partner slider
- 7, Animtation Service
- 8, Box partner slider mb
*/
/* ============================= 1, init  ============================= */

$(document).ready(function() {
	navigation.init();
	date.init();
	happyClient.init()
	happyClientMb.init();
	boxDiscoverSlider.init();
	customModal.init();
	partnerSlider.init()
	partnerSlidermb.init()
	loadMore.init();
	animationService.init();
	menuMb.init();
	loadMoreOther.init();
	showScheduleList.init();
	boxSaleListSlider.init();
	boxWhereGoSlider.init();
	playVideo.init();
	flatpickrDate.init();
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
			var nav = $('.nav');
			var nav = $('.header-mb')
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				$(".nav").addClass("nav--fixed");
				topBar.css({"display": "none"});
				nav.addClass("header-mb--fixed");
			} else {
				$(".nav").removeClass("nav--fixed");
				topBar.css({"display": "flex"});
				nav.removeClass("header-mb--fixed");
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
		$('.box-discover-section .owl-carousel').owlCarousel({
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
		$("#datepickerMobile").datepicker({
			format: 'yyyy-mm-dd',
			autoclose: true,
			language: 'vi',
			startDate: "currentDate",
		});
		today = new Date(today.format('YYYY-MM-DD'))
		$("#datepicker").datepicker("setDate", today);
		$("#datepicker").text(`${today.getDate()} tháng ${today.getMonth()+1}, ${today.getFullYear()}`);
		$("#datepickerMobile").datepicker("setDate", today);
		$("#datepickerMobile").text(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`);
		$("#toggle").click(function(e) {
			e.preventDefault();
			$("#datepicker").datepicker("show");
			$("#datepickerMobile").datepicker("show");
		})

		$("#toggle_cal").click(function(e) {
			e.preventDefault();
			$("#datepicker").datepicker("show");
			$("#datepickerMobile").datepicker("show");
		})
		$("#dateLabel").click(function(e) {
			e.preventDefault();
			$("#datepicker").datepicker("show");
			$("#datepickerMobile").datepicker("show");
		});
		$("#datepicker").on("changeDate", function() {
			var selectedDate = $("#datepicker").datepicker("getFormattedDate")
			$("#dateInput").val(selectedDate);
			selectedDate = new Date(selectedDate)
			$("#datepicker").text(`${selectedDate.getDate()} tháng ${selectedDate.getMonth()+1}, ${selectedDate.getFullYear()}`);
		});
		$("#datepickerMobile").on("changeDate", function() {
			var selectedDate = $("#datepickerMobile").datepicker("getFormattedDate")
			$("#dateInput").val(selectedDate);
			selectedDate = new Date(selectedDate)
			$("#datepickerMobile").text(`${selectedDate.getDate()}/${selectedDate.getMonth()+1}/${selectedDate.getFullYear()}`);
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
			$("body").css("overflow", "hidden");
		})
		$(".closePopup").on("click",function() {
			$('.full-screen').addClass('hidden');
			$("body").css("overflow", "scroll");
		})
	}
}
/* ============================= 5,du-thuyen-desktop load more  ============================= */
const loadMore={
	init:function(){
		this.clickLoad()
	},
	clickLoad:function(){
		var ajaxDelay = 2000;
		$(".btn-more").on("click", function(e){
			var data=[
				{img:'assets/images/box-yacht/lee-06355.png'},
				{img:'assets/images/box-yacht/lee-06355.png'},
				{img:'assets/images/box-yacht/lee-06355.png'},
				{img:'assets/images/box-yacht/lee-06355.png'},
				{img:'assets/images/box-yacht/lee-06355.png'},
				{img:'assets/images/box-yacht/lee-06355.png'},
			]
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
			e.preventDefault();
			// call ajax
			// call jax
			var seft = $(this)
			seft.addClass('loading');
			setTimeout(function() {
				//phần hiển thị còn bao nhiêu cái để load thêm, có gì thì sua o day
				// $(".btn-more span").html(parseInt(numberItem)-6)
				$(".box-yacht__wrap .row").append($newrow)
				//code js ẩn nút
				// $(".btn-more").hide();
				// $("#loader").hide();
				seft.removeClass('loading');
			}, ajaxDelay);
		});
	}
}

/* ============================= 6, Box partner slider  ============================= */
const partnerSlider = {
	init: function () {
		this.partnerSlider();
	},
	partnerSlider: function () {
		$('.partner-slider-section .owl-carousel').owlCarousel({
			loop:true,
			nav:false,
			margin:50,
			responsive:{
				0:{
					items:2
				},
				767:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			},
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
	},
}
/* ============================= 7, Animtation Service  ============================= */
const animationService = {
	init:function () {
		this.aniService();
	},
	aniService:function () {
		let widthBox = $(".service-section .service__main-content .box__service-content .content__detail").outerWidth();
		if($(window).width() >= 993) {
			if($(".service-section .service__main-content .box__service-content .content__detail").length ===0) {
				return;
			}
			const y = $(".service-section .service__main-content .box__service-content .content__detail").offset().top - 123;
			$(window).scroll(function (event) {
				let scroll = $(window).scrollTop();
				const windowHeight = $(window).height();
				var icon = $(".service-section .service__main-content .box__service-content .content__detail-right i");
				var boxContent = $(".service-section .service__main-content .box__service-content .content__detail");
				if ($(".service__main-content")[0]){
					if (scroll < 400) {
						boxContent.removeAttr('style');
						icon.css({"-webkit-transform": "translateX(-38%)"});
					}else if (scroll >= 400 && scroll + windowHeight < y){
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
					}else if(scroll + windowHeight >= y)  {
						boxContent.removeAttr('style');
					}
				} 
			});
		}
	}
}
/* ============================= 8, Box partner slider mb ============================= */
const partnerSlidermb = {
	init: function () {
		this.partnerSlidermb();
	},
	partnerSlidermb: function () {
		$('.partner-slider-section-mb .owl-carousel').owlCarousel({
			loop:true,
			nav:false,
			margin:50,
			items:2,
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
	},
}
/* ============================= 8,list-boad-desktop load more  ============================= */
const loadMoreOther={
	init:function(){
		this.clickLoadOther()
	},
	clickLoadOther:function(){
		var data=[
			{img:'assets/images/box-aycht-horizontal1.png'},
			{img:'assets/images/box-aycht-horizontal1.png'},
			{img:'assets/images/box-aycht-horizontal1.png'},
			{img:'assets/images/box-aycht-horizontal1.png'},
			{img:'assets/images/box-aycht-horizontal1.png'},
			{img:'assets/images/box-aycht-horizontal1.png'},
			{img:'assets/images/box-aycht-horizontal1.png'},
			{img:'assets/images/box-aycht-horizontal1.png'}
		]
		$(".box-yacht-horizontal-wrapper .row .col-lg-12.col-md-6").slice(0, 2).show();
		var items='';
		if(data){
			for (let i = 0; i < data.length; i++) {
				items+= `<div class="col-lg-12 col-md-6">
				<div class="box-yacht-horizontal">
				  <div class="box-yacht-horizontal__group">
					<div class="box-yacht-horizontal__img openPopup" data-popup="#popup-2">
					  <div class="box-yacht-horizontal__img"><img src="assets/images/box-aycht-horizontal1.png" alt=""></div>
					  <div class="photos"><i class="fas fa-plus"></i>Xem ảnh tàu</div>
					</div>
					<div class="box-yacht-horizontal__info"><a href="">
						<h3>Tàu 18 chỗ thường</h3></a>
					  <div class="btn-hover-wrapper"><span class="blue btn-hover">Có đồ ăn</span><span class="blue hasborder btn-hover">Có xe đưa đón</span><span class="orange btn-hover">Có ưu đãi</span></div>
					  <ul>
						<li>Cảng khởi hành: Tuần Châu</li>
						<li>Thời gian khởi hành: 08h15</li>
						<li>Vé thắng cảnh</li>
						<li>Chèo thuyền Kayak 40.000 đ/người</li>
						<li>Đưa đón/tiễn Tại khách sạn ở Bãi Cháy</li>
						<li>Vé thăm quan tuyến</li>
						<li>Ăn trên tàu bữa trưa / chiều 150.000 đ/người</li>
						<li>Hướng dẫn viên du lịch suốt hành trình</li>
					  </ul>
					</div>
					<div class="box-yacht-horizontal__info-reserve">
					  <div class="price"><span class="price-new">đ 399,000</span><span class="price-old">đ 599,000</span><a class="btn-reserve" href="./booking-train-desktop.html"><span>Đặt tàu</span></a></div>
					</div>
				  </div>
				  <div class="box-yacht-horizontal__sale"></div>
				</div>
	  </div>`
			}
		}
		var ajaxDelay = 1000,
			animationDuration = 201;
		$(".ac").on("click", function(e){
			console.log("tesst")
			let $self = $(e.currentTarget);
			$self.addClass('loading');
			setTimeout(function() {
				$(".box-yacht-horizontal-wrapper .row .col-lg-12.col-md-6:hidden").slice(0,3).slideDown();
				if($(".box-yacht-horizontal-wrapper .row .col-lg-12.col-md-6:hidden").length == 0) {
					$(".ac span").html("+98");
					$(".ac").css({'display':'block'});
					$("#loader").css({'display':'block'});
				}
				setTimeout(function() {
				  $self.removeClass('loading');
				}, animationDuration);
			}, ajaxDelay);
		});
	}
}

/* ============================= 9, menu mobile ============================= */
const menuMb = {
	init:function () {
		this.menuMb();
	},
	menuMb: function() {
		var menuMb = $('.menu-mb');
		var navBtn = $('.nav__btn');
		var menuOverlay = $('.menu-mb__overlay');
		var closeBtn = $('.menu-mb__btn');
		navBtn.click(function() {
			menuMb.addClass('menu-mb--active');
			$("body").addClass("modal-open");
		})
		menuOverlay.add(closeBtn).click(function() {
			menuMb.removeClass('menu-mb--active');
			$("body").removeClass("modal-open");
		})
	},
}
/* ============================= 10, Happy Client MOBI ============================= */
const happyClientMb = {
	init:function () {
		this.happyClientMb();
	},
	happyClientMb:function () {
		$('.happy__client__item .item__device .device-carousel-mb').owlCarousel({
			loop:true,
			nav:false,
			dots: false,
			margin:0,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			},
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
	}
}
/* ============================= 11, Show Schedule List  ============================= */
const showScheduleList = {
	init: function () {
		this.showScheduleList();
	},
	showScheduleList:function () {
		const btn = $('.schedule__top-btn');
		$('.schedule__toDo').eq(0).addClass('active');
		$('.schedule__toDo').eq(0).css('display','block');
		btn.eq(0).addClass('active');
		btn.click(function(e) {
			const listToDo = $(this).parent().next();
			listToDo.slideToggle(400);
			if(listToDo.hasClass('active')) {
				listToDo.removeClass('active');
				$(this).removeClass('active');
			} else {
				listToDo.addClass('active')
				$(this).addClass('active');
			}
		})
	}
}
/* ============================= 12, Box Sale List Slider  ============================= */
const boxSaleListSlider = {
	init:function () {
		this.boxSaleListSlider();
	},
	boxSaleListSlider:function () {
		$('.box-sale-list .owl-carousel').owlCarousel({
			loop:true,
			margin:16,
			nav:false,
			dots: false,
			responsive:{
				0:{
					items:1.5
				},
			},
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
	}
}
/* ============================= 12, Box Where Go Slider  ============================= */
const boxWhereGoSlider = {
	init:function () {
		this.boxWhereGoSlider();
	},
	boxWhereGoSlider:function () {
		$('.box-where-go .owl-carousel').owlCarousel({
			loop:true,
			margin:16,
			nav:false,
			dots: false,
			autoHeight: true,
			responsive:{
				0:{
					items:1.5
				},
			},
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
	}
}
/* ============================= 12, play video  ============================= */
const playVideo = {
	init: function () {
		this.clickPlay();
	},
	clickPlay:function () {
		$('.play-icon').click(function(){
			$('.video video')[0].play();
			$(this).css({'display':'none'});
			$('.video video').attr('controls','');
		})
	}
}

const flatpickrDate = {
	init: function () {
		this.flatpickrAZ();
	},
	flatpickrAZ : function () {
		flatpickr('#calendar-ja', {
			"locale": "vn",
			"minDate": new Date(),
			"dateFormat": "d/m/Y",
		});
	}
}