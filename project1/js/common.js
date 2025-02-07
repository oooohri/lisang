function isMobile(){
	return  $(window).width() < 992 ;
}  
$(window).on('load', function(){
	$('.gnb-toggle').on('click', function(){
		$('body').toggleClass('gnb-open');
        
        let isExpanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded',!isExpanded);
	});
});

// detail - 상품이미지 클릭 시 상세이미지 나타남
$(document).ready(function () {
    $(".additional-img img").on("click", function () {
        var imgSrc = $(this).attr("src"); // 클릭한 이미지의 src 가져오기
        console.log("Clicked image src: " + imgSrc); // 디버깅: 클릭한 이미지의 src 출력
        var mainImage = $(".main-img img");
        var mainImageLink = $(".main-img a"); // 확대이미지

        // w-detail2.jpg와 w-detail3.jpg는 w-detail1.jpg로 변경
        if (imgSrc.indexOf("w-detail2.jpg") !== -1 || imgSrc.indexOf("w-detail3.jpg") !== -1) {
            mainImage.attr("src", "./img/shop/w-detail1.jpg");
            mainImageLink.attr("href", "./img/shop/w-detail1-lg.jpg"); // 확대 이미지 링크도 w-detail1-lg.jpg로 설정
        } else {
            // 나머지 이미지는 -1 (5-1,6-1...) 버전으로 변경
            var newSrc = imgSrc.replace(".jpg", "-1.jpg");
            var newLargeSrc = newSrc.replace(/(w-detail\d+-1)/, "$1-lg");

            mainImage.attr("src", newSrc); // 메인 이미지로 설정
            mainImageLink.attr("href", newLargeSrc); // 확대 이미지 링크 설정
        }

        mainImage.css("width", "470px");
    });
});


// detail - dropdown 동작
$(document).ready(function () {
    $(".dropdown-item").click(function (e) {
        e.preventDefault(); 
        let selectedValue = $(this).text(); 
        $(this).closest(".dropdown").find("button").html(selectedValue + ' <i class="icon-dropdown"></i>'); // 버튼 내용 변경
    });
});

// detail - color 선택
$(document).ready(function () {
    $('input[type="radio"]').on('change', function () {
        // 모든 label에서 check 제거
        $("label").removeClass("check");

        // 선택된 radio의 label에 check 추가
        $(this).parent('label').addClass("check");
    });
});

// detail -  +,- 버튼
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