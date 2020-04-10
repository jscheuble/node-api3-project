import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const match = useRouteMatch();

  console.log(match);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/api/users/${match.params.id}/posts`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((e) => {
        return (
          <div key={e.id}>
            <p>{e.text}</p>
            <p>by {e.postedBy}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
