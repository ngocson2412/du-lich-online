/*============================Menu Table===================
- 1, init
- 2, Navigation
- 3, Happy Client Slider
- 4, Box discover slider
- 5, du-thuyen-desktop load more 
- 6, Box partner slider
- 7, Animtation Service
- 8, Box partner slider mb
- 9, fix Column Newfeed Detail
- 10, showMoreDetailYatch
*/
/* ============================= 1, init  ============================= */

$(document).ready(function () {
    fastnews.init();
    navigation.init();
    happyClient.init();
    happyClientMb.init();
    boxDiscoverSlider.init();
    customModal.init();
    partnerSlider.init();
    partnerSlidermb.init();
    loadMore.init();
    animationService.init();
    menuMb.init();
    loadMoreOther.init();
    showScheduleList.init();
    boxSaleListSlider.init();
    boxWhereGoSlider.init();
    playVideo.init();
    flatpickrDate.init();
    filterMB.init();
    tabContent.init();
    provisoTab.init();
    tintuc.init();
    fixColumnNewfeed.init();
    selectOption.init();
    filterRadio.init();
    filterDextop.init();
    selectOption1.init();
    showMoreDetailYatch.init();
    toastMessage.init();
    comment.init();
    reviewButtonClick.init();
    setMinDate.init();
    videoTauThamVinh.init();
});

const fastnews = {
    init: function () {
        this.newslider();
    },
    newslider: function () {
        $(".fast-news__list").owlCarousel({
            dots: false,
            animateIn: "fadeInUp",
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
        });
    },
};

/* ============================= 2, Navigation  ============================= */
const navigation = {
    init: function () {
        this.navbarFixed();
        this.slideToggle();
    },
    navbarFixed: function () {
        var lastScrollTop = 0;
        var heightHeader = $(".header").outerHeight();
        window.addEventListener(
            "scroll",
            function () {
                var st =
                    window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop) {
                    // downscroll code
                    $(".nav").removeClass("nav--fixed");
                    $(".dont_image_layout").removeClass("padding-top-120");
                    $(".header").next().css({ paddingTop: "0" });
                } else {
                    // upscroll code
                    $(".nav").addClass("nav--fixed");
                    $(".dont_image_layout").addClass("padding-top-120");
                    $(".header").next().css({ paddingTop: heightHeader });
                }
                lastScrollTop = st;
            },
            false
        );
    },
    slideToggle: function () {
        $(".slideToggle").click(function () {
            $(".wrapper__service-price").slideToggle();
        });
        $(".toggleslide").click(function () {
            $(".wrapper__refund-detail").slideToggle();
        });
    },
};

/* ============================= 3, Happy Client Slider  ============================= */

const happyClient = {
    init: function () {
        this.happyClientCarousel();
    },
    happyClientCarousel: function () {
        const optionsDevice = {
            loop: true,
            margin: 0,
            autoplay: false,
            dots: true,
            dotsContainer: ".client-carousel-control .pagination-control",
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
            },
        };
        const optionsClient = {
            loop: true,
            margin: 10,
            autoplay: true,
            dots: false,
            nav: true,
            navText: [
                "<img src='./assets/images/happy-client-slider/icon-angle-left.svg' />",
                "<img src='./assets/images/happy-client-slider/icon-angle-right.svg' />",
            ],
            navContainer: ".client-carousel-control .nav-control",
            responsive: {
                0: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        };
        const slideLength = document.querySelectorAll(
            ".device-carousel .device-slide"
        );
        showPerPageCarousel(1, slideLength.length);

        const owlDevice = $(".device-carousel").owlCarousel(optionsDevice);
        const owlClient = $(".client-card-carousel").owlCarousel(optionsClient);

        function showPerPageCarousel(perpage, pages) {
            $(".carousel-info #client-carousel-current-slide").html(perpage);
            $(".carousel-info #client-carousel-total").html(pages);
        }

        if (owlDevice && owlClient) {
            // Event Change Carousel
            owlClient.on("changed.owl.carousel", function (event) {
                const currentIndex = event.item.index;
                owlDevice.trigger("to.owl.carousel", [currentIndex - 3, 200]);
            });
            owlDevice.on("changed.owl.carousel", function (event) {
                const currentIndex = event.item.index;
                owlClient.trigger("to.owl.carousel", [currentIndex - 3, 200]);
                showPerPageCarousel(currentIndex - 2, slideLength.length);
            });
        }
    },
};

