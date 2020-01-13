$(document).ready(function(){
    $(".latest-section a").hover(
        function(){
            $(this).parent().prev().css("color","#000");
            $(this).parent().parent().css("background-color","#rgb(228, 222, 222)");
    },
    function(){
        $(this).parent().prev().css("color","#fff");

    }
    );
    $('#btn').click(function() {
        $(".header-form").toggle();
      });
});