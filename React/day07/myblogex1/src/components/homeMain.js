import React from "react";
// 디자인의 일관성을 유지하기 위해 bootstarp에 Button을 객체로 받아 import
import {Button} from "react-bootstrap";
// 내부의 데이터를 가장 빠르게 전송하는 방법을 찾는 router에 Link를 객체로 받아 import
import { Link } from "react-router-dom";

const HomeMain= () => {
    return (
        // React에서는 a태그 대신에 Link태그를 사용
        // React는 컨포넌트를 통한 리랜더링을 하는 Single Page Application이기에
        // a태그를 이용한 전체 html을 부르는 과정은 속도를 저하시키기 때문에
        // Link를 사용하여 각 컨포넌트 별로 불러오는 것이 속도를 더 향상시킨다
        <Link to="/sign">
            <Button variant="outline-primary">회원가입</Button>
        </Link>
    )
}
export default HomeMain;