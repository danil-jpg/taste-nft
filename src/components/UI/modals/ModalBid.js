import React, { useState } from "react";
import ModalsTemplate from "./ModalsTemplate";

const ModalBid = ({ modal, setModal }) => {
  const [input, setInput] = useState("");

  const placeBid = () => {
    return (
      <div className="bid">
        <p className="bid__min-sum">Min.sum</p>
        <div className="bid__input-wr">
          <div className="bid__center-wr">
            <div className="bid__input-container">
              <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="bid__input" placeholder="10000000" />
            </div>
            <p className="bid__input-price">({input * 2}$)</p>
          </div>
        </div>
        <button className="common-btn bid__btn">Place</button>
      </div>
    );
  };
  return (
    <ModalsTemplate titleBlock={<p className="modal__title modal__bid-title">Place a bid</p>} visible={modal} setVisible={setModal} className={"modal__bid"}>
      {placeBid()}
    </ModalsTemplate>
  );
};

export default ModalBid;
