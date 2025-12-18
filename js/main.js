$(".banner_txt_1").fadeIn(5000)
$(".banner_txt_2").fadeOut(2000)



const notice_list = new Swiper(".notice_list", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
    },
})

$(".notice_tab>div").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
})

$(".notice_tab>div").click(function () {
    $(this).find(".notice_txt>ul").addClass("txt_active").siblings().removeClass("txt_active")
})


const media_list = new Swiper(".media_list", {
    breakpoints: {
        1600: { slidesPerView: 2, }
    },

    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    speed: 500,


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

const guide_list = new Swiper(".guide_list", {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        1200: { spaceBetween: 50, slidesPerView: 3 },
        1400: { spaceBetween: 100, slidesPerView: 4 },
    },
})

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".content ul li");

    function checkScroll() {
        if (window.innerWidth <= 1100) {
            // 화면 작으면 모든 요소 활성화
            items.forEach(item => item.classList.add("scrolled"));
            return;
        }

        const triggerBottom = window.innerHeight * 0.8;
        items.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                item.classList.add("scrolled");
            } else {
                item.classList.remove("scrolled");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll(); // 처음 로드 시 실행
});