/* ============================= 4, Box discover slider  ============================= */
const boxDiscoverSlider = {
    init: function () {
        this.boxDiscoverSlider();
    },
    boxDiscoverSlider: function () {
        $(".box-discover-section .owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });
    },
};

/* ============================= 4, Custom modal  ============================= */
const customModal = {
    init: function () {
        this.customModal();
    },
    customModal: function () {
        $(".openPopup").on("click", function () {
            var popup = $(this).data("popup");
            $(popup).removeClass("hidden");
            $("body").css("overflow", "hidden");
        });
        $(".closePopup").on("click", function () {
            $(".full-screen").addClass("hidden");
            $("body").css("overflow", "scroll");

            const outerParent = $(this).parent().parent();
            const text = outerParent.find(".item__paragraph");
            const btnShowMore = outerParent.find(".item__show-more-p");

            if (text && btnShowMore) {
                text.removeClass("show-more");
                btnShowMore.html(
                    '<i class="fas fa-angle-down mr-2"></i> Xem chi tiết '
                );
                btnShowMore.addClass("show");
                btnShowMore.removeClass("active");
            }
        });
    },
};
/* ============================= 5,du-thuyen-desktop load more  ============================= */
const loadMore = {
    init: function () {
        this.clickLoad();
    },
    clickLoad: function () {
        var ajaxDelay = 2000;
        $(".btn-more").on("click", function (e) {
            var data = [
                { img: "assets/images/box-yacht/lee-06355.png" },
                { img: "assets/images/box-yacht/lee-06355.png" },
                { img: "assets/images/box-yacht/lee-06355.png" },
                { img: "assets/images/box-yacht/lee-06355.png" },
                { img: "assets/images/box-yacht/lee-06355.png" },
                { img: "assets/images/box-yacht/lee-06355.png" },
            ];
            var items = "";
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    items += `<div class="col-lg-4 col-md-6">
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
						</div>`;
                }
            }
            let $newrow = $(items);
            e.preventDefault();
            // call ajax
            // call jax
            var seft = $(this);
            seft.addClass("loading");
            setTimeout(function () {
                //phần hiển thị còn bao nhiêu cái để load thêm, có gì thì sua o day
                // $(".btn-more span").html(parseInt(numberItem)-6)
                $(".box-yacht__wrap .row").append($newrow);
                //code js ẩn nút
                // $(".btn-more").hide();
                // $("#loader").hide();
                seft.removeClass("loading");
            }, ajaxDelay);
        });
    },
};

/* ============================= 6, Box partner slider  ============================= */
const partnerSlider = {
    init: function () {
        this.partnerSlider();
    },
    partnerSlider: function () {
        $(".partner-slider-section .owl-carousel").owlCarousel({
            loop: true,
            nav: false,
            margin: 50,
            responsive: {
                0: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
            },
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });
    },
};
/* ============================= 7, Animtation Service  ============================= */
const animationService = {
    init: function () {
        this.aniService();
    },
    aniService: function () {
        let widthBox = $(
            ".service-section .service__main-content .box__service-content .content__detail"
        ).outerWidth();
        if ($(window).width() >= 993) {
            if (
                $(
                    ".service-section .service__main-content .box__service-content .content__detail"
                ).length === 0
            ) {
                return;
            }
            const y =
                $(
                    ".service-section .service__main-content .box__service-content .content__detail"
                ).offset().top - 123;
            $(window).scroll(function (event) {
                let scroll = $(window).scrollTop();
                const windowHeight = $(window).height();
                var icon = $(
                    ".service-section .service__main-content .box__service-content .content__detail-right i"
                );
                var boxContent = $(
                    ".service-section .service__main-content .box__service-content .content__detail"
                );
                if ($(".service__main-content")[0]) {
                    if (scroll < 400) {
                        boxContent.removeAttr("style");
                        icon.css({ "-webkit-transform": "translateX(-38%)" });
                    } else if (
                        (scroll >= 400 && scroll + windowHeight < y) ||
                        scroll > y + 60
                    ) {
                        icon.css({ "-webkit-transform": "translateX(0%)" });
                        boxContent.css({
                            position: "fixed",
                            bottom: "0",
                            width: widthBox + "px",
                            animation: "contentFadeIn 1s",
                            "border-top-right-radius": "10px",
                            "border-top-left-radius": "10px",
                            "border-bottom-left-radius": "0px",
                            "border-bottom-right-radius": "0px",
                        });
                    } else if (scroll + windowHeight >= y) {
                        boxContent.removeAttr("style");
                    }
                }
            });
        }
    },
};
/* ============================= 8, Box partner slider mb ============================= */
const partnerSlidermb = {
    init: function () {
        this.partnerSlidermb();
    },
    partnerSlidermb: function () {
        $(".partner-slider-section-mb .owl-carousel").owlCarousel({
            loop: true,
            nav: false,
            margin: 50,
            items: 2,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });
    },
};
/* ============================= 8,list-boad-desktop load more  ============================= */
const loadMoreOther = {
    init: function () {
        this.clickLoadOther();
    },
    clickLoadOther: function () {
        var data = [
            { img: "assets/images/box-aycht-horizontal1.png" },
            { img: "assets/images/box-aycht-horizontal1.png" },
            { img: "assets/images/box-aycht-horizontal1.png" },
            { img: "assets/images/box-aycht-horizontal1.png" },
            { img: "assets/images/box-aycht-horizontal1.png" },
            { img: "assets/images/box-aycht-horizontal1.png" },
            { img: "assets/images/box-aycht-horizontal1.png" },
            { img: "assets/images/box-aycht-horizontal1.png" },
        ];
        $(".box-yacht-horizontal-wrapper .row .col-lg-12.col-md-6")
            .slice(0, 2)
            .show();
        var items = "";
        if (data) {
            for (let i = 0; i < data.length; i++) {
                items += `<div class="col-lg-12 col-md-6">
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
	  </div>`;
            }
        }
        var ajaxDelay = 1000,
            animationDuration = 201;
        $(".ac").on("click", function (e) {
            let $self = $(e.currentTarget);
            $self.addClass("loading");
            setTimeout(function () {
                $(
                    ".box-yacht-horizontal-wrapper .row .col-lg-12.col-md-6:hidden"
                )
                    .slice(0, 3)
                    .slideDown();
                if (
                    $(
                        ".box-yacht-horizontal-wrapper .row .col-lg-12.col-md-6:hidden"
                    ).length == 0
                ) {
                    $(".ac span").html("+98");
                    $(".ac").css({ display: "block" });
                    $("#loader").css({ display: "block" });
                }
                setTimeout(function () {
                    $self.removeClass("loading");
                }, animationDuration);
            }, ajaxDelay);
        });
    },
};

