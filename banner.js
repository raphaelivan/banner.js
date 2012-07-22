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
			effect: 'fade', sleep: 2000, effectTime: 2000, width: '400px', height: '200px'
		};
		
		$.extend( config, options );
	 	var move = function(){
			$(images).hide();
						
			var effectTime = config.effectTime;

			if( images.length <= current + 1 ){
				current = 0;
			}else{
				current++;
			}	

			switch( config.effect ){
				case 'slide':
					$(images[current]).slideDown( effectTime );
					break;
				case 'none':
					$(images[current]).hide();
					break;
				default:
					$(images[current]).fadeIn( effectTime );
					break;
			}									
		};

		setInterval(function(){ move(); }, config.sleep);

		$(this).css( {'display': 'none', 'width': config.width, 'height': config.height} );	
	 	return $(this).each(function(index,image){			
			images.push( image );
		});
	};
})( jQuery );