"use client";
import React from "react";
import { MultiSelect } from "react-multi-select-component";
import CreateModal from "../createModal";
import Image from "next/image";


const CourseCard = ({  id, title, subject, type, scheme, grades }) => (

  <div className="flex items-center justify-between bg-white shadow-md rounded-[15px] w-full h-[128px] px-8 my-4">
    <div>
      <div className="text-black font-bold text-2xl mb-8">
        <button onClick={() => window.location.href='/faculty_coursedashboard'} >
            {title}
        </button>
      </div>

        <div className="flex flex-row">

            <div className="text-black font-medium text-lg px-16">
                Subject: {subject}
            </div>
            
            <div className="text-black font-medium text-lg px-16">
                Type: {type}
            </div>
            <div className="text-black font-medium text-lg px-16">
                Evaluation Scheme: {scheme}
            </div>
            
            <div className="text-black font-medium text-lg px-16">
                Grades: {grades}
            </div>
            
        </div>
        
  </div>
  </div>

);

const FacultyHomeScreen = () => {
  const courses = [
    {
        id: 1,
        title: "CSE 2024 - SEM 2 - 2024 (Strength: 65)",
        subject: "MAL 103",
        type: "Theory",
        scheme: "Decided",
        grades: "Unlocked"
    },
    {
        id: 2,
        title: "CSD 2024 - SEM 2 - 2024 (Strength: 61)",
        subject: "MAL 103",
        type: "Theory",
        scheme: "Decided",
        grades: "Unlocked"
      },
    {
        id: 2,
        title: "CSD 2024 - SEM 2 - 2024 (Strength: 61)",
        subject: "MAL 103",
        type: "Theory",
        scheme: "Decided",
        grades: "Unlocked"
      },
      {
        id: 2,
        title: "CSD 2024 - SEM 2 - 2024 (Strength: 61)",
        subject: "MAL 103",
        type: "Theory",
        scheme: "Decided",
        grades: "Unlocked"
      },
      
      
      
    // Add more courses as needed
  ];

  return (
    <div className="bg-[#e6e6e6] h-auto flex">

      <div className="bg-black text-white w-[25%] h-relative min-h-screen flex flex-col items-center pt-4 m-8 rounded-[15px]">
        
                <div className="flex flex-col items-center mb-8">
                    <div className="text-lg font-semibold">Dr. Nishant Namdev</div>
                    <div className="text-sm text-gray-400">Adjacent Faculty</div>
                </div>
                
        <div className="mb-8">
          <Image src={require("./iiitn.png")} className="object-contain w-20 h-20" alt={"Student"}/>
        </div>

        <div className="flex flex-col items-center mb-8 text-left">
            <div className="mb-8 hover:bg-gray-800">
                <div className="text-left">All Courses</div>
            </div>
            <div className="mb-8 hover:bg-gray-800">
                <div className="text-left">Course Dashboard</div>
            </div>
            <div className="mb-8 hover:bg-gray-800">
                <div className="text-left">Cut-Off</div>
            </div>
            <div className="mb-8 hover:bg-gray-800">
                <div className="text-left">Mark Evaluation</div>
            </div>
        </div>

        <div className="mt-auto mb-8">
          <div className="bg-white text-black rounded-full w-32 h-12 flex items-center justify-center">
            Logout
          </div>
        </div>
        <div className="text-center text-sm mb-auto">&copy; 2024 IIITN ERP</div>
      </div>
      
      <div className="flex flex-col items-center w-full p-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default FacultyHomeScreen;
