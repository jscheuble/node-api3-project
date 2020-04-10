import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [updating, setUpdating] = useState(false);

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updating]);

  const routeToPosts = (id) => {
    history.push(`/${id}/posts`);
  };

  return (
    <div>
      {users.map((e) => {
        return (
          <div key={e.id}>
            <p>{e.name}</p>
            <button onClick={() => routeToPosts(e.id)}>posts</button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