/* ============================= 9, menu mobile ============================= */
const menuMb = {
    init: function () {
        this.menuMb();
    },
    menuMb: function () {
        $(".nav__btn").click(function () {
            $(".menu-mbv2").toggleClass("active");
        });
        $(".menu-mbv2 .--havesub").click(function (e) {
            e.preventDefault();
            let dataID = $(this).attr("data-idsub");
            $(dataID).addClass("active");
        });
        $(".submenu-item .back").click(function () {
            $(".menu-mbv2 .submenu-item").removeClass("active");
        });
    },
};
/* ============================= 10, Happy Client MOBI ============================= */
const happyClientMb = {
    init: function () {
        this.happyClientMb();
    },
    happyClientMb: function () {
        $(".happy__client__item .item__device .device-carousel-mb").owlCarousel(
            {
                loop: true,
                nav: false,
                dots: false,
                margin: 0,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 3,
                    },
                    1024: {
                        items: 4,
                    },
                    1200: {
                        items: 5,
                    },
                },
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
            }
        );
    },
};
/* ============================= 11, Show Schedule List  ============================= */
const showScheduleList = {
    init: function () {
        this.showScheduleList();
    },
    showScheduleList: function () {
        const btn = $(".schedule__top-btn");
        $(".schedule__toDo").eq(0).addClass("active");
        $(".schedule__toDo").eq(0).css("display", "block");
        btn.eq(0).addClass("active");
        btn.click(function (e) {
            const listToDo = $(this).parent().next();
            listToDo.slideToggle(400);
            if (listToDo.hasClass("active")) {
                listToDo.removeClass("active");
                $(this).removeClass("active");
            } else {
                listToDo.addClass("active");
                $(this).addClass("active");
            }
        });
    },
};
/* ============================= 12, Box Sale List Slider  ============================= */
const boxSaleListSlider = {
    init: function () {
        this.boxSaleListSlider();
    },
    boxSaleListSlider: function () {
        $(".box-sale-list .owl-carousel").owlCarousel({
            loop: true,
            margin: 16,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1.5,
                },
            },
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });
    },
};
/* ============================= 12, Box Where Go Slider  ============================= */
const boxWhereGoSlider = {
    init: function () {
        this.boxWhereGoSlider();
    },
    boxWhereGoSlider: function () {
        $(".box-where-go .owl-carousel").owlCarousel({
            loop: true,
            margin: 16,
            nav: false,
            dots: false,
            autoHeight: true,
            responsive: {
                0: {
                    items: 1.5,
                },
            },
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });
    },
};

/* ============================= 13, Select options  ============================= */
const selectOption = {
    init: function () {
        this.selectMenu();
    },
    selectMenu: function () {
        const arrowBtn = document.querySelector("#selectMenu");
        const arr2 = document.querySelector("#selectServices");
        const arr3 = document.querySelector("#timeSelects");
        const optionMenu = document.querySelector("#options-select");
        const serviceSelect = document.querySelector("#services-select");
        const timeSelect = document.querySelector("#time-select");
        const serviceBox = document.querySelector(".cano-service");
        const customSelectWrapper = document.querySelector("#custom-select");
        if (!customSelectWrapper) {
            return;
        }
        const displaySelect =
            customSelectWrapper.querySelector("#display-select");
        const optionsSelect =
            customSelectWrapper.querySelectorAll("#options-select li");
        $("#services-select li").click(function () {
            var value = $(this).attr("data-service");
            var label = $(this).attr("data-search-label");
            $("#servicesID").val(value);
            $("#service--select").html(label);
        });

        $("#time-select li").click(function () {
            var value = $(this).attr("data-service");
            var label = $(this).attr("data-time-label");
            $("#timeID").val(value);
            $("#time--select").html(label);
        });

        arrowBtn.addEventListener("click", (e) => {
            if ($(e.target).closest(".options-select").length === 0) {
                optionMenu.classList.toggle("active");
                serviceBox.classList.remove("change-br");
                serviceSelect.classList.remove("active");
                if (timeSelect) {
                    timeSelect.classList.remove("active");
                }
            }
        });

        arr2.addEventListener("click", () => {
            optionMenu.classList.remove("active");
            serviceSelect.classList.toggle("active");
            serviceBox.classList.toggle("change-br");
            if (timeSelect) {
                timeSelect.classList.remove("active");
            }
        });

        $(".flatpickr-input").click(function () {
            optionMenu.classList.remove("active");
            serviceBox.classList.remove("change-br");
            serviceSelect.classList.remove("active");
            if (timeSelect) {
                timeSelect.classList.remove("active");
            }
        });

        $(".decrease-btn").bind("click", function () {
            var value = Number($(this).parent().find(".value-btn").html());
            if (value == 0) return;
            $(this)
                .parent()
                .find(".value-btn")
                .html(value - 1);
            $(this)
                .parent()
                .find("input")
                .val(value - 1);
            displaySelectValue();
        });
        $(".increase-btn").bind("click", function () {
            var value = Number($(this).parent().find(".value-btn").html());
            $(this)
                .parent()
                .find(".value-btn")
                .html(value + 1);
            $(this)
                .parent()
                .find("input")
                .val(value + 1);
            displaySelectValue();
        });

        const displaySelectValue = () => {
            let nguoiLonValue, treEmValue, nguoiGiaValue;
            const allValueBtn = document.querySelectorAll(
                "#options-select .value-btn"
            );
            const data = [];
            allValueBtn.forEach((item) => {
                if (item.dataset.value === "adults")
                    nguoiLonValue = item.innerHTML;
                if (item.dataset.value === "child") treEmValue = item.innerHTML;
                if (item.dataset.value === "elderly")
                    nguoiGiaValue = item.innerHTML;
            });

            if (Number(nguoiLonValue) > 0)
                data.push(`${nguoiLonValue} người lớn`);
            if (Number(treEmValue) > 0) data.push(`${treEmValue} trẻ em`);
            if (Number(nguoiGiaValue) > 0)
                data.push(`${nguoiGiaValue} người già`);

            if (data.length === 0) {
                displaySelect.innerHTML = "Chưa được chọn";
            } else {
                displaySelect.innerHTML = data.toString();
            }
        };

        displaySelectValue();
        if (arr3) {
            arr3.addEventListener("click", () => {
                if (timeSelect) {
                    timeSelect.classList.toggle("active");
                }
                optionMenu.classList.remove("active");
                serviceBox.classList.remove("change-br");
                serviceSelect.classList.remove("active");
            });
        }
        $(document).on("click", function (e) {
            if (
                $(e.target).closest(".options-select").length === 0 &&
                $(e.target).closest(".cano-service").length === 0
            ) {
                $(".options-select").removeClass("active");
            }
        });
    },
};
/* ============================= 12, play video  ============================= */
const playVideo = {
    init: function () {
        this.clickPlay();
    },
    clickPlay: function () {
        $(".play-icon").click(function () {
            $(".video video")[0].play();
            $(this).css({ display: "none" });
            $(".video video").attr("controls", "");
        });
    },
};

