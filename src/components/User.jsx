import { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(() =>
      users.filter((item) =>
        searchQuery === ""
          ? item
          : item.name
              .toLocaleLowerCase()
              .includes(searchQuery.toLocaleLowerCase()) ||
            item.email
              .toLocaleLowerCase()
              .includes(searchQuery.toLocaleLowerCase())
      )
    );
  }, [searchQuery]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setFilteredUsers(json);
      });
    console.log(users);
  }, []);

  return (
    <>
      <Header
        setSearchQuery={setSearchQuery}
        setFilteredUsers={setFilteredUsers}
        filteredUsers={filteredUsers}
      />
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {filteredUsers?.map((item, index) => {
          return (
            <Card
              name={item.name}
              userId={item.id}
              email={item.email}
              phone={item.phone}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default UserList;
