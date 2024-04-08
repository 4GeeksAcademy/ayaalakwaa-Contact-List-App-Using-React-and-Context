import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      address,
    };
    actions.addContact(newContact);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");

    navigate("/");
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-6">Add a new contact</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              onChange={(e) => setFullname(e.target.value)}
              className="form-control"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary form-control mt-3"
          >
            save
          </button>
          <Link className="mt-3 w-100 text-center" to="/">
            or get back to contacts
          </Link>
        </form>
      </div>
    </div>
  );
};
