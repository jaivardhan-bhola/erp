"use client";
import React, { useState } from "react";
import Image from "next/image";

const Login = () => {
const [AA, setAA] = useState(0);
const [AB, setAB] = useState(0);
const [BB, setBB] = useState(0);
const [BC, setBC] = useState(0);
const [CC, setCC] = useState(0);
const [CD, setCD] = useState(0);
const [DD, setDD] = useState(0);
const [FF, setFF] = useState(0);

const handleAA = (e: React.ChangeEvent<HTMLInputElement>) => {
  setAA(Number(e.target.value));
}
const handleAB = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAB(Number(e.target.value));
}
const handleBB = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBB(Number(e.target.value));
}
const handleBC = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBC(Number(e.target.value));
}
const handleCC = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCC(Number(e.target.value));
}
const handleCD = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCD(Number(e.target.value));
}
const handleDD = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDD(Number(e.target.value));
}
const handleFF = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFF(Number(e.target.value));
}
const handleAssign = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(AA, AB, BB, BC, CC, CD, DD, FF);
}


  return (
    <>
      <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
      <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
        <a href="/dashboardfac">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
        </div>
        </a>
        <a href="/cg">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/fa.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Create Grade</span>
        </div>
        </a>
        <a href="/evalfac">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/faculty.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Evaulation</span>
        </div>
        </a>
        <a href="/marksfac">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/student.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Marks</span>
        </div>
        </a>
        <a href="/" className="mt-auto">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/logout.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Logout</span>
        </div>
        </a>
      </div>

      <div className="flex justify-center items-center">
    <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
      <div className="flex-auto p-6">
        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
          <a href="#" className="flex cursor-pointer items-center gap-2 text-black no-underline hover:text-black">
            <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">Assign Grade Brackets</span>
          </a>
        </div>
        <form className="mb-4">
          <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for AA</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="AA"
              name="AA"
              placeholder="Marks for AA"
              autoFocus
              onChange={handleAA}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for AB</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="AB"
              name="AB"
              placeholder="Marks for AB"
              onChange={handleAB}
            />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for BB</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="BB"
              name="BB"
              placeholder="Marks for BB"
              onChange={handleBB}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for BC</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="BC"
              name="BC"
              placeholder="Marks for BC"
              onChange={handleBC}
            />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for CC</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="CC"
              name="CC"
              placeholder="Marks for CC"
              onChange={handleCC}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for CD</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="CD"
              name="CD"
              placeholder="Marks for CD"
              onChange={handleCD}
            />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for DD</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="DD"
              name="DD"
              placeholder="Marks for DD"
              onChange={handleDD}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Marks for FF</label>
            <input
              type="number"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="FF"
              name="FF"
              placeholder="Marks for FF"
              onChange={handleFF}
            />
          </div>
          </div>
          <div className="mb-4">
            <button
              className="grid w-full cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
              type="submit" onClick={handleAssign}
            >
              Assign
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default Login;