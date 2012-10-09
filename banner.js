/* 
	JQuery Banner Slider Plugin 1.0
	Hosted from github.com/raphaelivan
	
	Copyright (c) 2012 Raphael Ivan
	Released under Mit Lincense
*/
"use strict"
;(function($){
	$.fn.banner = function(options){
		var images = []
		, currentImage = 0
		, self      = $(this)
		, config     = { 
			effect: 'fade'
		 	, sleep: 2000
			, effectTime: 2000
			, width: '400px'
			, height: '200px'
		}
		
		$.extend(config, options);
				
		var incrementCurrentImage = function(){
			if (images.length <= currentImage + 1) {
				currentImage = 0;
			} else {
				currentImage++;
			}
			
			return currentImage;
		}
	 	var slide = function(){
			var effectTime, effect;

			/*
				Hide the current image before to show the next
			*/
			images[currentImage].hide();
	
			/*
				Increment Current Image
			*/
			incrementCurrentImage();			
			
			effectTime = config.effectTime;
			effect     = config.effect;	
							
			/*
				Apply effect
				Effects: slide, fade and none
			*/
			switch(effect){
				case 'slide':
					return images[currentImage].slideDown(effectTime);
				case 'none':
					return images[currentImage].show();
				default:
					return images[currentImage].fadeIn(effectTime);
			}									
		};

		setInterval( function(){ 
			slide()
			}
		  , config.sleep
		);
		
		self.each(function(index,image){			
			images.push( 
					$(image).css({
						'display': 'none'
						, 'width': config.width
						, 'height': config.height
				})
			);
		});
		
		/*
		 	Show the first image so that banner function is called.
		*/	
		if (images.length > 0) {
			images[0].show();
		}
	};
})(jQuery);