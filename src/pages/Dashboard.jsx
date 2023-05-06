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
      <h1 className="text-xl font-semibold text-center mb-10">List Data</h1>
      <div className="ps-36 pb-10">
        <Link
          to={"/add-data"}
          className="bg-green-500 p-1 rounded-md text-white"
        >
          Tambah Data
        </Link>
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
    </section>
  );
};

export default Dashboard;
