import React from "react";

import UserPost from "./UserPosts";

const UserProfile = ({ user, posts }) => {
  return (
    <div>
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
      <UserPost posts={posts} />
    </div>
  );
};

export default UserProfile;
