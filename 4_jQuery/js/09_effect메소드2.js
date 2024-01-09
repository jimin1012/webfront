$("div").on("click",function(){
    // $(this).next().is(":visible") == true ? $(this).next().slideUp() : $(this).next().slideDown();

    // 쌤
    if($(this).next("p").css("display") == "none"){
        $(this).siblings(".contents").slideUp();
        $(this).next().slideDown();
       
    }else{
        $(this).next().slideUp();
    }
})

