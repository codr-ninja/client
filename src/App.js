import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <BrowserRouter>
      <Header setModalOpen={setModalOpen} />
      <GlobalStyle />
      <Routes />
      <Footer />
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </BrowserRouter>
  );
}

export default App;
