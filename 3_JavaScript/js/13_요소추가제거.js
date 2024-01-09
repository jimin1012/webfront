
// 추가 버튼 (#add)가 클릭되었을때
document.getElementById("add").addEventListener("click",function(){
    // div 요소 생성
    const div = document.createElement("div");
    div.classList.add("row");
    // input 요소 생성
    const input = document.createElement("input");
    input.classList.add("in");
    // input에 "type" 속성, "number" 속성값 추가 (type-"number")

    // - 요소.setAttribute("속성","속성값"): 요소에 속성/속성값 추가
    input.setAttribute("type","number")

    // span 요소 생성
    const span = document.createElement("span");
    span.classList.add("remove");

    span.innerText ="X";

    // span이 클릭 되었을 때에 대한 이벤트 동작 추가
    span.addEventListener("click",function(){
        // 요소.remove() : 요소를 제거
        // 요소.parentElement : 부모요소

        // 부모(.row) 제거
        span.parentElement.remove();
    })

    // div 내부에(자식으로) input, span 순서대로 추가
    div.append(input);
    div.append(span);

    // #container에 div를 마지막 자식으로 추가
    document.getElementById("container").append(div);
})


// 계산 버튼 클릭 시 이벤트 동작
document.getElementById("calc").addEventListener("click",function(){

    let sum =0;

    // in 클래스 요소를 모두 얻어옴 -> 배열형태
   const input=  document.getElementsByClassName("in")
    //배열용 향상된  for문(for of)사용

    for (let i of input) {
        // console.log(i.value);

        // -> input에 작성된 값은 모두 string-> 숫자 변환 Number() 필요
        sum += Number(i.value);

        // Number("") == 0// 빈칸은 0으로 변환되기 때문에 신경쓰지 말자
    }
    // sum을 alert로 출력
    alert(sum);
})


