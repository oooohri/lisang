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

document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach((radio) => {
        radio.addEventListener("change", function () {
            // 모든 label에서 check 제거
            document.querySelectorAll("label").forEach((label) => {
                label.classList.remove("check");
            });

            // 선택된 radio의 label에 check 추가
            this.parentElement.classList.add("check");
        });
    });
});
