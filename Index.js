$(function(){
    $("#Header").load("Header.html");
    //$("#footer").load("footer.html");

    //Videoのサイズ
    $("video").css("width" ,String($("#bodyContent").width() /2) + "px");

    if($(window).width() <= 480){
        $("video").css("width" ,String($("#bodyContent").width()- 20) + "px");
    }


    if($(window).width() <= 480){
        
    }

    if($(window).width() > 481){
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

    one = $("#SwitchButton1");
    two = $("#SwitchButton2");
    switchTimeTable(1);
})



function switchTimeTable(date){


    if(date === 1){
        $("#FirstDayTable").show();
        $("#SecondDayTable").hide();
        one.attr('id', 'SwitchButton2');
        two.attr('id','SwitchButton1');
    }else 
    if(date === 2){
        $("#FirstDayTable").hide();
        $("#SecondDayTable").show();
        one.attr('id', 'SwitchButton1');
        two.attr('id','SwitchButton2');
    }


}
