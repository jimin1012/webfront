$("#btn1").on("click",function(){
    console.log($(".box-color").val());
    $(".box").css("backgroundColor",$(".box-color").val());
})

const divArr = $(".box");
const colorArr = $(".box-color");

for (let i = 0; i < $(".box-color").length; i++){
    $("#btn2").on("click",function(){

        //두가지 버전 느낌

        // $(".box-color").prev()[i].style.backgroundColor =$(".box-color")[i].value;
        $(divArr[i]).css("backgroundColor", $(colorArr[i]).val());

        //prev() = 이전 형제요소

    })
}


for (let i = 0; i < $(".box-color").length; i++){
    $(".box-color").on("input",function(){
        $(divArr[i]).css("backgroundColor", $(colorArr[i]).val()).next().css("border", "2px solid "+$(colorArr[i]).val());
    });
}
