function isMobile(){
	return  $(window).width() < 992 ;
}  

$(window).on('load', function(){
	$('.gnb-toggle').on('click', function(){
		$('body').toggleClass('gnb-open');
	});
	
	$(document).ready(function() {
		var easyzoom = $('.easyzoom').easyZoom(); // easyzoom 클래스를 가진 요소들에 대해 easyZoom 초기화
	});
});