const flatpickrDate = {
    init: function () {
        this.flatpickrAZ();
    },
    flatpickrAZ: function () {
        var today = moment();
        $(".calendar-text").val(today.format("YYYY-MM-DD"));
        flatpickr("#calendar", {
            locale: "vn",
            // minDate: new Date(),
            disable: [
                "2021-04-30",
                "2021-05-01",
                "2025-03-08",
                new Date(2021, 4, 30),
            ],
            dateFormat: "d/m/Y",
        });
        flatpickr("#calendar-ja", {
            locale: "vn",
            // minDate: new Date(),
            disable: [
                "2021-04-30",
                "2021-05-01",
                "2025-03-08",
                new Date(2025, 4, 9),
            ],
            dateFormat: "d/m/Y",
            disableMobile: true,
            defaultDate: new Date(),
            altInput: true,
            altFormat: "d/m/Y",
            appendTo: window.document.querySelector("#flatpickr-custom"),
        });
        flatpickr("#calendar-ja-from", {
            locale: "vn",
            minDate: new Date(), // set default value is today
            disable: [
                "2021-04-30",
                "2021-05-01",
                "2025-03-08",
                new Date(2025, 4, 9),
            ],
            dateFormat: "m/d/Y",
            disableMobile: true,
            defaultDate: new Date(),
            altInput: true,
            altFormat: "d F Y",
            appendTo: window.document.querySelector("#flatpickr-custom-1"),
        });
        flatpickr("#calendar-ja-to", {
            locale: "vn",
            minDate: new Date(), // set default value is today
            disable: [
                "2021-04-30",
                "2021-05-01",
                "2025-03-08",
                new Date(2025, 4, 9),
            ],
            dateFormat: "m/d/Y",
            disableMobile: true,
            defaultDate: new Date(),
            altInput: true,
            altFormat: "d F Y",
            appendTo: window.document.querySelector("#flatpickr-custom-2"),
        });
        flatpickr("#calendar-ja-mb", {
            locale: "vn",
            // minDate: new Date(),
            disable: [
                "2021-04-30",
                "2021-05-01",
                "2025-03-08",
                new Date(2025, 4, 9),
            ],
            dateFormat: "d/m/Y",
            disableMobile: true,
            defaultDate: new Date(),
            altInput: true,
            altFormat: "d/m/Y",
        });
        flatpickr("#calendar-ja-mb-from", {
            locale: "vn",
            // minDate: new Date(),
            disable: [
                "2021-04-30",
                "2021-05-01",
                "2025-03-08",
                new Date(2025, 4, 9),
            ],
            dateFormat: "d/m/Y",
            disableMobile: true,
            defaultDate: new Date(),
            altInput: true,
            altFormat: "d/m/Y",
        });
        flatpickr("#calendar-ja-mb-to", {
            locale: "vn",
            // minDate: new Date(),
            disable: [
                "2021-04-30",
                "2021-05-01",
                "2025-03-08",
                new Date(2025, 4, 9),
            ],
            dateFormat: "d/m/Y",
            disableMobile: true,
            defaultDate: new Date(),
            altInput: true,
            altFormat: "d/m/Y",
        });
        $("#timePicker").flatpickr({
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
            dateFormat: "H:i",
            altFormat: "H:i",
            disableMobile: true,
            altInput: true,
            defaultDate: "13:00",
        });
    },
};
/* ============================= 13, filterMB  ============================= */
const filterMB = {
    init: function () {
        this.clickFilter();
    },
    clickFilter: function () {
        $(".mb__wrapper-filter").click(function () {
            $(".filter-mbv2").addClass("active");
            $("body").css("overflow", "hidden");
        });
        $(".filter-mbv2 .fiter-mb__top .close").click(function (e) {
            e.preventDefault();
            $(".filter-mbv2 ").removeClass("active");
            $("body").css("overflow", "scroll");
        });
        $(".filter-mbv2 .fiter-mb__top .delete").click(function (e) {
            let textdefaul = document.querySelectorAll(
                ".fiter-mb__list .choose-radio .radio-value"
            );
            for (let i = 0; i < textdefaul.length; i++) {
                textdefaul[i].children[0].innerHTML =
                    textdefaul[i].getAttribute("data-defaultValue");
            }
        });
        $(".fiter-mb__more .submit .reset").click(function (e) {
            e.preventDefault();
            $(".fiter-mb__more form").trigger("reset");
        });
        $(".filter-mbv2 .fiter-mb__top .filter-more").click(function () {
            $(".fiter-mb__more").addClass("active");
        });
        $(".fiter-mb__more .back").click(function () {
            $(".fiter-mb__more").removeClass("active");
        });
        $(".filter-mbv2 .fiter-mb__item .choose-radio").click(function () {
            $(this)
                .closest(".fiter-mb__item")
                .find(".fiter-mb__price")
                .addClass("active");
        });
        $(".fiter-mb__price .back ").click(function () {
            $(".fiter-mb__price").removeClass("active");
        });
        $(".fiter-mb__price .radio").click(function () {
            let valueOption = $($(this).parents()[3]).find(".radio-value span");
            valueOption.html($(this).find("span").html());
            $(".fiter-mb__price").removeClass("active");
        });
    },
};
/* ============================= 14, tab content  ============================= */
const tabContent = {
    init: function () {
        this.clickActive();
        this.owlTab();
    },
    clickActive: function () {
        $(".itinerary-section .schedule-list a").on("click", function (e) {
            e.preventDefault();
            $(this).addClass("active");
            $(".itinerary-section .schedule-list a")
                .not($(this))
                .removeClass("active");

            let attr = $(this).attr("data-tab");
            $(".itinerary-section .schedule").removeClass("current");
            $("#" + attr).addClass("current");
        });
        $(".information-section .schedule-list a").on("click", function (e) {
            e.preventDefault();
            $(this).addClass("active");
            $(".information-section .schedule-list a")
                .not($(this))
                .removeClass("active");
            let attr = $(this).attr("data-tab");
            $(".information-section .schedule").removeClass("current");
            $("#" + attr).addClass("current");
        });
    },
    owlTab: function () {
        $(".owl-carousel.tab").owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            items: 2.25,
            freeDrag: false,
        });
    },
};
/* ============================= 14, proviso tab-content  ============================= */
const provisoTab = {
    init: function () {
        this.clickTab();
    },
    clickTab: function () {
        $(".proviso-tab").click(function (e) {
            e.preventDefault();
            $(".proviso-tab").removeClass("active");
            $(this).addClass("active");
            let nameID = $(this).attr("data-id");
            $(".proviso-tab-content").css("display", "none");
            $("#" + nameID).css("display", "block");
        });
    },
};

