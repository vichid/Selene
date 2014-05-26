$().ready(function(){
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
});