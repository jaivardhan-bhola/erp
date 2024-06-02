"use client";
import React, { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [CourseCode, setCourseCode] = useState("");
const [professor, setProfessor] = useState("");
const handleAssign = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(CourseCode, professor);
};
const handleCourseCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourseCode(e.target.value);
}
    const handleProfessor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfessor(e.target.value);
    }

  return (
    <>
      <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
      <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
        <a href="/dashboardfa">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
        </div>
        </a>
        <a href="/co">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/fa.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Course Occurence</span>
        </div>
        </a>
        <a href="/gradesfa">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/faculty.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Grades</span>
        </div>
        </a>
        <a href="/ff">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('../assets/student.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Failed Students</span>
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
            <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">Add new Course</span>
          </a>
        </div>
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Course Code</label>
            <input
              type="text"
              className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
              id="courseCode"
              name="courseCode"
              placeholder="Enter Course Code"
              autoFocus
              onChange={handleCourseCode}
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700" htmlFor="password">Professor</label>
            </div>
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="professor"
                id="professor"
                className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow"
                name="professor"
                placeholder="Professor"
                onChange={handleProfessor}
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