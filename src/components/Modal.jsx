import React, { useState } from "react";
import "./modal.styles.css";

const Modal = ({ isOpen, setIsOpen, setFilteredUsers, filteredUsers }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError] = useState('')
  
  const handleClick = () => {
    if (name !== "" && email !== "" && phone !== "") {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          userId: Math.random().toString(36).substring(2, 7),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setFilteredUsers([...filteredUsers,json])
          setIsOpen(false)
          alert('User added successfully')
        });
    }
    else{
      setError("Please fill the empty field.")
    }
  };
  return (
    <div className="modal-container">
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>Add New User</h2>
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </header>
            <div className="modal_content">
              <div className="modal_item">
                <label
                  htmlFor="name"
                  value="name"
                  style={{ marginRight: "10px" }}
                >
                  {" "}
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="modal_item">
                <label
                  htmlFor="email"
                  value="email"
                  style={{ marginRight: "10px" }}
                >
                  {" "}
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div className="modal_item">
                <label
                  htmlFor="phone"
                  value="phone"
                  style={{ marginRight: "10px" }}
                >
                  {" "}
                  Phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                ></input>
              </div>
              {error !== '' && <h4>{error}</h4>}
              <button
                onClick={handleClick}
                style={{
                  width: "130px",
                  alignSelf: "center",
                  marginTop: "20px",
                }}
              >
                Add user
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
