"use client";

import React, { useState } from "react";

interface Account {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  email: string;
  password: string;
}

const initialAccounts: Account[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    address: "123 Main St",
    email: "john@example.com",
    password: "********",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    gender: "Female",
    address: "456 Side St",
    email: "jane@example.com",
    password: "********",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    gender: "Female",
    address: "789 Front Ave",
    email: "alice@example.com",
    password: "********",
  },
];

const Accounts = () => {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);

  const handleEdit = (id: number) => {
    alert(`Edit account with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setAccounts(accounts.filter((account) => account.id !== id));
    alert(`Deleted account with ID: ${id}`);
  };

  return (
    <>
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Accounts</h1>
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-700 text-white rounded-md">
            <thead>
              <tr className="bg-gray-900 text-left text-sm font-semibold">
                <th className="py-3 px-4">First Name</th>
                <th className="py-3 px-4">Last Name</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4">Address</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Password</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr
                  key={account.id}
                  className="hover:bg-gray-800 border-b border-gray-600"
                >
                  <td className="py-2 px-4">{account.firstName}</td>
                  <td className="py-2 px-4">{account.lastName}</td>
                  <td className="py-2 px-4">{account.gender}</td>
                  <td className="py-2 px-4">{account.address}</td>
                  <td className="py-2 px-4">{account.email}</td>
                  <td className="py-2 px-4">{account.password}</td>
                  <td className="py-2 px-4 flex justify-center gap-4">
                    <button
                      onClick={() => handleEdit(account.id)}
                      className="text-blue-400 hover:text-blue-500"
                    >
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(account.id)}
                      className="text-red-400 hover:text-red-500"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
            SAVE
          </button>
          <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

export default Accounts;
