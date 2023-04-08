{
  // typeAlias와 interface의 선택은 개발자의 취향
  // 반드기 interface를 사용해야하는 경우에는 interface를 쓰는게 좋다
  // 백엔드에서 받아오는 데이터나 보내야하는 데이터 interface를 쓰는게 좋다
  // interface는 중복 선언이 가능하다
  interface User {
    userId: number;
    name: string;
  }

  // type User = {
  //     userID: number;
  //     name: string;
  // }

  interface Post {
    postId: number;
    content: string;
    user: User;
  }

  // 상속 User의 type을 Student가 상속 받아서 사용
  // typeAlias의 intersection과 유사
  interface Student extends User {
    name: string;
    score: number;
  }
}
