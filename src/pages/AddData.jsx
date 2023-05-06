import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../helpers/http";

const AddData = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await http().post(
        "/admin/users",
        {
          email,
          username,
          password,
        },
        {
          headers: { "content-type": "application/x-www-form-urlencoded" },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <h1 className="text-center font-bold mb-10">Add Data</h1>
      <div className="container mx-auto px-32 flex flex-wrap justify-center">
        <div className="w-full md:w-96 p-2 rounded-lg shadow-md">
          <form onSubmit={saveUser}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Input email"
                className="p-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Input username"
                className="p-3 w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Input password"
                className="p-3 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 rounded-lg p-3 text-white font-bold hover:opacity-70"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddData;
