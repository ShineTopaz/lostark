$(".menu_list>li>p").click(function () {
    $(this).next(".menu_depth2").stop().slideToggle();
    $(".menu_list > li > p").not(this).next(".menu_depth2").stop().slideUp();
});

$(document).ready(function () {
    // 상품 클릭 시
    $(".prd").click(function () {
        let lowest = $(this).find(".lowest").text();
        $(".buy-float").data("price", lowest);

        // 위치 계산 (해당 행의 오른쪽 아래쪽)
        let offset = $(this).offset();
        let height = $(this).outerHeight();

        $(".buy-float").css({
            top: offset.top + height,
            left: offset.left + $(this).width() - $(".buy-float").outerWidth() - 20
        }).fadeIn();

        // 기본값 표시
        $("#qty").val(1);
        $(".buy-float .cost").text("총액: " + lowest);
    });

    // 수량 입력 시 총액 갱신
    $("#qty").on("input", function () {
        let qty = $(this).val();
        let price = $(".buy-float").data("price");
        $(".buy-float .cost").text("총액: " + (price * qty));
    });

    // 바깥 클릭하면 닫기
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".prd, .buy-float").length) {
            $(".buy-float").fadeOut();
        }
    });
});


