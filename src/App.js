import { useState } from "react";
import "./assets/styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Header from "./components/Header";
import ArtworkPage from "./components/pages/ArtworkPage";
import CreatorPage from "./components/pages/CreatorPage";
import ModalsTemplate from "./components/UI/modals/ModalsTemplate";

function App() {
  const [modal, setModal] = useState(false);
  const [walletState, setWalletState] = useState(1);
  const [logedIn, setLogStatus] = useState(false);
  const [status, setStatus] = useState("Initializing...");

  const Wallet1 = () => {
    return (
      <div className="wallet-1__wr">
        <div className="wallet-1">
          <div className="wallet-1__comp-wr">
            <div className="wallet-1__num-wr">
              <p className="wallet-1__num">1.</p>
            </div>
            <div className="wallet-1__img">
              <img src={require("./assets/img/modals/descrWallet.png")} alt="" />
              <p className="wallet-1__img-descr">Описание что нужно сделать</p>
            </div>
          </div>
          <div className="wallet-1__comp-wr">
            <div className="wallet-1__num-wr">
              <p className="wallet-1__num">2.</p>
            </div>
            <div className="wallet-1__img">
              <img src={require("./assets/img/modals/descrWallet.png")} alt="" />
              <p className="wallet-1__img-descr">Описание что нужно сделать</p>
            </div>
          </div>
          <div className="wallet-1__comp-wr">
            <div className="wallet-1__num-wr">
              <p className="wallet-1__num">3.</p>
            </div>
            <div className="wallet-1__img">
              <img src={require("./assets/img/modals/descrWallet.png")} alt="" />
              <p className="wallet-1__img-descr">Описание что нужно сделать</p>
            </div>
          </div>
        </div>
        <button className="common-btn wallet__btn" onClick={() => setWalletState(2)}>
          Connect wallet
        </button>
      </div>
    );
  };
  const Wallet2 = () => {
    setTimeout(() => {
      setStatus("Success!");
      setLogStatus(true);
    }, 2000);
    return (
      <div className="wallet-2">
        <div className="wallet-2__img-wr">
          <img src={require("./assets/img/modals/fox.png")} alt="fox" className="wallet-2__img" />
        </div>
        <p className="wallet-2_text">{status}</p>
      </div>
    );
  };
  const Wallet = () => {
    if (walletState === 1) {
      return Wallet1();
    } else {
      return Wallet2();
    }
  };

  return (
    <div id="app">
      <BrowserRouter>
        <ModalsTemplate visible={modal} setVisible={setModal} titleBlock={<p className="modal__title modal__wallet-title">Connecting wallet</p>} className={"modal__wallet"}>
          {Wallet()}
        </ModalsTemplate>
        <Header callback={setModal} logedIn={logedIn}></Header>
        <Routes>
          <Route index element={<Main></Main>}></Route>
          <Route path="artwork" element={<ArtworkPage></ArtworkPage>}></Route>
          <Route path="creator" element={<CreatorPage></CreatorPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
