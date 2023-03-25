import { RESERVATION_LIST } from "./reservation .js";

/* 
예약 고객확인하기
*/

var name = document.getElementsByName("user-name");             // 태그의 name이 "user-name"인 Object
var phone = document.getElementsByName("user-phone");           // 태그의 name이 "user-phone"인 Object
var reserNum = document.getElementById("reservation-number");   // 태그의 id가 "resrvation-number"인 Object
var check = true;

// button태그가 클릭 되었을 시
document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();     // 이벤트의 기본 동작막음(페이지 리랜더링을 막음)
    RESERVATION_LIST.forEach((item) => {    // ForEach문으로 RESERVATION_LIST의 내의 값을 반복
        if (item["name"] == name[0].value && item["phone"] == phone[0].value) { // 입력한 값의 이름과 전화번호가 리스트내에 일치하는 정보가 있다면
            check = false;
            reserNum.innerText = item["number"];   // reserNum의 내부텍스트에 예약번호를 돌려줌
        }
    });
    if(check){reserNum.innerText = "일치하는 정보가 없습니다. 다시 입력해주세요.";}
});


