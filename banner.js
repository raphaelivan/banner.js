/* 
	JQuery Banner Slider Plugin 1.0
	Hosted from github.com/raphaelivan
	
	Copyright (c) 2012 Raphael Ivan
	Released under Mit Lincense
*/
(function($){
	$.fn.banner = function( options ){
		var images = [],
		current = 0,
		config  = { 
			effect: 'fade', sleep: 2000
		};
		
		$.extend( config, options );

	 	move = function(){
			$(images).hide();
			
			var sleep = config.sleep;
			
			if( images.length <= current + 1 ){
				current = 0;
			}else{
				current++;
			}	

			switch( config.effect ){
				case 'slide':
					$(images[current]).slideDown( sleep );
					break;
				case 'none':
					$(images[current]).hide();
					break;
				default:
					$(images[current]).fadeIn( sleep );
					break;
			}									
		};

		setInterval(function(){ move() }, 3000);
	 	return $( this ).each( function(index,image){			
			images.push( image );
			$( this ).css( {'display': 'none'} );
		});
	};
})( jQuery );