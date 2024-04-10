import React, { useEffect, useState } from "react";
import { useAuth } from "../mystore/auth";

function AdminContacts() {
  const BACKURL = "https://disney-plus-clone-back.vercel.app";

  const LOCALURL = "http://localhost:5000";

  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${BACKURL | LOCALURL}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data :", data);
      if (response.ok) {
        console.log(response);
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContactsData();
  }, []);
  // console.log("contacts",contactData);

  const deleteContact = async (id, msg) => {
    try {
      const response = await fetch(
        `${BACKURL | LOCALURL}/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: msg }),
        }
      );
      const data = await response.json();
      console.log("deleted contact", data);
      if (response.ok) {
        console.log(response);

        getContactsData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="h-screen p-4 bg-gradient-to-r from-teal-900 to-emerald-600">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-indigo-700">Contacts Data</h1>
        </div>
        <div className="overflow-x-auto bg-emerald-500 rounded-lg shadow-md p-4">
          <table className="w-full shadow-md rounded-lg">
            <thead>
              <tr className="bg-indigo-700 text-white text-left">
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact, index) => {
                return (
                  <tr key={index} className="border-b border-emerald-400">
                    <td className="px-6 py-4">{contact.email}</td>
                    <td className="px-6 py-4">{contact.message}</td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() =>
                          deleteContact(contact._id, contact.message)
                        }
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

export default AdminContacts;
