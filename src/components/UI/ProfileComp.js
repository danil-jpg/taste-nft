import React from "react";

const ProfileComp = () => {
  return (
    <div className="profile__user-avatar-wr">
      <img className="profile__user-_avatar" src={require("../../assets/img/avatar-big.png")} alt="img" />
      <div className=" profile__user-info-wr">
        <p className="profile__user-info_name">User Name</p>
        <p className="profile__user-info_sub_name">@username</p>
      </div>
    </div>
  );
};

export default ProfileComp;
