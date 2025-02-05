function isMobile(){
	return  $(window).width() < 992 ;
}  

$(window).on('load', function(){
	$('.gnb-toggle').on('click', function(){
		$('body').toggleClass('gnb-open');
	});
	// 사진 zoom 기능
	$(document).ready(function() {
		var easyzoom = $('.easyzoom').easyZoom(); 
	});
});

// dropdown 동작
$(document).ready(function () {
    $(".dropdown-item").click(function (e) {
        e.preventDefault(); 
        let selectedValue = $(this).text(); 
        $(this).closest(".dropdown").find("button").html(selectedValue + ' <i class="icon-dropdown"></i>'); // 버튼 내용 변경
    });
});

$(document).ready(function () {
    $('input[type="radio"]').on('change', function () {
        // 모든 label에서 check 제거
        $("label").removeClass("check");

        // 선택된 radio의 label에 check 추가
        $(this).parent('label').addClass("check");
    });
});

// +,- 버튼
$(document).ready(function () {
    const minQuantity = 1;
    const maxQuantity = 100;

    $(".quantity-btn-wrp .minus").click(function () {
        let input = $(this).siblings("input");
        let value = parseInt(input.val(), 10);
        if (value > minQuantity) {
            input.val(value - 1);
        }
    });

    $(".quantity-btn-wrp .plus").click(function () {
        let input = $(this).siblings("input");
        let value = parseInt(input.val(), 10); // input을 10진수로 변환하고 문자열->숫자
        if (value < maxQuantity) {
            input.val(value + 1);
        }
    });

    $(".quantity-btn-wrp input").on("input", function () {
        let value = parseInt($(this).val(), 10);
		// 숫자가 아닌 값을 입력할 때 / 최소값 최대값 처리
        if (isNaN(value)) {
			alert("숫자만 입력 가능합니다.");
            $(this).val(minQuantity); // alert창 이후 최소값 유지하기위함
        } else if (value < minQuantity) {
			$(this).val(minQuantity);
		} else if (value > maxQuantity) {
            $(this).val(maxQuantity);
        } 
    });
	$(".quantity-btn").on("click", function (event) {
        event.preventDefault(); // 기본 제출 방지
    });
	$("#addToCart").on("click", function() {
		alert("장바구니에 담겼습니다!")
	})
});