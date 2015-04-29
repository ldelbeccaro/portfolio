$(document).ready(function() {
	var hgt = $( window ).height();
	var wdh = $( window ).width();
	$('.slideshow').css('height', hgt);
	$('.parallax-bg').css({'background-size': wdh + 1000});
	
	var workwidth = $('.work').width();
	$('.work').height(workwidth*0.65);

	$('.title').css('line-height', workwidth*0.65/32);

	$('nav a').click(function(e) {
		e.preventDefault();
		var link = $(this).attr('href');

		if (link == '#home') {
			$('input:radio')[0].checked = true;
			//$('input:radio:first').attr('checked', true).trigger('click');
		}
		else if (link == '#portfolio') {
			$('input:radio')[1].checked = true;
			//$('input:radio:nth(1)').attr('checked', true).trigger('click');
		}
		else if (link == '#contact') {
			$('input:radio')[2].checked = true;
			//$('input:radio:nth(2)').attr('checked', true).trigger('click');
		}
	});

	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
	        	if ( $('input:radio')[1].checked ) {
	        		$('input:radio')[0].checked = true;
	        	}
	        	else if ( $('input:radio')[2].checked ) {
	        		$('input:radio')[1].checked = true;
	        	}
	        break;

	        case 39: // right
	        	if ( $('input:radio')[0].checked ) {
	        		$('input:radio')[1].checked = true;
	        	}
	        	else if ( $('input:radio')[1].checked ) {
	        		$('input:radio')[2].checked = true;
	        	}
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});

	$('.worklink').click(function(e) {
		e.preventDefault();
		$('input:radio')[1].checked = true;
	})
	$('.contactlink').click(function(e) {
		e.preventDefault();
		$('input:radio')[2].checked = true;
	})

	$('.work').hover(
		function() {
			var index = $(this).index();
			var indexright = index + 3;
			if ( $(this).parent().attr('id') == 'left' ) {
				var ovr = '.overlay:nth(' + index + ')';
			}
			else {
				var ovr = '.overlay:nth(' + indexright + ')';
			}
			if ( $(ovr).find('.language').text() == 'JavaScript' ) {
				$(ovr).find('.language').css('background-color', 'rgba(52,147,224,0.7)')
			}
			else if ( $(ovr).find('.language').text() == 'Python' ) {
				$(ovr).find('.language').css('background-color', 'rgba(52,237,182,0.7)')
			}
			$(ovr).fadeIn();
		},
		function() {
			var index = $(this).index();
			var indexright = index + 3;
			if ( $(this).parent().attr('id') == 'left' ) {
				var ovr = '.overlay:nth(' + index + ')';
			}
			else {
				var ovr = '.overlay:nth(' + indexright + ')';
			}
			$(ovr).fadeOut();			
		}
	)

});

$(window).resize(function() {
	var hgt = $( window ).height();
	var wdh = $( window ).width();
	$('.slideshow').css('height', hgt);
	$('.parallax-bg').css({'background-size': wdh + 1000});

	var workwidth = $('.work').width();
	$('.work').height(workwidth*0.65);

	$('.title').css('line-height', workwidth*0.65/32);

})