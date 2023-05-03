import { useState } from "react";
import "./assets/styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Header from "./components/Header";
import ArtworkPage from "./components/pages/ArtworkPage";
import CreatorPage from "./components/pages/CreatorPage";
import ModalsTemplate from "./components/UI/modals/ModalsTemplate";
import { IconRenderer } from "./components/utils/IconRenderer";

function App() {
  const [modal, setModal] = useState(false);
  const [walletState, setWalletState] = useState(1);
  const [logedIn, setLogStatus] = useState(false);
  const [artwork, setArtwork] = useState(true);
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

  const Step1 = () => {
    return (
      <div className="step1">
        <p className="step__title">Upload the artwork you will be selling</p>
        <div className="step__drop"></div>
        <button className="common-btn step__btn">Next step</button>
      </div>
    );
  };

  const Step2 = () => {
    return (
      <div className="step2">
        <p className="step__title">
          Censor the public version of artwork, if it contains 18+ content
        </p>
        <div className="step__edit">
          <img src={require("./assets/img/modals/Rectangle 39322.png")} alt="img" />
        </div>
        <div className="step__filters">
          <IconRenderer id={"picture"} className={"picture"}></IconRenderer>
          <IconRenderer id={"del"} className={"del"}></IconRenderer>
          <IconRenderer id={"drop"} className={"drop"}></IconRenderer>
        </div>
        <button className="common-btn step__btn">Next step</button>
      </div>
    );
  };

  return (
    <div id="app">
      <BrowserRouter>
        <ModalsTemplate
          visible={modal}
          setVisible={setModal}
          titleBlock={<p className="modal__title modal__wallet-title">Connecting wallet</p>}
          className={"modal__wallet"}>
          {Wallet()}
        </ModalsTemplate>
        <ModalsTemplate
          className={"addArt"}
          titleBlock={<p className="addArt__title">Creating artwork</p>}
          visible={artwork}
          setVisible={setArtwork}>
          <div className="art__head">
            <div className="arts__progress">
              <div className="art__progress"></div>
              <div className="art__progress"></div>
              <div className="art__progress"></div>
            </div>

            <p className="art__progress_text">Step {1} from 3</p>
          </div>

          <div className="art__body">
            <Step2></Step2>
          </div>
        </ModalsTemplate>
        <Header callback={setModal} logedIn={logedIn} setArt={setArtwork}></Header>
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
