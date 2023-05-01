import React from "react";
import { IconRenderer as Icon } from "../../utils/IconRenderer";

const ModalsTemplate = ({ children, titleBlock, className, visible, setVisible }) => {
  const cssStyles = ["subStrate"];

  if (visible === true) {
    cssStyles.push("active");
  }

  return (
    <div className={cssStyles.join(" ")} onClick={() => setVisible(false)}>
      <div className={`${className} modal`} onClick={(e) => e.stopPropagation()}>
        <div className="cross-wr">
          {titleBlock}
          <Icon id="cross" className="cross" onClick={(e) => setVisible(false)}></Icon>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalsTemplate;
