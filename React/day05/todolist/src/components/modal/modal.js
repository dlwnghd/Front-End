import React from "react";
import styled from "styled-components";

const Modal = () =>{
    return(
        <ModalTamplet>
            <p>이건 모달 창입니다.</p>
        </ModalTamplet>
    )
}
export default Modal;

const ModalTamplet = styled.div`
    width: 380px;
    height: 60px;
    border-radious: 16px;
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    z-index: 100;
    border: 10px solid salmon;
`