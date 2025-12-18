const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // 스크롤이 50px 넘으면
        header.classList.add("scrolled");
    }
    else { header.classList.remove("scrolled"); }
});

$("#header .inner .gnb>li").mouseenter(function () {
    $(".depth2").stop().slideDown(600);
    $(".depth2_bg").stop().slideDown(500);
})
$("#header .inner>ul>li").mouseleave(function () {
    $(".depth2").stop().slideUp(500);
    $(".depth2_bg").stop().slideUp(600);
})

$(".mb_menu").click(function () {
    $(".mb_gnb").fadeIn()
})
$(".mb_menu_close").click(function () {
    $(".mb_gnb").fadeOut()
})