const tintuc = {
    init: function () {
        this.tintuc();
    },
    tintuc: function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        });
    },
};
const fixColumnNewfeed = {
    init() {
        this.fixColumnNewfeed();
    },
    fixColumnNewfeed() {
        let col = $(".newfeed__left");
        let width = col.outerWidth();
        col.css("margin-left", -width);
        $(window).resize(function () {
            let widthResize = col.outerWidth();
            col.css("margin-left", -widthResize);
        });
    },
};
const filterRadio = {
    init: function () {
        this.clickActive();
    },
    clickActive: function () {
        $(".filter .hover_extra").on("click", function (e) {
            e.preventDefault();
            $(".filter-section .filter__radio").toggleClass("active");
            if ($(".filter-section .filter__radio").hasClass("active")) {
                $(".filter .hover_extra .fa-chevron-down").addClass("active");
            } else {
                $(".filter .hover_extra .fa-chevron-down").removeClass(
                    "active"
                );
            }
        });
        $(document).click(function (event) {
            if (!$(event.target).closest(".filter-section").length) {
                $("body")
                    .find(".filter-section .filter__radio")
                    .removeClass("active");
            }
        });
    },
};
/* ============================= , filter dextop  ============================= */

const filterDextop = {
    init: function () {
        this.handalClick();
    },
    handalClick: function () {
        $(".filter .filter__detail-select").click(function () {
            if ($(this).hasClass("active")) {
                $(".filter .filter__detail-select").removeClass("active");
            } else {
                $(".filter .filter__detail-select").removeClass("active");
                $(this).addClass("active");
            }
        });
        $(".filter .filter__detail-select .radio-ch").click(function (e) {
            e.stopPropagation();
            $(".filter .filter__detail-select").removeClass("active");
            let text = $(this).find("span").html();
            $($(this).parents()[1]).find(".select-value span").html(text);
        });
    },
};

/* ============================= 16 Select options trang dat ve cano  ============================= */

