const sendit = function(){
    const frm = document.regForm;
    const userid = frm.userid;
    if(userid.value == ""){
        alert("아이디를 입력하세요!");
        userid.focus();
        return false;
    }
    //아이디(5자 ~ 12자 사이로만)

    const userpw = frm.userpw;
    //비밀번호, 비밀번호 확인은 비어있으면 안되며 서로 같아야함

    const username = frm.username;
    //이름은 비어있는지 확인
    //정규식
    const expNameText = /[가-힣]+$/;
    if(!expNameText.test(username.value)){
        alert("이름 형식을 확인하세요! 한글만 입력하세요!");
        username.focus();
        return false;
    }

    const hp = frm.hp;
    //핸드폰 번호 비어있는지 확인
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    if(!expHpText.test(hp.value)){
        alert("휴대폰 번호 형식을 확인하세요")
        hp.focus();
        return false;
    }

    const email = frm.email;
    //dev.jds@app.naver-play.com
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/
    if(!expEmailText.test(email.value)){
        alert("이메일 형식을 확인하세요!")
        email.focus();
        return false;
    }
    const hobbies = frm.hobby;
    let flag = false;
    for(let hobby of hobbies){
        if(hobby.checked){
            flag = true;
            break;
        }
    }
    if(!flag){
        alert("취미는 적어도 1개 이상 선택하세요!")
        return false;
    }

    const zipcode = frm.zipcode;
    if(zipcode.value == ""){
        alert("주소를 입력하세요!");
        sample6_execDaumPostcode();
        return false;
    }

    const address2 = frm.address2;
    if(address2.value == ""){
        alert("상세주소를 입력하세요!");
        address2.focus();
        return false;
    }
    return true;
}