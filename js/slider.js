jQuery(document).ready(function() {
    var lis = $('.project-wrp').children('ul').find('li'),
        liLen = lis.length,
        current = 0,
        prev = -1,
        i, arr = [],
        direction ="";

    for(i = 0; i < liLen; i++){
		arr[i] = $('#'+i);
 	}

 	$(lis).first().addClass('r-in');
 	$('.dir-wrp .prev').css('pointer-events', 'none');
 	$('.dir-wrp > div').on('click', function(){
 		$('.dir-wrp .prev').css({'pointer-events': 'all', 'opacity': '1'});
 		$('.dir-wrp .next').css({'pointer-events': 'all', 'opacity': '1'});
 		direction = $(this).data('dir');
 		prev = current;
 		(direction === 'next') ? current++ : current--;
			autoplay();
		});

		// $(bullet).click(function() {
		// 	prev = current;
		// 	current = $(this).index();
		// 	autoplay();
		// });

		// $(window).keydown(function(e) {
		// 	if(e.keyCode == 37 ){
		// 		$('.dir-wrp .prev').trigger('click');
		// 		//current--;
		// 		//autoplay();
		// 	}if(e.keyCode == 39 ){
		// 		//current++;
		// 		//autoplay();
		// 		$('.dir-wrp .next').trigger('click');
		// 	}
		// });

		function autoplay(){
			if( current < 1 ){
				current = 0;
				$('.dir-wrp .prev').css({'pointer-events': 'none', 'opacity': '0.5'});
			}else if(current == liLen -1 ){
				current = liLen - 1;
				$('.dir-wrp .next').css({'pointer-events': 'none', 'opacity': '0.5'});
			}else if(direction === 'next'){
				// arr[current -1].removeClass('active');
				// arr[current].addClass('active');
			}else{
				// arr[current +1].removeClass('active');
				// arr[current].addClass('active');
			}

			// if( current < 0 ){
				// 	current = liLen - 1;
				// 	setTimeout(function(){
				// 		arr[0].removeClass('active');
				// 	}, 1000)
				// 	$(current).addClass('active');
			// }else if(current >= liLen ){
				// 	current = 0;
				// 	setTimeout(function(){
				// 		arr[liLen -1].removeClass('active');
				// 	}, 1000)
			// }else if(direction === 'next'){
				// 	setTimeout(function(){
				// 		arr[current -1].removeClass('active');
				// 	}, 1000);
				// 	arr[current].addClass('active');
			// }else{
				// 	setTimeout(function(){
				// 		arr[current +1].removeClass('active');
				// 	}, 1000);
				// 	arr[current].addClass('active');
			// };

		if(prev < current){
			// console.log('+');
			arr[prev].attr('class', 'item l-out');
			arr[current].attr('class', 'item r-in');
		}else if(prev > current){
			// console.log('-');
			arr[prev].attr('class', 'item r-out');
			arr[current].attr('class', 'item l-in');
		}

		$('.counter-wrp .counter').text(current + 1);

		// arr[prev].attr('class', 'slider-item');
		// arr[current].attr('class', 'slider-item right-to-left');
		// console.log("prev", prev);
		// console.log("current ",current);
	}

	$('.counter-wrp .total-project').text(liLen);


	//Keyboard arrow controller
	$(document).keydown(function(e) {
		switch(e.which) {
			case 37: // left
			$('.prev').trigger('click');
			break;
	
			case 38: // up
			break;
	
			case 39: // right
			$('.next').trigger('click');
			break;
	
			case 40: // down
			break;
	
			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});


	//Mobile swipe controller
	if ($(window).width() < 949) {
		var ts;
		$(document).bind('touchstart', function (e){
			ts = e.originalEvent.touches[0].clientY;
		});

		$(document).bind('touchend', function (e){
			var te = e.originalEvent.changedTouches[0].clientY;
			if(ts > te+5 && current < liLen - 1){
				$('.next').trigger('click');
			}else if(ts < te-5 && current > 0){
				$('.prev').trigger('click');
			}
		});
	}
	
	// var supportTouch = $.support.touch,
    //         scrollEvent = "touchmove scroll",
    //         touchStartEvent = supportTouch ? "touchstart" : "mousedown",
    //         touchStopEvent = supportTouch ? "touchend" : "mouseup",
    //         touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    // $.event.special.swipeupdown = {
    //     setup: function() {
    //         var thisObject = this;
    //         var $this = $(thisObject);
    //         $this.bind(touchStartEvent, function(event) {
    //             var data = event.originalEvent.touches ?
    //                     event.originalEvent.touches[ 0 ] :
    //                     event,
    //                     start = {
    //                         time: (new Date).getTime(),
    //                         coords: [ data.pageX, data.pageY ],
    //                         origin: $(event.target)
    //                     },
    //                     stop;

    //             function moveHandler(event) {
    //                 if (!start) {
    //                     return;
    //                 }
    //                 var data = event.originalEvent.touches ?
    //                         event.originalEvent.touches[ 0 ] :
    //                         event;
    //                 stop = {
    //                     time: (new Date).getTime(),
    //                     coords: [ data.pageX, data.pageY ]
    //                 };

    //                 // prevent scrolling
    //                 if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
    //                     event.preventDefault();
    //                 }
    //             }
    //             $this
    //                     .bind(touchMoveEvent, moveHandler)
    //                     .one(touchStopEvent, function(event) {
    //                 $this.unbind(touchMoveEvent, moveHandler);
    //                 if (start && stop) {
    //                     if (stop.time - start.time < 1000 &&
    //                             Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
    //                             Math.abs(start.coords[0] - stop.coords[0]) < 75) {
    //                         start.origin
    //                                 .trigger("swipeupdown")
    //                                 .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
    //                     }
    //                 }
    //                 start = stop = undefined;
    //             });
    //         });
    //     }
    // };
    // $.each({
    //     swipedown: "swipeupdown",
    //     swipeup: "swipeupdown"
    // }, function(event, sourceEvent){
    //     $.event.special[event] = {
    //         setup: function(){
    //             $(this).bind(sourceEvent, $.noop);
    //         }
    //     };
    // });

	// $('body').on('swipedown',function(){
	// 	$('.prev').trigger('click');
	// });
	// $('body').on('swipeup',function(){
	// 	$('.next').trigger('click');
	// });
});