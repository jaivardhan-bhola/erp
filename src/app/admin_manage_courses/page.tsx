// pages/manage_courses.js
"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar Admin/Navbar Admin";
import CourseCard from "@/components/CourseCard";
import CourseDetails from "@/components/CourseDetails";

const ManageCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { code: "MAL106", name: "Probability and Statistics", faculty: "Dr. Nishant Namdev", credits: 4, classroom: "Room No. 301", startDate: "5th January 2024", endDate: "15th May 2024", createdDate: "2nd January 2024", lab: false },
    { code: "ILA107", name: "Intro to Linear Algebra", faculty: "Dr. Kamaljeet", credits: 4, classroom: "Room No. 302", startDate: "5th January 2024", endDate: "15th May 2024", createdDate: "2nd January 2024", lab: true },
    { code: "MAL106", name: "Probability and Statistics", faculty: "Dr. Nishant Namdev", credits: 4, classroom: "Room No. 301", startDate: "5th January 2024", endDate: "15th May 2024", createdDate: "2nd January 2024", lab: false },
    { code: "ILA107", name: "Intro to Linear Algebra", faculty: "Dr. Kamaljeet", credits: 4, classroom: "Room No. 302", startDate: "5th January 2024", endDate: "15th May 2024", createdDate: "2nd January 2024", lab: true },
    { code: "MAL106", name: "Probability and Statistics", faculty: "Dr. Nishant Namdev", credits: 4, classroom: "Room No. 301", startDate: "5th January 2024", endDate: "15th May 2024", createdDate: "2nd January 2024", lab: false },
    { code: "ILA107", name: "Intro to Linear Algebra", faculty: "Dr. Kamaljeet", credits: 4, classroom: "Room No. 302", startDate: "5th January 2024", endDate: "15th May 2024", createdDate: "2nd January 2024", lab: true },
    // Add more courses as needed
  ];

  return (
    <div className="bg-gray-100 flex">
      <div className="bg-red flex flex-row w-full">
        <Navbar />
        <div className="flex flex-col w-4/5 pt-8 h-80%">
          <div className="flex flex-row">
            <div className="bg-gray-300 flex flex-col w-[445px] h-[665px] pl-8 py-4 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
              <div className="flex flex-row mb-4 w-auto mr-9 outline-black">
                <input type="text" placeholder="Search for a Course" className="flex-1 p-2 rounded-xl border" />
              </div>
              <div className="flex-1 items-center w-auto h-[400px] overflow-auto">
                {courses.map((course, index) => (
                  <CourseCard key={index} course={course} onClick={() => setSelectedCourse(course)} />
                ))}
              </div>
            </div>
            <div className="flex-1 pl-4">
              <CourseDetails course={selectedCourse} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
