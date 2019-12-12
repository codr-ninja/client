import React from 'react';
import styled from 'styled-components';

const Modal = ({ setModalOpen }) => {
    function onModalClose() {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    }
    document.body.style.overflow = 'hidden';

    return (
        <Wrapper onClick={() => onModalClose()}>
            <ModalTag>
                <Text>Login</Text>
                <Button>with GitHub</Button>
                <Button>with Google</Button>
            </ModalTag>
            <Overlay />
        </Wrapper>
    )
}

const Wrapper = styled.div`
position:absolute;
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
top:0;
left:0;
`

const ModalTag = styled.div`
width: 320px;
border-radius: 12px;
background: #fff;
padding: 20px;
box-shadow: 0 2px 5px rgba(0,0,0,0.3);
z-index: 5;
`

const Overlay = styled.div`
position: absolute;
background: #8a8a8a;
opacity: 0.6;
height: 100vh;
width: 100%;
top: 0;
left: 0;
z-index: 1;
`

const Button = styled.button`
width: 100%;
border: none;
text-align: center;
background: #44475a;
color: #bd93f9;
margin-bottom: 15px;
padding: 16px 10px;
border-radius: 12px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const Text = styled.h3`
color: #44475a;
margin-bottom: 15px;
`

export default Modal;