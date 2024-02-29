import React from "react";

const UserPost = ({ posts }) => {
  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.title}
            <ul>
              <li>{post.content}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPost;
