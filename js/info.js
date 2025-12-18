/* if ($(window).width() >= 1500) {
    $(".story_txt>li").hover(function () {
        let num = $(this).index()
        $(".story_img>li").eq(num).stop().addClass("active").siblings().removeClass("active")
    })

} else {
    $(".story_txt>li").click(function () {
        let num = $(this).index()
        $(".story_img>li").eq(num).stop().addClass("active").siblings().removeClass("active")
    })
}; */

function bindEvents() {
    // 기존 이벤트 제거
    $(".story_txt>li").off("mouseenter mouseleave click");

    if (window.matchMedia("(min-width: 1500px)").matches) {
        // 1500px 이상 → hover
        $(".story_txt>li").hover(function () {
            let num = $(this).index();
            $(".story_img>li").eq(num).stop().addClass("active").siblings().removeClass("active");
        });
    } else {
        // 1500px 미만 → click
        $(".story_txt>li").on("click", function () {
            let num = $(this).index();
            $(".story_img>li").eq(num).stop().addClass("active").siblings().removeClass("active");
        });
    }
}

// 처음 실행
bindEvents();

// 화면 크기 바뀔 때 다시 체크
$(window).on("resize", function () {
    bindEvents();
});


const class_list = new Swiper(".class_list", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        800: { spaceBetween: 50, slidesPerView: 3, loop: true, },
        1200: { spaceBetween: 50, slidesPerView: 4, loop: true, },
        1400: { spaceBetween: 30, slidesPerView: 5, loop: true, },
        1600: { spaceBetween: 50, slidesPerView: 6 },
    },
})

const contents_list = new Swiper(".contents_list", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        900: { spaceBetween: 50, slidesPerView: 3, loop: true, },
        1200: { spaceBetween: 50, slidesPerView: 4, loop: true, },
        1400: { spaceBetween: 30, slidesPerView: 4, loop: true, },
        1600: { spaceBetween: 50, slidesPerView: 5 },
    },
})