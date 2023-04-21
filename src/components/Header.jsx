import React, {useState} from "react";
import SearchBox from "./SearchBox";
import Modal from "./Modal";
const Header = ({ setSearchQuery , setFilteredUsers, filteredUsers}) => {
//   function handleFunction() {
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       body: JSON.stringify({
//         name: "atharva",
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         setUsers([...filteredUsers, json]);
//         console.log(users);
//       });
//   }

const [isOpen,setIsOpen] = useState(false)



  return (
    <React.Fragment>
      <SearchBox setSearchQuery={setSearchQuery} />
      <button onClick = {() => setIsOpen(true)}>Add User</button>
     { isOpen && <Modal isOpen={isOpen} setIsOpen = {setIsOpen} setFilteredUsers = {setFilteredUsers} filteredUsers = {filteredUsers}/>}
    </React.Fragment>
  );
};

export default Header;
