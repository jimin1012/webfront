console.log("object");

const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const userName = document.getElementById("name");
const btday = document.getElementById("btday");
const phone = document.getElementById("phone");
const ckbox = document.getElementById("ckbox");

const genders = document.getElementsByName("gender");
const signUpBtn = document.getElementById("signUp-btn");


const checkObj = {
    "email" : false,
    "password1" : false,
    "password2" : false,
    "name" : false,
    "btday" : false,
    "phone" : false,
    "ckbox" : false
};

email.addEventListener("input",function(){

    const regExp = /^[\w\_\-]{4,}@[\w\_\-]+(\.\w+){1,3}$/;

    if(regExp.test(email.value.trim())){
        confirmMessage(this,"유효한 이메일 형식입니다.");
        checkObj.email = true;
    }else{
        errorMessage(this,"유효하지 않은 이메일 형식입니다.");
        checkObj.email = false;
    }
    if(email.value.trim().length ==0){
        errorMessage(this,"이메일을 입력해주세요");
        checkObj.email = false;
    }

    btnColor();
})


password1.addEventListener("input",function(){
    const regExp = /^[A-z\d!@#\-_]{6,12}$/;

    if(regExp.test(password1.value.trim())){// 비밀번호 유효한 경우
        
        if(password2.value.trim().length == 0){// 비밀번호가 유효, 확인 작성X
            confirmMessage(this,"유효한 비밀번호 형식입니다.");
            checkObj.password1 = true;
        }else{ 
            checkPw();
        }
        
    }else{
        errorMessage(this,"유효하지 않은 비밀번호 형식입니다.");
        checkObj.password1 = false;
    }

    if(password1.value.trim().length == 0){
        errorMessage(this,"비밀번호를 입력해주세요.");
        checkObj.password1 = false;
    }
    btnColor();
});

password2.addEventListener("input",checkPw);

function checkPw(){ // 비밀번호 일치 검사
    // 비밀번호 / 비밀번호 확인이 같을 경우
    if(password1.value.trim() == password2.value.trim()){
        confirmMessage(password1,"비밀번호가 일치합니다.");
        checkObj.password2 = true;
    }else{
        errorMessage(password1,"비밀번호가 일치하지 않습니다.");
        checkObj.password2 = false;
    }
    btnColor();
}

userName.addEventListener("input",function(){

    const regExp = /^[가-힣]{2,5}/;

    if(regExp.test(this.value.trim())){
        confirmMessage(this,"유효한 이름입니다");
        checkObj.name = true;
    }else{
        errorMessage(this,"유효하지 않은 이름입니다.");
        checkObj.name = false;
    }
    if(this.value.trim().length == 0){
        errorMessage(this,"이름을 입력해주세요.");
        // this.focus();
        checkObj.name = false;
    }
    btnColor();
})

btday.addEventListener("input",function(){

    const regExp = /^(1[9]|2[0])\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/;

    if(regExp.test(this.value.trim())){
        confirmMessage(this,"유효한 생년월일입니다.");
        checkObj.btday = true;
    }else{
        errorMessage(this,"생년월일 형식이 올바르지 않습니다.");
        checkObj.btday = false;
    }

    if(this.value.trim().length == 0){
        errorMessage(this,"생년월일을 입력해주세요.");
        checkObj.btday = false;
    }
    btnColor();
})


phone.addEventListener("input",function(){
    const regExp = /^0(1[01679]|2|[3-6][1-5]|70)\-\d{3,4}\-\d{4}$/;

    if(regExp.test(this.value.trim())){
        confirmMessage(this,"유효한 전화번호 입니다.");
        checkObj.phone = true;
    }else{
        errorMessage(this,"올바르지 않은 전화번호 형식입니다.");
        checkObj.phone = false;
    }
    if(this.value.trim().length == 0){
        errorMessage(this,"전화번호를 입력해주세요.");
        checkObj.phone = false;
    }
    btnColor();
})



function btnColor(){
    for (const key in checkObj) {
        console.log(key+" 트루값 : "+checkObj[key]);
        if(!checkObj[key]){
            signUpBtn.style.backgroundColor = "#ebebeb";
        }else{
            if(checkObj.email && checkObj.password1 && checkObj.password2 &&checkObj.name &&checkObj.btday && checkObj.phone && checkObj.ckbox){
                signUpBtn.style.backgroundColor = "#436ccc";
            } 
        }
    }
}

ckbox.addEventListener("change",function(){
    if(ckbox.checked){
        checkObj.ckbox = true;
    }else{
        checkObj.ckbox = false;
    }
    btnColor();
})

function errorMessage(el,str){
    el.nextElementSibling.classList.add("error");
    el.nextElementSibling.classList.remove("confirm");
    el.nextElementSibling.style.display ="block";
    el.nextElementSibling.innerText =str;
}

function confirmMessage(el,str){
    el.nextElementSibling.classList.add("confirm");
    el.nextElementSibling.classList.remove("error");
    el.nextElementSibling.style.display ="block";
    el.nextElementSibling.innerText = str;
}

// signUpBtn.addEventListener("input",function(){

// })