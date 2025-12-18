$(document).ready(function () {
    $(".community_depth2 p").click(function () {
        // 탭 활성화 표시
        $(this).addClass("active").siblings().removeClass("active");

        // 선택된 카테고리
        let category = $(this).text();

        // 전체 선택한 경우
        if (category === "전체") {
            $(".community_list li").show();
        } else {
            $(".community_list li").each(function () {
                let itemCategory = $(this).find(".list_left p").text();
                if (itemCategory === category) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
});