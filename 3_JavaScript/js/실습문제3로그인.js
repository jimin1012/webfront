
// document.getElementById("con").style.display = "none"
// window.onload =  function(){ 
//     document.getElementById("btn1").addEventListener("click",function(){
        
//         if(document.getElementById("con").style.display =="none"){
//             document.getElementById("con").style.display = "";
//         }else{
//             document.getElementById("con").style.display = "none";
//         }
//     })
// }



// 1. 이 문서를 처음 로드하면 로그인 화면 보이지 않게 하기
// -> InnerHTML = "";
// -> visibility : hidden; // 요소는 존재하지만 보이지 X 영역 O
// -> display : none ; // 요소는 존재하지만 보이지 X, 영역 X
document.getElementById("myForm").style.display="none";

// 2. label 태그는 가로 '80px' 크기
const label = document.getElementsByTagName("label");

// label.style.display="inline-block";
// label.style.width="80px";
for (let index = 0; index < label.length; index++) {
    label[index].style.display="inline-block";
    label[index].style.width="80px";
}

// 3. 로그인 버튼을 클릭하면 로그인 화면이 화면에 나타난다.
const open = document.getElementsByClassName("open")[0];
const close = document.getElementsByClassName("cancel")[0]

open.addEventListener("click",function(){
    document.getElementById("myForm").style.display= "block";
})

// 4. Close 버튼을 클릭하면 로그인 화면이 사라진다.
close.addEventListener("click",function(){
    document.getElementById("myForm").style.display="none";
})