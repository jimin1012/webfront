// id로 접근하기
function accessId(){
    const div1 = document.getElementById("div1");

    // 접근한 요소의 배경색 얻어오기
    const bgColor = div1.style.backgroundColor;
    
    /* 자바스크립트는 문자열 비교시에도 비교 연산자를 사용한다!! */
    if(bgColor == "red"){
        //div의 배경색을 yellow로 변경
        div1.style.backgroundColor = "yellow";

    }else{
        //div1의 배경색을 red로 변경
        div1.style.backgroundColor = "red";
    }
}

// class로 접근하기
function accessClass(){
    
    // 요소를 여러 개 접근하는 경우 [배열] 형태로 반환됨
    const arr = document.getElementsByClassName("div2");

    // 인덱스를 이용해서 요소 하나씩 접근
    arr[0].style.backgroundColor = "red";
    arr[1].style.backgroundColor = "pink";
    arr[2].style.backgroundColor = "blue";
    
    arr[0].innerHTML = "첫번째 요소";
    arr[1].innerHTML = "두번째 요소";
    arr[2].innerHTML = "세번째 요소";
}

// 태그명으로 접근하기
function accessTagName(){

    // 문서 내 모든 li태그 접근(배열 반환)
    const arr = document.getElementsByTagName("li");

    // 반복문(Java랑 비슷)
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i].innerText; // 요소에 작성된 내용(숫자)얻어오기

        arr[i].style.backgroundColor = "rgb(130,220,"+(50 * num) +")";
    }
}

// input 태그의 값(value) 얻어오기/변경하기
function inputTest(){
    const input = document.getElementById("input-test");

    // ** innerText/innerHTML은
    //    요소의 내용(시작태그, 종료태그 사이에 작성된 내용)을
    //    얻어오거나, 변경할 때만 사용가능

    // ** input은 [value]를 이용해서 값을 얻어오거나, 변경할 수 있음

    console.log(input.value);

    // input에 작성된 값 변경하기
    // 빈 문자열
    input.value ="";

    // input에 초점 맞추기 -> focus()
    input.focus();
}

// name으로 접근하기
function accessName(){
    const hobbyList = document.getElementsByName("hobby");

    let str = "";

    let count ="";
    for (let i = 0; i < hobbyList.length; i++) {

        // * radio/checkbox 전용 속성 *
        // .checked : 해당 요소가 체크되어 있으면 true, 아니면 false 반환
        if(hobbyList[i].checked){
            str += hobbyList[i].value + " ";
            count++;
        }
        
    }

    //#name-div에 출력
    document.getElementById("name-div").innerHTML = str +"<br>" +"선택된 개수 : "+count;
    
}

// CSS 선택자로 접근하기
function accessCss(){
    // querySelector() : 요소 1개 선택시 사용
    //                   (여러 요소가 선택되면 첫번째 요소만 선택)

    // 1개만 있는 요소 선택
    document.querySelector("#css-div").style.border = "3px solid red";

    // 여러개 있는 요소 선택(첫번째 요소 선택 확인)
    document.querySelector("#css-div > div").style.fontSize="30px";

    //querySelectorAll() : 모든 요소 선택 시 사용
    const arr =  document.querySelectorAll("#css-div > div");

    // 배경색을 원하는 색상으로 바꾸고 실행해보기

    for (let index = 0; index < arr.length; index++) {
        
        arr[index].style.backgroundColor= "rgb(255,122,"+123*index+")";
    }
}

/* 나만의 테스트용 채팅 */
function userChat(){
    const bg = document.getElementsByClassName("wrap");
    const input = document.querySelector("#test-chat-input");

    console.log(bg);
    console.log(input);
    if(input.value.trim().length > 0){
       
        bg[0].innerHTML += " <div class='chat ch1'><div class='icon'><img class='fa-solid fa-user' src='js/123.png' alt=''></div><div class='textbox'>"+input.value.trim()+" </div> </div>";
        

        input.value ="";
        input.focus();
    }
}

function myChat(){
    const bg = document.getElementsByClassName("wrap");
    const input = document.querySelector("#test-chat-input");
    console.log(bg);
    console.log(input);
    if(input.value.trim().length > 0){

        bg[0].innerHTML += "<div class='chat ch2'> <div class='textbox'> "+input.value.trim()+"</div></div>";
        
        input.value ="";
        input.focus();
    }
}




//카카오톡 채팅 만들기
function readValue(){

    // 채팅 입력에 사용되는 요소 모두 얻어오기
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chatting-input");

    //input에 입력된 값이 있을 경우
    if(input.value.trim().length > 0){

        // 문자열.trim() : 문자열 양 끝에 공백을 모두 제거
        // ex)"        K           H           ".trim()->"K        H"

        //input에 입력된 값을 얻어와 bg에 추가(누적)
        bg.innerHTML += "<p> <span> "+input.value.trim()+"</span></p>";
        
        // 요소.scrollTop : 요소 내부 현재 스크롤 위치 반환
        // 요소.scrollTop = 위치 : 스크롤을 특정 위치로 이동
        // 요소.scrollHeight : 스크롤 전체 높이


        //bg의 스크롤을 제일 밑으로 내리기
        bg.scrollTop = bg.scrollHeight;


        /* input에 작성된 값 변경하기 */
        //빈문자열 == valeu 지우기

        // input에 초점 맞추기
        input.value ="";
        input.focus();
    }
    
    
}

function inputEnter(event){
    console.log(event.key);//현재 눌러진 키를 반환
    if(event.key=="Enter"){ //눌러진 key가 Enter인 경우
        readValue();//함수 호출
        
    }
    
}