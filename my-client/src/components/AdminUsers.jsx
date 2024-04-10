import React, { useEffect, useState } from "react";
import { useAuth } from "../mystore/auth";
import { Link } from "react-router-dom";

function AdminUsers() {


const BACKURL = "https://disney-plus-clone-back.vercel.app";

const LOCALURL = "http://localhost:5000";


  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${BACKURL | LOCALURL}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users: ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const deleteUser =async (id) => {
    console.log(id);
    try {
      const res = await fetch(
        `${BACKURL | LOCALURL}/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      ); 
      const data = await res.json();
      console.log(`users deleted : ${data} `);
      if(res.ok){
         getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="h-screen p-4 bg-gradient-to-r from-teal-900 to-emerald-600">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Admin User Data</h1>
        </div>
        <div className="bg-emerald-500 rounded-lg shadow-md p-4">
          <table className="w-full ">
            <thead>
              <tr className="border-b-2 border-emerald-400">
                <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">
                  Phone
                </th>
                <th className="px-6 py-3 text-center text-lg font-semibold text-gray-800">
                  Update
                </th>
                <th className="px-6 py-3 text-center text-lg font-semibold text-gray-800">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index} className="border-b border-emerald-400">
                    <td className="px-6 py-4 text-lg text-gray-800">
                      {curUser.email}
                    </td>
                    <td className="px-6 py-4 text-lg text-gray-800">
                      {curUser.phone}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link to={`/admin/users/${curUser._id}/edit`}>
                        <button className="text-blue-600 hover:underline">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteUser(curUser._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminUsers;
