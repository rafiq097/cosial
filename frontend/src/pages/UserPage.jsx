import React from "react";
import UserHeader from "../components/UserHeader.jsx";
import UserPost from "../components/UserPost.jsx";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost postImg={"./post1.png"} postTitle={"HelloBro"} likes={123} replies={45}/>
      <UserPost postImg={"./post2.png"} postTitle={"WhoKnows"} likes={3} replies={0}/>
    </>
  );
};

export default UserPage;
