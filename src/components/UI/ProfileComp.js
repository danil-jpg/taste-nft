import React from "react";

const ProfileComp = () => {
  return (
    <div className="header__user-avatar-wr">
      <img className="header__user-_avatar" src={require("../../assets/img/avatar.png")} alt="img" />
      <div className="header__user-info-wr">
        <p className="header__user-info_name">User Name</p>
        <p className="header__user-info_sub_name">@username</p>
      </div>
    </div>
  );
};

export default ProfileComp;
