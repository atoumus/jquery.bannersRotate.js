(function($){
    jQuery.fn.bannersRotate = function() {
        var banners;
        var timer = null;
        var currentBannerId = 0;
        var previousBannerId = null;
        
        var make = function() {
            banners = $(this).children();
            if(banners.length > 0) {
                rotate();
            }
        };
        
        var rotate = function() {
            if(timer != null) {
                clearTimeout(timer);
            }
            
            if(previousBannerId != null) {
                $(banners[previousBannerId]).hide();
            }
            
            var currentBanner = $(banners[currentBannerId]);
            
            currentBanner.show();
            
            timer = setTimeout(function() { rotate() }, parseInt(currentBanner.data("duration")) * 1000);

            previousBannerId = currentBannerId;
            currentBannerId = banners.length - 1 == currentBannerId ? 0 : currentBannerId + 1;
        };
 
        return this.each(make);
    };
})(jQuery);
