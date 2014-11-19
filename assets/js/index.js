
/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        casperFullImg();
        $(window).smartresize(casperFullImg);

        //initialize tooltips
        $('[data-toggle="tooltip"]').tooltip();
    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

/*Infinite scrolling */
(function ($) {
    "use strict";

    $(document).ready(function(){

      var page = 2;
      var url_blog = window.location;
      $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height()  == $(document).height()) {
          if(page <= max_pages){
            $.get((url_blog +'/page/'+page),
              function(content) {
                $('.timeline').append($(content).find(".timeline > li"));
                page = page + 1;
              });
          }
        }
      });

    });

}(jQuery));

/* section scrolling */
(function ($) {
    "use strict";

    $(document).keydown(function (e) {

        if (e.keyCode < 74 || e.keyCode > 75) {
            return false;
        }
        if ($('li.active').length) {
            if ($('li.active').next('li').length) {
                active = $('li.active').removeClass('active');
                // Handle [J] event.
                if (e.keyCode == 74) {
                    newActive = active.next('li');
                }
                // Handle [K] event.
                else if (e.keyCode == 75) {
                    newActive = active.prev('li');
                }
                newActive.addClass('active');
                if ($('li.active').length) {
                    $('html,body').animate({
                        scrollTop: $(newActive).offset().top
                    }, 500);
                };
            }else{
                if (e.keyCode == 75) {
                    active = $('li.active').removeClass('active');
                    newActive = active.prev('li');
                    newActive.addClass('active');
                }
                $('html,body').animate({
                    scrollTop: $(newActive).offset().top
                }, 500);
            };
        }else{
            var active = $('.timeline > li').first();
            var newActive = active.addClass('active');
            $('html,body').animate({
                scrollTop: $(newActive).offset().top
            }, 500);
            return false;
        };

    });

}(jQuery));

/* Fluidbox */
(function ($) {
    "use strict";
    $(document).ready(function(){

      $(".fancybox").fancybox();

    });
}(jQuery));