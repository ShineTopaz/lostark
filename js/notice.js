$(".notice_depth2>p").click(function () {
    $(this).toggleClass("active")
})


$(".notice_tab>li").click(function () {
    let num = $(this).index();
    $(this).addClass("active").siblings(this).removeClass("active");
    $(".notice_ctg>div").eq(num).stop().show();
    $(".notice_ctg>div").eq(num).siblings().stop().hide();
    console.log(num)

})

$(".event_depth2>p>button").click(function () {
    $(this).parents().addClass("active");
    $(this).parents().siblings().removeClass("active");
})





