import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const UpdateContact = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    actions.fetchOneContact(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name,
      email,
      phone,
      address,
    };
    actions.updateContact(id, contact);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");

    navigate("/");
  };
 
  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">
          Update contact {currentContact.full_name}
        </h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={currentContact.full_name}
              onChange={(e) =>
                setCurrentContact({
                  ...currentContact,
                  full_name: e.target.value,
                })
              }
              className="form-control"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={currentContact.email}
              onChange={(e) =>
                setCurrentContact({ ...currentContact, email: e.target.value })
              }
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              value={currentContact.phone}
              onChange={(e) =>
                setCurrentContact({ ...currentContact, phone: e.target.value })
              }
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={currentContact.address}
              onChange={(e) =>
                setCurrentContact({
                  ...currentContact,
                  address: e.target.value,
                })
              }
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary form-control"
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
