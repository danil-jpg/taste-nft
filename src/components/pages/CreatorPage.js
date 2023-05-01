import React, { useState } from "react";
import Modals from "../UI/Modals";

const CreatorPage = () => {
  const [modal, setModal] = useState(true);
  const placeBid = () => {
    return (
      <div className="bid">
        <p className="bid__min-sum">Min.sum</p>
        <div className="bid__input-wr">
          <input type="text" className="bid__input" />
          <p className="bid__input-price">(1308.54$)</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setModal(true)}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolore, fugit non illo cupiditate eum quod, dolor, labore cum rerum itaque ullam quibusdam porro totam molestias veritatis architecto esse velit.</button>
      <Modals titleBlock={<p className="modal__title">Place a bid</p>} visible={modal} setVisible={setModal} className={"modal_1"}>
        {placeBid()}
      </Modals>
    </div>
  );
};

export default CreatorPage;