const selectOption1 = {
    init: function () {
        this.selectMenu();
    },
    selectMenu: function () {
        const removeactive = document.querySelector(".booking__train-infor");
        const arrowBtn = document.querySelector("#selectMenu1");
        const optionMenu = document.querySelector("#options-select1");
        const serviceBox = document.querySelector(".cano-service");
        const customSelectWrapper = document.querySelector("#custom-select1");
        if (!customSelectWrapper) {
            return;
        }
        const displaySelect =
            customSelectWrapper.querySelector("#display-select1");
        const optionsSelect = customSelectWrapper.querySelectorAll(
            "#options-select1 li"
        );

        $(".decrease-btn").bind("click", function () {
            var value = Number($(this).parent().find(".value-btn").html());
            if (value == 0) return;
            $(this)
                .parent()
                .find(".value-btn")
                .html(value - 1);
            $(this)
                .parent()
                .find("input")
                .val(value - 1);
            displaySelectValue();
        });
        $(".increase-btn").bind("click", function () {
            var value = Number($(this).parent().find(".value-btn").html());
            $(this)
                .parent()
                .find(".value-btn")
                .html(value + 1);
            $(this)
                .parent()
                .find("input")
                .val(value + 1);
            displaySelectValue();
        });
        arrowBtn.addEventListener("click", (e) => {
            if ($(e.target).closest(".options-select").length === 0) {
                optionMenu.classList.toggle("active");
                serviceBox.classList.remove("change-br");
            }
        });
        const displaySelectValue = () => {
            let nguoiLonValue, treEmValue, nguoiGiaValue;
            const allValueBtn = document.querySelectorAll(
                "#options-select1 .value-btn"
            );
            const data = [];
            allValueBtn.forEach((item) => {
                if (item.dataset.value === "adults")
                    nguoiLonValue = item.innerHTML;
                if (item.dataset.value === "child") treEmValue = item.innerHTML;
                if (item.dataset.value === "elderly")
                    nguoiGiaValue = item.innerHTML;
            });
            if (Number(nguoiLonValue) > 0)
                data.push(`${nguoiLonValue} người lớn`);
            if (Number(treEmValue) > 0) data.push(`${treEmValue} trẻ em`);
            if (Number(nguoiGiaValue) > 0)
                data.push(`${nguoiGiaValue} người già`);

            if (data.length === 0) {
                displaySelect.innerHTML = "Chưa được chọn";
            } else {
                displaySelect.innerHTML = data.toString();
            }
        };
        displaySelectValue();
        $(document).on("click", function (e) {
            if (
                $(e.target).closest(".options-select").length === 0 &&
                $(e.target).closest(".booking__train-infor").length === 0
            ) {
                $(".options-select").removeClass("active");
            }
        });
    },
};

/* ============================= 17 showMoreDetailYatch  ============================= */
const showMoreDetailYatch = {
    init() {
        this.showMoreDetailYatch(
            ".box-tiket .box-list",
            ".box-tiket .box-tiket__btn",
            ".list__item"
        );
        this.showMoreText(
            ".item__paragraph",
            ".detail-ship__box-item .item__show-more-p"
        );
    },
    changeIcon(item) {
        $(item).toggleClass("active");
        if ($(item).hasClass("active")) {
            $(item).html('<i class="fas fa-angle-up mr-2"></i> Thu gọn ');
        } else {
            $(item).html(
                '<i class="fas fa-angle-down mr-2"></i> Xem chi tiết '
            );
        }
    },
    showMoreDetailYatch(gList, gBtn, gItems) {
        let list = $(gList);
        let btn = $(gBtn);
        list.each(function (idx, lst) {
            let items = $(lst).find(gItems);
            items.each(function (i, item) {
                if (i >= 4) {
                    $(btn).removeClass("d-none");
                    $(item).addClass("d-none");
                }
            });
        });
        if (btn) {
            let arrIdx = [];
            btn.click(function (e) {
                e.preventDefault();
                showMoreDetailYatch.changeIcon(this);
                let tmp = $(this).parent();
                tmp.find(".detail-ship__box-serDetail").toggleClass(
                    "show-more"
                );
                let items = tmp.find(gItems);
                items.each(function (i, item) {
                    if (i >= 4) {
                        $(item).toggleClass("d-none");
                    }
                });
            });
        }
    },
    showMoreText(item, btn) {
        $(btn).click(function (e) {
            e.preventDefault();
            let txt = $(this).parent().find(item);
            if ($(btn).hasClass("item__show-more-p")) {
                $(this).toggleClass("show");
            }
            txt.toggleClass("show-more");

            showMoreDetailYatch.changeIcon(this);
        });
    },
};

const toastMessage = {
    firstName: [
        "Nguyễn",
        "Mạc",
        "Trần",
        "Hồ",
        "Lý",
        "Phan",
        "Lê",
        "Bùi",
        "Đặng",
        "Phạm",
        "Trương",
        "Kiểu",
        "Lã",
    ],
    middleName: [
        "Đức",
        "Đinh",
        "Xuân",
        "Thu",
        "Vân",
        "Vĩ",
        "Trung",
        "Phú",
        "Công",
        "Việt",
        "Văn",
        "Nhựt",
        "Thiện",
    ],
    lastName: [
        "Hiếu",
        "Dũng",
        "Hoàng",
        "Như",
        "Yến",
        "Đăng",
        "Vĩnh",
        "Xương",
        "Thành",
        "Tiến",
        "Vinh",
        "Toàn",
        "Thịnh",
    ],
    init() {
        this.toastMessage(true);
    },
    generateIndex() {
        return Math.floor(Math.random() * 12);
    },
    generateName() {
        return `${this.firstName[this.generateIndex()]} ${
            this.middleName[this.generateIndex()]
        } ${this.lastName[this.generateIndex()]} `;
    },
    generatePhone() {
        return `09${Math.floor(Math.random() * 4000)}xxxx`;
    },
    toastMessage(isOn) {
        if (isOn) {
            setInterval(() => {
                $(".toast-body__title").text(
                    this.generateName() + this.generatePhone()
                );
                $(".toast").toast("show");
            }, 10000);
        }
    },
};

