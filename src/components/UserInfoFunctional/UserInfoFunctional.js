import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import ItemsContext from "../../contexts/ItemsContext";

const UserInfoFunctional = () => {
  const { user, setUser } = useContext(AuthContext);
  const { items } = useContext(ItemsContext);
  const newUser = { user: { name: "Svenja", email: "svenja@ironhack.com" } };
  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
      <h1>Functional Component</h1>
      <h2>{user.name}</h2>
      {items.map(item => (
        <p key={item}>{item}</p>
      ))}
      <button onClick={() => setUser(newUser)}>update</button>
    </div>
  );
};

export default UserInfoFunctional;
