{
    type Text = string;
    type TextString = "안녕하세요";
    // 값을 지정할 수도 있다

    const name: Text = "seongyoung";
    const TextType: TextString = "안녕하세요";

    type User = {
        userId: number;
        name: string;
    };

    type Post = {
        postId: number;
        content: string;
        User: User;
    };

    const post1: Post = {
        postId: 1,
        content: "안녕하세요",
        User: {
            userId: 2,
            name: "이주홍",
        },
    };

    // union

    type Store = "food" | "cloth" | "wine" | "chanel";

    const storeKind = (store: Store) => {
        console.log(store);
    };
    storeKind("food");
    // storeKind("juhong");

    type Success = {
        response: {
            info: {
                name: string;
                age: number;
            };
        };
    };

    type Failure = {
        error:string;
    };

    type State = Success | Failure;

    const Login = (id: string, pw: string):State => {

        //id pw --> 백엔드
        // 결과값
        if(id === "123" && pw === "123"){
            return {
                response: {
                    info: {
                        name: "juhong",
                        age: 3,
                    },
                },
            };
        } else {
            return {
                error: "아이디와 비밀번호를 확인해주세요",
            };
        }
    };

    // intersection type

    type Student = {
        name: string;
        score: number;
    };

    type WebUser = {
        nickname: string;
        posting: () => void;
    };

    const internet = (person:Student & WebUser): void => {
        console.log(person.name, person.nickname, person.score);
    };

    internet({
        name: "juhong",
        score: 32,
        nickname: "juhong",
        posting: () => {
            console.log("글을 작성하였습니다");
        },
    });
}