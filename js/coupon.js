$(".coupon_list_tab p").click(function () {
    let idx = $(this).index(); // 클릭한 p의 순서 (0: 사용가능, 1: 사용완료)

    $(this).addClass("active").siblings().removeClass("active");

    // 테이블 제어
    if (idx === 0) {
        $(".coupon_list").not(".used").show(); // 사용가능
        $(".coupon_list.used").hide();
    } else {
        $(".coupon_list").not(".used").hide();
        $(".coupon_list.used").show(); // 사용완료
    }
});
