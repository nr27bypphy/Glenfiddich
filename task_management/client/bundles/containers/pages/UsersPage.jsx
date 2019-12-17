import React from "react";
import { Header } from "../../components/organisms/Header";
import { MemberListHeader } from "../../components/molecules/MemberListHeader";
import { MemberList } from "../../components/organisms/MemberList";
import styled from "styled-components";

const UsersPage = props => {
  return (
    <>
      <Header />
      <MemberListHeader />
      <MemberList currentUser={props.currentUser} users={props.users} />
    </>
  );
};

export default props => <UsersPage {...props} />;
