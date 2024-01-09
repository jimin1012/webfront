document.getElementById("btn1").addEventListener("click",function(){

    // 문자열.indexOf("str");
    // 문자열에서 "str"과 일치하는 부분이 시작되는 인덱스를 반환
    // 없으면 -1 반환

    const str1 = "Hello world";

    console.log("첫번째 : "+str1.indexOf("e")); // 1
    console.log("두번째 :"+str1.indexOf("l")); // 2 (가장 먼저 검색된 인덱스 반환)
    console.log("세번째 :"+str1.indexOf("가")); // -1 

    // 문자열.substring(시작인덱스, 종료인덱스(미포함)) : 문자열 일부 잘라내기
    // 시작 이상 종료미만
    const str2 = "abcdefg";

    console.log(str2.substring(0,3));  // abc 
    console.log(str2.substring(2,6));   // cdef

    // 문자열을.split("구분자") : 문자열을 "구분자"로 잘라서 배열로 반환
    const str3 = "햄버거, 비빔밥, 김밥, 라면, 파스타, 삼겹살";

    const arr = str3.split(", ");
    console.log(arr);

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]); 
    }
})

// 숫자 관련 함수
document.getElementById("btn2").addEventListener("click",function(){
    
    // Infinity 리터럴 확인
    console.log(5/0);

    if(5/0== Infinity){
        console.log("무한입니다.");
    }

    // NaN 리터럴 확인
    console.log("aaa" * 100);

    //"aaa"*100 == NaN

    // isNaN(값) : 값이 NaN이면 true, false

    if(isNaN("aaa"*100)){
        console.log("숫자가 아닙니다.");
    }

    // Math.random() : 0이상 1미만의 난수 발생 (0 <= random <1)
    // this.innerText = Math.random();

    // 소수점 관련 함수
    // round(), ceil(), floor(), trunc()
    // 반올림    올림     내림    버림 (절삭)

    // -> 소수점 자리를 지정할 수 없다.
    console.log(Math.round(10.5)); //11
    console.log(Math.ceil(10.5)); //11
    console.log(Math.floor(-10.5)); //-11
    console.log(Math.trunc(-10.5)); //-10

    // 버튼 배경색 랜덤으로 바꾸기
    const r = Math.floor(Math.random()*256); // 0~ 255
    const g = Math.floor(Math.random()*256); // 0~ 255
    const b = Math.floor(Math.random()*256); // 0~ 255

    this.style.backgroundColor = "rgb("+r+","+g+","+b+")";

    // 숫자.toFixed(자릿수) : 지정된 자릿수까지 반올림해서 표현
    console.log((1.45).toFixed(1));
    console.log(Math.round(1.45*10)/10);
})

// 형변환 확인
document.getElementById("btn3").addEventListener("click",function(){

    console.log(parseInt("1.234"));
    console.log(parseFloat("1.234"));
    console.log(Number("1.234"));
})

// 동등 /동일 비교 연산자
document.getElementById("btn4").addEventListener("click",function(){

    if(1 == "1"){ //true
        console.log("동등하다.");
    }

    if(1==true){ // true
        console.log("동등");
    }

    if(1 === "1"){ // false
        console.log("동일하다");
    }

})