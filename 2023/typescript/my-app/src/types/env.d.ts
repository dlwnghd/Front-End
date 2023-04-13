// 타입 정의
// 이미지, 아이콘 등의 declare로 사용하여 자동완성 및 태그로서 활용 가능

// mp3나 기타 확장자의 경우 declare module이 필수
// declare module '*.mp3'

declare module "@env" {
  export const BACK_URL: process.env.REACT_APP_BACK_URL;
}
