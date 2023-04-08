{
    // typeAlias(타입 지정)

    type Text = string;
    let str:Text = "안녕하세요";

    type TextString = "zi존성용123"
    let str2: TextString = "zi존성용123";

    type User = {
        userId: number;
        name: string;
    }

    type Post = {
        postId: number;
        content: string;
        user: User; // ⬅️ 위에서 User가 객체이기 때문에 객체여야한다
    }

    const post : Partial<Post> = {
        content: "안녕하세요",
        postId : 1,
        user: {
            name: "김성용",
            userId: 3
        }
    }

    // union 타입 ➡️ 타입 여러개 사용하기
    type Product = "food" | "cloth"

    const store = (product: Product) => {
        console.log(product)
    };

    store("cloth")

    // intersection type
    type Student = {
        name: string;
        score: number;
    }

    const internet = (person: Student & User) => {
        console.log(person);
    }

    internet({
        userId: 1,
        name: "김성용",
        score: 80
    })

    type COLOR = {
        [key:string] : string
    }
    // 자동완성x => 다른 개발자에게 어떤 형태의 객체인지 알려주는 용도의 문서화

    const COLORS:COLOR = {
        gray: "#E5E5E5",
        red: "#FEFEFE",
    }
}