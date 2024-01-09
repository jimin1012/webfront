/* 아이디 : 값이 변했을 때 
영어 소문자로 시작하고, 
영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14 글자 사이 문자열인지 검사
아이디 정규표현식 : (각자 작성)

- 형식이 일치할 경우
입력창의 배경색을 green 으로 변경

- 형식이 일치하지 않은 경우
입력창의 배경색을 red, 글자색을 white 로 변경*/

document.getElementById("user-id").addEventListener("input",function(){
    const idTest = /^[a-z]+[A-z\-_0-9]{5,13}/;

    // idTest.test(this.value)
    if(idTest.test(this.value)){
        this.style.backgroundColor = "green";
    }else{
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }

})


// ------------------------------------------------------------------

/* 비밀번호, 비밀번호 확인 : 키보드가 올라올 때 
"비밀번호" 를 미입력한 상태에서 "비밀번호 확인"을 작성할 경우
"비밀번호 확인"에 작성된 내용을 모두 삭제하고
'비밀번호를 입력해주세요' 경고창 출력 후
focus 를 "비밀번호" 입력창으로 이동
*/
document.getElementById("user-pw2").addEventListener("keyup",function(){

    const pw = document.getElementById("user-pw1");
    const pwWarning = document.getElementById("pw-warning");
    
    if(pw.value.length ==0){
        
        pwWarning.style.color= "red";
        pwWarning.innerText = "비밀번호를 입력해주세요."
        this.value=null;
        pw.focus();
    }else{
        pwWarning.innerText = "";

        pwchk();
    }
})


// ------------------------------------------------------------------

/*
- 비밀번호가 일치할 경우
"비밀번호" 입력창 오른쪽에 "비밀번호 일치" 글자를 초록색으로 출력.

- 비밀번호가 일치하지 않을 경우
"비밀번호" 입력창 오른쪽에 "비밀번호가 불일치" 글자를 빨간색으로 출력

- 비밀번호가 작성되지 않은경우 오른쪽에 출력되는 문구 삭제

*/
function pwchk(){
    const pw1 = document.getElementById("user-pw1");
    const pw2 = document.getElementById("user-pw2");
    const pwWarning = document.getElementById("pw-warning");
    if(pw1.value == pw2.value){
        pwWarning.innerText= "비밀번호 일치"
        pwWarning.style.color= "green";
    }else{
        pwWarning.innerText= "비밀번호 불일치"
        pwWarning.style.color= "red";
    }

    pw1.addEventListener("input", () => {
        if(pw1.value.length==0){
            pwWarning.innerText= "";
        }
    })
}

// -------------------------------------------------------------

/* 이름 : 값이 변화했을 때 
한글 2~5 글자 사이 문자열인지 검사.
- 형식이 일치할 경우
"이름" 입력창 오른쪽에 "정상입력" 글자를 초록색으로 출력.
- 형식이 일치할 경우
"이름" 입력창 오른쪽에 "한글만 입력하세요" 글자를 빨간색으로 출력.
*/
document.getElementById("user-name").addEventListener("input",function(){
    const nameTest = /^[가-힣]{2,5}$/;
    const nmWn = document.getElementById("name-warning");

    if(nameTest.test(this.value)){
        nmWn.style.color = "green";
        nmWn.innerText="정상입력";
    }else{
        nmWn.style.color = "red";
        nmWn.innerText="한글만 입력하세요";
    }
    
    // value 가 존재하지 않을 때 0이든 false든 ""든 똑같이 사용가능
    if(this.value == 0){
        nmWn.innerText="";
    }
})
// -----------------------------------------------------------

/* 회원가입 버튼 클릭 시 : validate() 함수를 호출하여 
성별이 선택 되었는지, 전화번호가 형식에 알맞게 작성되었는지 검사 */

function validate(){

    /*- 성별이 선택되지 않은 경우 
    "성별을 선택해주세요." 경고창(==대화상자) 출력 후
    submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함.*/

    const man =document.getElementById("user-gender-man");
    const woman = document.getElementById("user-gender-woman");
    const signUp = document.getElementById("sign-up");
    const userPhone = document.getElementById("user-phone");
    const phoneNumber = /^[0-1]{3}-[0-9]{4}-[0-9]{4}$/;

    let flag =true;

    // if(man.checked || woman.checked){
    //     // signUp.setAttribute("type","submit");
    // }else{
    //     // signUp.setAttribute("type","");
    //     alert("성별을 선택해주세요.");
    //     flag =false;
    // }
    if(!(man.checked || woman.checked)){
        alert("성별을 선택해주세요.");
        flag =false;
    }else if(userPhone.value.length == 0){
        alert("전화번호를 입력해주세요.")
        flag =false;
    }else if(!phoneNumber.test(userPhone.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
        flag =false;
    }

    /*
    - 전화번호 형식이 올바르지 않을 경우 
    "전화번호의 형식이 올바르지 않습니다" 경고창(==대화상자) 출력 후
    submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함.
    */

    // if(phoneNumber.test(userPhone.value)){
    //     // signUp.setAttribute("type","submit");
    // }else{
    //     // signUp.setAttribute("type","");
    //     alert("전화번호의 형식이 올바르지 않습니다.");
    //     flag =false;
    // }

    return flag;

}


document.getElementById("clear-btn").addEventListener("click",function(){
    const input =  document.getElementsByTagName("input");

    for (const i of input) {
        i.value = null;
        i.checked = false;
    }
})