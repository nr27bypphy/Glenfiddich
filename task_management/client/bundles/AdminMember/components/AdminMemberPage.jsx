import React, { Fragment } from "react";

import { MemberTableTr } from "./MemberTableTr";
import { MemberTableThread } from "./MemberTableThread";

const AdminMemberPage = props => {
  return (
    <>
      <div className="AdminMemberHeader">
        <div className="Title">Glenfiddich</div>
        <div className="SettingButton"></div>
        <div className="MypageButton"></div>
      </div>
      <div className="ManageContent">
        <div className="ContentTitle">Manage Member</div>
        <div className="InviteButton">Invite People</div>
        <div className="SearchMemberContent"></div>
      </div>
      <table className="AdminMemberTable">
        <tbody>
          <MemberTableThread />
          <MemberTableTr />
        </tbody>
      </table>
    </>
  );
};

export default props => <AdminMemberPage {...props} />;
