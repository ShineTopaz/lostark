$(".recommend_txt li").click(function () {
    let num = $(this).index()
    $(this).addClass("active").siblings().removeClass("active")
    $(".recommend_img li").eq(num).addClass("active").siblings().removeClass("active")
})

$(".guide_menu > ul > li > p").click(function () {
    // 클릭한 메뉴 서브 열기
    $(this).next(".guide_depth2").stop().slideToggle();

    // 다른 메뉴 서브 닫기
    $(this).parent().siblings().find(".guide_depth2").stop().slideUp();
});

$(".guide_menu_btn").click(function () {
    if ($(".guide_menu").css("right") === "0px") {
        // 이미 열려있으면 닫기
        $(".guide_menu").stop().animate({ "right": "-100%" });
        $(this).removeClass("close")
    } else {
        // 닫혀있으면 열기
        $(".guide_menu").stop().animate({ "right": "0px" });
        $(this).addClass("close");
    }
});