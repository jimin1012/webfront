// 객체 생성
document.getElementById("btn1").addEventListener("click",function(){
    const div1 = document.getElementById("div1");

    // {} 객체 리터럴 표기법으로 객체 생성

    // ** (중요) **
    // 자바스크립트 객체의 key는 무조건 String(묵시적)
    // "key" 또는 'key'
    // 또는 key(따옴표 없어도 String으로 인식)

    const brand = "할리스";

    const product = { 
        "pName" : "텀블러",
        'brand' : "스타벅스", 
        color : ["white", "blck","silver"],
        price : 35000,

        // 기능(메소드)
        mix : function(){
            console.log("섞기 시작합니다.")
        },
        information : function(){
            // 같은 객체 내부의 다른 속성을 호출하고 싶은 경우
            // 현재 객체를 뜻하는 this를 앞에 붙여야 된다!
            console.log(this.pName);
            console.log(this.brand);
            console.log(this.color);
            console.log(this.price);

            // this 미작성 시 객체 외부 변수 호출
            console.log(brand);
        }
    };

    //결과 출력

    div1.innerHTML = "product.pName : " + product.pName+ "<br>";
    div1.innerHTML += "product.brand : " + product.brand+ "<br>";
    div1.innerHTML += "product.color : " + product.color+ "<br>";
    div1.innerHTML += "product.price : " + product.price+ "<br>";

    div1.innerHTML += "<hr>";

    // 자바스크립트 객체용 향상된 for문 (for ... in)
    // -> 객체 내부에 작성된 key를 순서대로 하나씩 꺼내옴
    for (let key in product) {
        div1.innerHTML +=   product[key]+ "<br>";
                            // 배열의 인덱스 선택하듯이
    }

    // 객체 메소드 호출
    product.mix();
    product.information();
    

})

// -------------------------------------------------------------------

// 생성자 함수 (자바의 생성자를 함수로 작성하는 모양)
// 1. 생성자 함수 정의 (생성자 함수명은 대문자로 시작!)
function Student(name,grade, ban){
    // 속성
    // this == 생성되는 객체
    this.name = name; //생성되는 객체 name에 매개변수 name을 대입
    this.grade = grade; // 생성되는 객체 grade에 매개변수 grade 대입
    this.ban = ban; // 생성되는 객체 ban 매개변수 ban 대입

    // 기능(메소드)
    this.intro = function(){
        console.log(grade + "학년 " + ban +  "반" + name + "입니다.");
    }

}

// 2. 생성자 함수 호출 ( new연산자)
document.getElementById("btn2").addEventListener("click",function(){

    const std1 = new Student("홍길동",3,2);
    const std2 = new Student("고길동",3,2);
    const std3 = new Student("김길동",3,2);
    console.log(std1);
    console.log(std2);
    console.log(std3);

    //생성자 함수 사용이유 : 같은 형태의 객체가 다수 필요한 경우에 사용
    //(코드길이감소,재사용성증가)

    console.log(std1.name);
    console.log(std1.name);
    console.log(std1.intro());
})