(function($){
	$.fn.mask = function(pattern)
	{
		if( pattern && pattern.length > 0 && $(this).val().length > 0 )
		{
			var out = $(this).val().match(/[a-zA-Z0-9]/g);
			var patt = pattern.split('');			
			var marker = 0;
			$.each(
				pattern.match(/[^#]/g),
				function(index, value)
				{				
					for(i=marker; i<patt.length; i++)
					{					
						if( value == patt[i] )
						{					
							out.splice(i, 0, value);
							marker = i + 1;					
							break;
						}
					}					
				}
			);
			$(this).val(out.join(''));
		}
	}	
})(jQuery);
