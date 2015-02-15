/** 
 * Artfinder Equal Height Children plugin
 *
 * https://github.com/bupy7/jquery-equal-height
 * version 1.0
 */


(function($) {
    
    $.fn.make_children_equal_height = function () {
        var make_equal_height = function (element) {
            var $within     = $(element),
                selector    = $within.attr('data-equal-height'),
                $children   = $(selector, $within),
                tallest     = 0;
            
            $children.each( function() {
                var $this = $(this);
                
                $this.css('height', ''); 
                var h = $this.outerHeight();
                if ( h > tallest ) {
                    tallest = h;
                }
            });
            
            $children.each( function() {
                $(this).css('height', tallest + 'px'); 
            });
        };
        
        return this.each( function () {
            make_equal_height(this);
        });
    };
	
    $.fn.make_children_disequal_height = function () {
        var make_disequal_height = function (element) {
            var $within     = $(element),
            selector    = $within.attr('data-equal-height'),
            $children   = $(selector, $within);
            $children.each(function() {
                $(this).css('height', '');
            });
        };
        return this.each( function () {
                make_disequal_height(this);
        });
    };
    
})( jQuery );
