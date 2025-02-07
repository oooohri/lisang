function isMobile(){
	return  $(window).width() < 992 ;
}  
$(window).on('load', function(){
	$('.gnb-toggle').on('click', function(){
		$('body').toggleClass('gnb-open');
        
        // 접근성 향상을 위함
        let isExpanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded',!isExpanded);
	});
});

// all - show more 버튼 (더보기)
$(document).ready(function() {
    let clickCount = 0;

    // 'Show More' 버튼 클릭 시
    $('.btn-wrp .btn').on('click', function() {
        // 'Close' 상태일 때는 기존 섹션을 삭제 후 새 섹션을 추가
        if ($(this).text() === 'Close') {
            // 모든 추가된 section 제거
            $('.container .sect-wrp .add').remove();
            $(this).text('Show More'); // 버튼 텍스트 초기화
            clickCount = 0; // 클릭 횟수 초기화
            return; // 'Close' 상태에서는 새 섹션 추가를 중지
        }

        // 'Show More' 상태에서 섹션 추가
        clickCount++;

        let newProducts = [
            {
                img: './img/shop/w-4.webp',
                title: 'GOLD BRACELET',
                price: '$30',
                link: './shop-03여성-상품상세.html'
            },
            {
                img: './img/shop/w-5.jpg',
                title: 'SILVER BRACELET',
                price: '$27',
                link: './shop-03여성-상품상세.html'
            },
            {
                img: './img/shop/w-6.jpg',
                title: 'LEATHER BRACELET',
                price: '$19',
                link: './shop-03여성-상품상세.html'
            }
        ];

        let sectionHTML = '<section class="row add"></section>';
        $('.container .sect-wrp').append(sectionHTML);

        // 최근에 추가된 section 선택
        let section = $('.container').find('section').last();

        // 각 제품마다 article 추가
        newProducts.forEach(function(product) {
            let articleHTML = `
                <article class="col-lg">
                    <img src="${product.img}" class="w-100" height="280" alt="카테고리 선택 이미지">
                    <div class="bx border-gray">
                        <h2 class="ls-2 text-xs font-weight-normal" tabindex="0">${product.title}</h2>
                        <p class="text-light-purple text-sm" tabindex="0">${product.price}</p>
                        <a href="${product.link}" class="btn border-gray font-weight-semibold" role="button" aria-label="상세보기 버튼">See More</a>
                    </div>
                </article>
            `;
            section.append(articleHTML); // 섹션에 article 추가
        });

        // 클릭 횟수가 3 이상일 경우 버튼 텍스트 변경
        if (clickCount >= 3) {
            $(this).text('Close'); // 버튼 텍스트를 'Close'로 변경
        }
        else if (clickCount < 3) {
            $(this).text('Show More'); // 버튼 텍스트를 'Show More'로 유지
        }
    });
});




// detail - 상품이미지 클릭 시 상세이미지 나타남
$(document).ready(function () {
    $(".additional-img img").on("click", function () {
        let imgSrc = $(this).attr("src"); // 클릭한 이미지의 src 가져오기
        console.log("Clicked image src: " + imgSrc); // 디버깅: 클릭한 이미지의 src 출력
        let mainImage = $(".main-img img");
        let mainImageLink = $(".main-img a"); // 확대이미지

        // w-detail2.jpg와 w-detail3.jpg는 w-detail1.jpg로 변경
        if (imgSrc.indexOf("w-detail2.jpg") !== -1 || imgSrc.indexOf("w-detail3.jpg") !== -1) {
            mainImage.attr("src", "./img/shop/w-detail1.jpg");
            mainImageLink.attr("href", "./img/shop/w-detail1-lg.jpg"); // 확대 이미지 링크도 w-detail1-lg.jpg로 설정
        } else {
            // 나머지 이미지는 -1 (5-1,6-1...) 버전으로 변경
            let newSrc = imgSrc.replace(".jpg", "-1.jpg");
            let newLargeSrc = newSrc.replace(/(w-detail\d+-1)/, "$1-lg");

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

        // 접근성 향상을 위함
        $(this).siblings().attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');
    });
});

// detail - color 선택
$(document).ready(function () {
    $('input[type="radio"]').on('change', function () {

        $('input[type="radio"]').attr('aria-checked', 'false');
        $(this).attr('aria-checked', 'true');
        
        $("label").removeClass("check");
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