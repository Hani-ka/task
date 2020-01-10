$(document).ready(function(){
    $(".latest-section a").hover(
        function(){
            $(this).parent().prev().css("color","#000");
    },
    function(){
        //$(".latest-section p").css("color","#fff");
        $(this).parent().prev().css("color","#000");
    }
    );
});