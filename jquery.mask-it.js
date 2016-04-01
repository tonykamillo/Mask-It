(function($){
    $.fn.mask = function(pattern)
    {
        if( pattern && pattern.length > 0 && $(this).val().length > 0 )
        {
            var patternPieces = pattern.split(''),
                valuePieces = $(this).val().match(/[a-zA-Z0-9]/g);

            valuePieces.forEach(function(item) {
                var i = patternPieces.indexOf('#');
                patternPieces[i] = item;
            });

            $(this).val(patternPieces.join(''));
        }
    }
})(jQuery);
