function isMobile(){
	return  $(window).width() < 992 ;
}  

$(window).on('load', function(){
	$('.gnb-toggle').on('click', function(){
		$('body').toggleClass('gnb-open');
	});

});
