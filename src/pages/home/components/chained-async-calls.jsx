import React, { useEffect, useState } from "react";

const ChainedFetchExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userResponse = await fetch("https://api.example.com/user");
      const user = await userResponse.json();

      const postsResponse = await fetch(
        `https://api.example.com/posts?userId=${user.id}`
      );
      const posts = await postsResponse.json();

      setData({ user, posts });
    };

    fetchUserData();
  }, []); // Runs only once

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.user.name}'s Posts</h2>
          <ul>
            {data.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ChainedFetchExample;
