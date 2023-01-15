

// private ----- 외부 접근 불가능
// static  ----- 생성자를 만들지 않아도 접근 가능, Class 레벨 
// protected ---- 외부 접근 불가능, 상속 받은 자식 클래스에서 사용 가능
// public ------ 기본타입 공개한다, 외부에서 접근이 가능
class Car {
    constructor(private brand, private color, private price){
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    engineStart() {
        console.log(this.brand + "시동 켜기")
    }
    
    engineStop() {
        console.log(this.brand + "시동 끄기")
    }
}