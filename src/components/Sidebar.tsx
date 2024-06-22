// components/Sidebar.js
"use client";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#2b2541] h-screen w-1/5 p-4 text-white">
      <div className="text-center my-8">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-4" />
        <div className="text-xl font-bold">Mr. Sameer</div>
        <div className="text-sm">Admin</div>
      </div>
      <nav className="space-y-4">
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Manage Semester</a>
        <a href="#" className="block py-2 px-4 bg-gray-800 rounded">Manage Faculty</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Manage Courses</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a>
      </nav>
      <button className="mt-auto block py-2 px-4 bg-red-600 rounded text-center">Logout</button>
    </div>
  );
};

export default Sidebar;
