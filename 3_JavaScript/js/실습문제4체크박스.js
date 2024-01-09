const allCk = document.getElementById("allCk");

const btn = document.getElementById("btn");

const div1 = document.getElementById("div1");

const ck= document.querySelectorAll("input[name='hobby']");


// 전체 선택 클릭 시 전체 선택 체크박스로 값 변경
allCk.addEventListener("change",function(){
        for (let i = 0; i < ck.length; i++) {
            ck[i].checked =  allCk.checked
        }
})

//다른 체크 박스가 체크 해제되었을 때
for (let i = 0; i < ck.length; i++) {
    ck[i].addEventListener("change",function(){
        const totalCount =ck.length; // 전체선택말고 다른 체크박스 전체의 개수
        const ckCount = document.querySelectorAll("input[name='hobby']:checked").length; // 체크되어 있는 체크박스의 개수
       
        if(totalCount == ckCount){
            allCk.checked = true;
        }else{
            allCk.checked = false;
        }
    
    })
}

//  쌤의 방법 그냥 this 하면 window
// this.addEventListener("click",function(e){
//     for(let i =0; i<ck.length; i++){
//         if(e.target == ck[i]){
//             // 1) 취미가 전부 선택 안되어 있을 시 전체선택 체크박스 해제하기
//             if(allCk.checked && !ck[i].checked){
//                 // 전체 선택이 체크되어 있으면서 현재 클릭한 체크박스가 해제되는 경우
//                 allCk.checked = false;
//             }

//             // 2) 취미가 전부 선택이 되어 있을 시 전체선택 체크박스 체크하기
//             let flag = true;
//             for (let j = 0; j < ck.length; j++) {
//                 if(!ck[j].checked){//하나라도 체크가 안되어 있을 때
//                     flag = false;
//                 }
//             }
         
            
//             if(!allCk.checked && flag){
//                 // 전체선택 체크박스가 체크되어 있지 않으면서
//                 // 취미가 전부 선택이 되어있는 경우

//                 allCk.checked = true;
//             }
       
//         }

//     }
// })


// 버튼 눌렀을 때

btn.addEventListener("click",function(){
    let str = "";
    for (let i = 0; i < ck.length; i++) {
        if(ck[i].checked == true){
            str += " "+ck[i].value+" ";
        }
    }
    div1.innerHTML = str;
})