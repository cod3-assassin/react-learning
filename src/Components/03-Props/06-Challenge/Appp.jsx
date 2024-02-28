import React from "react";
import UserProfile from "./UserProfile";

const Appp = () => {
  const user = { username: "Skipper", email: "Skipper123@gmail.com" };

  const posts = [
    { title: "Post 1", content: "This is the content of Post 1" },
    { title: "Post 2", content: "This is the content of Post 2" },
    { title: "Post 3", content: "This is the content of Post 2" },
  ];

  return <UserProfile user={user} posts={posts} />;
};
export default Appp;
