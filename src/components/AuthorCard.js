import React from "react";
import { IconRenderer as Icon } from "./utils/IconRenderer";
import Timer from "./Timer";

const AuthorCard = (props) => {
  const [authorized, setAuthorized] = React.useState(true);

  const [modMenu, setModMenu] = React.useState(false);

  return (
    <div className="card">
      <div className="card__img-wr">
        <img className="card__img" src={props.obj.titleImg} alt="card" />
      </div>
      <div className="card__descr-wr">
        <p className="card__title">{props.obj.title}</p>
        <div className="card__sub-descr-wr">
          <div className="card__sub-descr-top">
            <p className="card__sub-descr_text">Sold for:</p>
            <div className="card__sub-descr-num-wr">
              <Icon className="tongue card__tongue" id="tongue"></Icon>
              <p className="card__sub-descr_num">{props.obj.price}</p>
            </div>
          </div>
          <div className="card__sub-descr-bottom">
            <p className="card__sub-descr-bottom_text card__sub-descr_text">Ending in:</p>
            <Timer date={props.obj.date}></Timer>
          </div>
        </div>
      </div>
      <div
        className={authorized ? "card__author-wr card__author-wr-authorized" : "card__author-wr"}>
        {authorized ? (
          <p className="card__status-text">Approved</p>
        ) : (
          <>
            <img className="card__author-img" src={props.obj.authorImg} alt="avatar" />
            <div className="card__author-texts-wr">
              <p className="card__author-text">{props.obj.authorName}</p>
              <p className="card__author-descr rainbow-text">{props.obj.authorNick}</p>
            </div>
          </>
        )}
      </div>
      {authorized ? (
        <div className="card__mod-menu-wr">
          <div
            className={
              modMenu
                ? "card__mode-menu_item card__mode-menu_item_main card__mode-menu_item_main_active"
                : "card__mode-menu_item card__mode-menu_item_main"
            }
            onClick={() => setModMenu(!modMenu)}>
            <Icon className="showMoreMenu" id="showMoreMenu"></Icon>
          </div>
          {modMenu ? (
            <>
              <div className="card__mode-menu_item" onClick={() => props.setEditTime(true)}>
                <Icon className="clock" id="clock"></Icon>
              </div>
              <div className="card__mode-menu_item">
                <Icon className="edit" id="edit"></Icon>
              </div>
              <div className="card__mode-menu_item">
                <Icon className="delete" id="delete"></Icon>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AuthorCard;
