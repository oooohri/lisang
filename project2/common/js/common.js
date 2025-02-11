$(document).ready(function () {
    $(".btn-start").on("click", function () {
        $("#wrap").removeClass("ready").addClass("start");
        $("#intro").hide();
        $("#content").show();
        
        $(".pop2").hide();
        setTimeout(function() {
            $(".pop1").fadeIn();
        },3000);
        
});

    // 시작하기 버튼 클릭 시 팝업 숨기고 문 열기
    $(".content-popup button").on("click", function () {
        $(".pop1").fadeOut(); 

        // 0.5초 뒤에 문을 여는 동작 실행
        setTimeout(function () {
            $(".door-container").addClass("open");
            setTimeout(function () {
                $(".pop2").fadeIn();
            }, 800);
        }, 500);
    });
    
});
