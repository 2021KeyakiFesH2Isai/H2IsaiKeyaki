$(function(){
    $("#Header").load("Header.html");
    //$("#footer").load("footer.html");

    //Videoのサイズ
    $("video").css("width" ,String($("#bodyContent").width() /2) + "px");

    if($(window).width() <= 480){
        $("video").css("width" ,String($("#bodyContent").width()) + "px");
    }


    if($(window).width() <= 480){
        $(".ContentBox").hover(
            function(){
                $(this).stop().animate({
                    'width':'85%',
                },'fast');
            },
            function () {
                $(this).stop().animate({
                    'width':'80%',
                },'fast');
            }
        );
    }else{
        $(".ContentBox").hover(
            function(){
                $(this).stop().animate({
                    'width':'33%',
                },'fast');
            },
            function () {
                $(this).stop().animate({
                    'width':'27%',
                },'fast');
            }
        );
    }


})