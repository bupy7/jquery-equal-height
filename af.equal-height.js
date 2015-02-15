/** 
 * Equal Height Children plugin
 *
 * https://github.com/bupy7/jquery-equal-height
 * version 1.0
 */


(function($) {
    
    $.fn.makeChildrenEqualHeight = function() {
        
        var makeEqualHeight = function(element) {
            
            var $within     = $(element),
                selector    = $within.attr('data-equal-height'),
                $children   = $(selector, $within),
                tallest     = 0;
            
            $children.each(function() {
                var $this = $(this);
                
                $this.css('height', ''); 
                var h = $this.outerHeight();
                if (h > tallest) {
                    tallest = h;
                }
            });
            
            $children.each(function() {
                $(this).css('height', tallest + 'px'); 
            });
            
        };
        
        return this.each(function() {
            makeEqualHeight(this);
        });
        
    };
	
    $.fn.makeChildrenDisequalHeight = function() {
        
        var makeDisequalHeight = function(element) {
            
            var $within     = $(element),
            selector        = $within.attr('data-equal-height'),
            $children       = $(selector, $within);
            $children.each(function() {
                $(this).css('height', '');
            });
            
        };
        return this.each( function () {
        	makeDisequalHeight(this);
        });
        
    };
    
})(jQuery);