const comment = {
    validateForm() {
        Validator({
            form: ".comment-box__form",
            errorMsg: ".form-msg",
            rules: [
                Validator.isRequired(
                    "#name",
                    "Hãy nhập họ tên tối thiểu 6 ký tự"
                ),
                Validator.isEmail("#email"),
                Validator.isRequired("#phone", "Hãy nhập trường số điện thoại"),
                Validator.isPhoneNumber(
                    "#phone",
                    "Trường này phải là số điện thoại"
                ),
            ],
        });
    },
    init() {
        this.comment();
        this.validateForm();
    },
    handleResetStars(stars, isMobile) {
        Array.from(stars).forEach((star, index) => {
            const img = star.querySelector("img");
            if (isMobile) {
                if (index === 0) {
                    img.src = "./assets/images/image-update/mb-large.png";
                } else {
                    img.src = "./assets/images/image-update/mb-large-blur.png";
                }
            } else {
                if (index === 0) {
                    img.src = "./assets/images/image-update/large-active.png";
                } else {
                    img.src = "./assets/images/image-update/large.png";
                }
            }
        });
    },
    handleInputStar(input, value) {
        input.value = value;
    },
    pickActiveStars(nth, stars, isMobile) {
        for (let i = 0; i <= nth; ++i) {
            const a = Array.from(stars)[i];
            const img = a.querySelector("img");
            if (isMobile) {
                img.src = "./assets/images/image-update/mb-large.png";
            } else {
                img.src = "./assets/images/image-update/large-active.png";
            }
        }
        const input = document.querySelector('input[name="rate-stars"]');
        this.handleInputStar(input, nth + 1);
    },
    handleRateStar(isMobile) {
        const _this = this;
        const listStars = document.querySelectorAll(
            ".comment-box__rate-stars a"
        );
        Array.from(listStars).forEach((star, index) => {
            star.addEventListener("click", (e) => {
                e.preventDefault();
                _this.handleResetStars(listStars, isMobile);
                _this.pickActiveStars(index, listStars, isMobile);
            });
        });
    },
    handleValueInput(input, result) {
        result[input.name] = input.value;
        if (input.name === "rate-stars") {
            const commentList = document.querySelector(".comment-list");
            const isMobile = commentList.classList.contains(
                "comment-list-mobile"
            );
            this.handleResetStars(
                document.querySelectorAll(".comment-box__rate-stars a"),
                isMobile
            );
            input.value = 1;
        } else {
            input.value = "";
        }
    },
    handleStarSubmit(numStar, isMobile) {
        const result = [];
        let addStar = true;
        for (let i = 0; i < 5; ++i) {
            if (addStar) {
                for (let j = 0; j < numStar; ++j) {
                    if (isMobile) {
                        result.push(
                            '<img src="./assets/images/image-update/mb-small.png" alt="">'
                        );
                    } else {
                        result.push(
                            '<img src="./assets/images/image-update/small-active.png" alt="">'
                        );
                    }
                    ++i;
                }
                addStar = false;
            }
            if (i < 5) {
                if (isMobile) {
                    result.push(
                        '<img src="./assets/images/image-update/small.png" alt="">'
                    );
                } else {
                    result.push(
                        '<img src="./assets/images/image-update/small.png" alt="">'
                    );
                }
            }
        }
        return result.join("");
    },
    handleAddNewComment(objComment) {
        const commentList = document.querySelector(".comment-list");
        const isMobile = commentList.classList.contains("comment-list-mobile");
        let newComment;
        if (isMobile) {
            newComment = `
                            <li class="comment-list__item py-4">
                                <h3 class="comment-list__item-name comment-list__item-text mb-0">${
                                    objComment.name
                                }</h3>
                                <div class="d-flex align-items-center">
                                    <p class="comment-list__item-text comment-list__item-date mb-0">Thang 05, 2021</p>
                                    <div class="comment-list__item-rate">${this.handleStarSubmit(
                                        objComment["rate-stars"],
                                        isMobile
                                    )}</div>
                                </div>
                                <p class="comment-list__item-text reduce mb-0">${
                                    objComment.feedback
                                }</p>
                            </li>
            `;
        } else {
            newComment = `
                            <li class="comment-list__item py-4">
                                <h3 class="comment-list__item-name comment-list__item-text mb-0">${
                                    objComment.name
                                }</h3>
                                <div class="comment-list__item-rate mb-2">${this.handleStarSubmit(
                                    objComment["rate-stars"],
                                    isMobile
                                )}</div>
                                <div class="d-flex">
                                    <p class="comment-list__item-text comment-list__item-date mb-0 mr-4">Thang 05, 2021</p>
                                    <p class="comment-list__item-text reduce mb-0">${
                                        objComment.feedback
                                    }</p>
                                </div>
                            </li>
                            `;
        }
        const oldComment = commentList.innerHTML;
        const countItem = document.querySelector(".comment-count h3");
        if (countItem) {
            const itemComments = document.querySelectorAll(
                ".comment-list__item"
            );
            let numComment = itemComments.length + 1;
            countItem.innerHTML = `${numComment} Bình luận `;
        }
        const result = oldComment + newComment;
        commentList.innerHTML = result;
    },
    comment() {
        const commentList = document.querySelector(".comment-list");
        if (commentList) {
            const isMobile = commentList.classList.contains(
                "comment-list-mobile"
            );
            this.handleRateStar(isMobile);
        }
    },
};

