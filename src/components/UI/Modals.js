import React from "react";
import { IconRenderer as Icon } from "../utils/IconRenderer";

const Modals = ({ children, titleBlock, className, visible, setVisible }) => {
  const cssStyles = [className, "subStrate"];

  if (visible === true) {
    cssStyles.push("active");
  }

  return (
    <div className={cssStyles.join(" ")} onClick={() => setVisible(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="cross-wr">
          {titleBlock}
          <Icon id="cross" className="cross" onClick={(e) => setVisible(false)}></Icon>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modals;
