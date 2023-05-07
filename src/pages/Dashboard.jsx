import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../helpers/http";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await http().get("/admin/users");
    setUsers(response.data.results);
  };

  const deleteUser = async (id) => {
    try {
      await http().delete(`/admin/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1 className="text-4xl font-semibold text-green-700 text-center mb-10">
        List Data
      </h1>
      <div className="px-36 pb-10 flex flex-wrap justify-between">
        <Link
          to={"/add-data"}
          className="bg-green-500 p-1 rounded-md text-white items-center flex font-bold"
        >
          Tambah Data
        </Link>
        <select
          name="1"
          id="1"
          className="p-3 rounded-lg bg-pink-300 cursor-pointer"
        >
          <option value="0">Limit Data</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="container mx-auto px-16 flex flex-wrap justify-center gap-7">
        {users.map((user) => (
          <div className="rounded-lg shadow-md p-5 w-56" key={user.id}>
            <h2 className="mb-10">{user.email}</h2>
            <span>{user.username}</span>
            <br />
            <span className="text-xs font-thin">{user.password}</span>
            <div className="flex justify-between text-white font-semibold mt-2">
              <Link
                to={`/edit-data/${user.id}`}
                className="bg-green-600 p-1 rounded-md hover:opacity-50"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-600 p-1 rounded-md hover:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="px-36 pb-10 flex flex-wrap justify-between pt-24">
        <div className="flex flex-wrap gap-1">
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-56 border border-pink-400 rounded-lg focus:outline-none"
          />
          <button className="p-2 rounded-lg bg-pink-400 text-white font-bold">
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-5 items-center">
          <button className="p-2 rounded-lg bg-green-400 text-white font-bold">
            prev
          </button>
          <span className="font-bold">1</span>
          <button className="p-2 rounded-lg bg-green-400 text-white font-bold">
            next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
