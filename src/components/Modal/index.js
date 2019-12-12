import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as UserActions from '../../store/modules/user/actions';
import * as AuthActions from '../../store/modules/auth/actions';

const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const Modal = ({ setModalOpen }) => {
  const dispatch = useDispatch();

  function onModalClose() {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  }
  document.body.style.overflow = 'hidden';

  function handleLogin(provider) {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const userObject = {
          email: result.user.email,
          displayName: result.user.displayName,
          photo: result.user.photoURL,
        };
        dispatch(UserActions.authSuccess(userObject));
        dispatch(AuthActions.update(true));
        onModalClose();
      })
      .catch(err => {
        toast.error(err.message);
        onModalClose();
      });
  }

  return (
    <Wrapper onClick={() => onModalClose()}>
      <ModalTag>
        <Text>Login</Text>
        <Button onClick={() => handleLogin(githubProvider)}>
          Prosseguir com GitHub
        </Button>
        <Button onClick={() => handleLogin(googleProvider)}>
          Prosseguir com Google
        </Button>
      </ModalTag>
      <Overlay />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
`;

const ModalTag = styled.div`
  width: 320px;
  border-radius: 12px;
  background: #bd93f9;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 5;
`;

const Overlay = styled.div`
  position: absolute;
  background: #8a8a8a;
  opacity: 0.6;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  text-align: center;
  background: #44475a;
  color: #fff;
  margin-bottom: 15px;
  padding: 16px 10px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Text = styled.h3`
  color: #44475a;
  margin-bottom: 15px;
`;

export default Modal;