const reviewButtonClick = {
    init() {
        this.reviewButtonClick();
    },
    reviewButtonClick() {
        const btn = document.querySelector(".btn.btn-review");
        const textArea = document.querySelector('[name="feedback"]');

        if (btn && textArea) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const divPos = document
                    .querySelector(".comment")
                    .getBoundingClientRect().top;
                const curPos = window.scrollY;

                document.documentElement.scrollTop = divPos + curPos - 20;
                textArea.focus();
            });
        }
    },
};

function Validator(options) {
    const formElement = document.querySelector(options.form);
    const selectorRules = {};

    const validate = (inputElement, rule) => {
        let isUnValid;
        const msgElement = inputElement.parentElement.querySelector(
            options.errorMsg
        );

        for (let i = 0; i < selectorRules[rule.selector].length; ++i) {
            isUnValid = selectorRules[rule.selector][i](inputElement.value);
            if (isUnValid) break;
        }

        if (isUnValid) {
            msgElement.innerHTML = isUnValid;
            inputElement.classList.add("active");
        }
        return !!isUnValid;
    };
    if (formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault();
            let isFormValid = true;
            let isValid;

            options.rules.forEach((rule) => {
                const inputElement = formElement.querySelector(rule.selector);
                isValid = validate(inputElement, rule);
                if (isValid) isFormValid = false;
            });

            if (isFormValid) {
                const result = {};
                const inputs = formElement.querySelectorAll("[name]");

                inputs.forEach((input) => {
                    comment.handleValueInput(input, result);
                });
                comment.handleAddNewComment(result);
            }

            // do something here : callAPI ...
        };
        options.rules.forEach((rule) => {
            if (selectorRules[rule.selector]) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            const inputElement = formElement.querySelector(rule.selector);
            const msgElement =
                inputElement.parentElement.querySelector(".form-msg");

            if (inputElement) {
                inputElement.onblur = (e) => {
                    validate(inputElement, rule);
                };

                inputElement.oninput = (e) => {
                    if (inputElement.classList.contains("active")) {
                        inputElement.classList.remove("active");
                        msgElement.innerHTML = "";
                    }
                };
            }
        });
    }
}

Validator.isRequired = (selector, msg) => {
    return {
        selector,
        test(value) {
            return value.trim().length >= 6
                ? undefined
                : value.trim().length === 0
                ? "Hãy nhập trường này"
                : msg;
        },
    };
};

Validator.isEmail = (selector) => {
    return {
        selector,
        test(value) {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value.trim()).toLowerCase())
                ? undefined
                : "Trường này phải là email";
        },
    };
};

Validator.isConfirmed = (selector, param) => {
    return {
        selector,
        test(value) {
            const passwordElement = document.querySelector(param);
            return passwordElement.value === value
                ? undefined
                : "Mật khẩu nhập lại không chính xác";
        },
    };
};

Validator.isPhoneNumber = (selector) => {
    return {
        selector,
        test(value) {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            return phoneno.test(String(value.trim()).toLowerCase())
                ? undefined
                : "Trường này số điện thoại";
        },
    };
};

const setMinDate = {
    init() {
        this.setMinDate();
    },
    setMinDate() {
        const fromInput = document.querySelector("#calendar-ja-from");
        if (fromInput) {
            fromInput.onchange = (e) => {
                const fromInputValue = e.target.value;
                const toInputValue =
                    document.querySelector("#calendar-ja-to").value;
                const dateToInput = new Date(toInputValue);
                const dateFromInput = new Date(fromInputValue);

                if (dateFromInput > dateToInput) {
                    flatpickr("#calendar-ja-to", {
                        locale: "vn",
                        minDate: new Date(fromInputValue),
                        dateFormat: "m/d/Y",
                        disableMobile: true,
                        defaultDate: new Date(fromInputValue),
                        altInput: true,
                        altFormat: "d F Y",
                        appendTo: window.document.querySelector(
                            "#flatpickr-custom-2"
                        ),
                    });
                }
            };
        }
    },
};

const videoTauThamVinh = {
    init() {
        this.videoTauThamVinh();
    },
    handleOwlChanged(owl, element, video) {
        owl.on("changed.owl.carousel", () => {
            element.classList.remove("playing");
            owl.trigger("play.owl.autoplay", [1000]);

            const index = video.src.search("autoplay=1");
            if (index !== -1) {
                video.src = video.src.slice(0, index - 1);
            }
        });
    },
    handlePlayVideo(owl, element, video) {
        const index = video.src.search("autoplay=1");

        owl.trigger("stop.owl.autoplay");
        element.classList.add("playing");

        if (index === -1) {
            video.src += "?autoplay=1";
        }
    },
    videoTauThamVinh() {
        const btns = document.querySelectorAll(".icon__wrap");
        const owl = $(".box-discover-section__right.owl-carousel");
        const _this = this;

        if (btns) {
            btns.forEach((btn) => {
                btn.addEventListener("click", function () {
                    const element =
                        this.parentElement.parentElement.querySelector(
                            ".video__wrap"
                        );
                    const video = element.querySelector("iframe");

                    _this.handleOwlChanged(owl, element, video);
                    _this.handlePlayVideo(owl, element, video);
                });
            });
        }
    },
};
