jQuery(document).ready(function() {

	$('.contact-btn').click(function(){
		$('body').addClass('body-active');
	});

	$('.contact-wrp .close-btn').click(function(){
		$('body').removeClass('body-active');
	});

	// Project Detail

	// $('.view-detail').click(function(){
	// 	var detail_tab_data = $(this).data('view');
	// 	console.log(detail_tab_data)
	// 	$('.'+detail_tab_data).addClass('active');
	// 	$('.'+detail_tab_data).css('z-index', '999');
	// 	$('.dir-wrp div').css({'pointer-events': 'none'});
	// });

	$('.detail .close-btn').click(function(){
		$(this).parent().parent().removeClass('active');
		var this_parent = $(this).parent().parent();
		setTimeout(function(){
			this_parent.css('z-index', '0');
		}, 800);
		
		$('.dir-wrp div').css({'pointer-events': 'all'});
	});

	// $('.detail').scroll(function(){
	// 	var _scroll = $(this).scroll();

	// 	console.log(_scroll)
	// })

});

$(window).on("load", function() {
  $('.pre-loader').css('display', 'none');
});

// $(document).bind("contextmenu",function(e) {
// 	e.preventDefault();
// });

// document.onkeydown = function(e) {
// 	if(event.keyCode == 123) {
// 	return false;
// 	}
// 	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
// 	return false;
// 	}
// 	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
// 	return false;
// 	}
// 	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
// 	return false;
// 	}
// }








		