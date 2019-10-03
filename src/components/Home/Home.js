import React from "react";
import UserInfoClass from "../UserInfoClass/UserInfoClass";
import UserInfoFunctional from "../UserInfoFunctional/UserInfoFunctional";
import UserInfoClassSingleContext from "../UserInfoClassSingleContext/UserInfoClassSingleContext";

const Home = () => {
  return (
    <div>
      <UserInfoClass />
      <UserInfoFunctional />
      {/* <UserInfoClassSingleContext /> */}
    </div>
  );
};

export default Home;
