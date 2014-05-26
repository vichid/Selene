$().ready(function(){
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