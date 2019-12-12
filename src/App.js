import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import store from './store';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header setModalOpen={setModalOpen} />
        <GlobalStyle />
        <Routes />
        <Footer />
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
