import './App.css'; // App.css 스타일 적용
import Hello from './components/hello'; // hello안에 Hello 함수를 받아옴 

// App 기능
function App() {
  const user = "오렌지"; // user는 "오렌지"라는 문자열로 선언

  const style = { // style선언
    color: "deepskyblue"  // color: "deepskyblue" / 기본값
  }

  return (
    <>
      <Hello name="김사과"/> {/* hello.js안의 Hello함수 적용 */}
      <Hello name="반하나" color="yellow"/>{/* color속성 정의 */}
      <Hello name={user} style={style} islover/>
    </>
  );
}

export default App; // App모듈을 기본으로 내보내겠다
