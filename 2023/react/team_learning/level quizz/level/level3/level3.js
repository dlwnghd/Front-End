/* 
레시피 재료 추가하기

*/

const addBtn = document.getElementById("addBtn"); // 추가 버튼
const submitBtn = document.getElementById("submit_button"); // 제출 버튼
const form = document.getElementById("ingredient-form"); // 추가 폼
const addlist = document.querySelector("tbody"); // 추가 리스트
const submitlist = document.getElementById("ingredient-list"); // 제출지

// 추가 버튼 클릭
addBtn.addEventListener("click", function (event) {
    event.preventDefault();  // 이벤트의 기본 동작막음(페이지 리랜더링을 막음)

    // 만약 같은 이름의 재료가 있다면
    if(addlist.innerText.trim().includes(form[0].value.trim())){
        alert("이미 있는 재료입니다!");
        return;
    }

    // 재료
    let td1 = document.createElement("td");
    td1.innerText = form[0].value;
    
    // 무게
    let td2 = document.createElement("td");
    td2.innerText = form[1].value;
    
    // 관리
    let td3 = document.createElement("td");
    let delBtn = document.createElement("button");
    delBtn.classList.add("deleteBtn");
    delBtn.textContent = "삭제";
    delBtn.addEventListener("click", deleteBtn);
    td3.appendChild(delBtn);

    // (재료, 무게, 관리)
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3);
    tr.id = td1.innerText;

    // 리스트에 추가
    addlist.append(tr);
});

// 삭제 버튼 클릭
function deleteBtn() {
    this.parentNode.parentNode.remove();
}

// 제출 버튼 클릭
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();   // 이벤트의 기본 동작막음(페이지 리랜더링을 막음)

    // 추가 리스트만큼 반복
    for(let i = 1; i < addlist.children.length; i++){
        let li = document.createElement("li");
        li.textContent = `${addlist.children[i].children[0].innerText}: ${addlist.children[i].children[1].innerText}`;
        submitlist.append(li);
    }
});
