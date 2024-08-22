"use client";
import React, { useState } from 'react';
import SemesterCard from '@/components/SemesterCard';
import SemesterDetails from '@/components/SemesterDetails';
import Navbar from "@/components/Navbar Admin/Navbar Admin";

const semestersData = [
  {
    id: 1,
    name: '2nd Semester CSD 2024',
    semester: '2nd',
    branch: 'CSD',
    facultyAdvisor: 'Dr. Santosh K. Sahu',
    courses: 6,
    credits: 21,
    classroom: 'Room No. 301',
    startDate: '5th January 2024',
    endDate: '15th May 2024',
    createdDate: '2nd January 2024',
    labAvailability: 'NA'
  },
  {
    id: 1,
    name: '2nd Semester CSD 2024',
    semester: '2nd',
    branch: 'CSD',
    facultyAdvisor: 'Dr. Santosh K. Sahu',
    courses: 6,
    credits: 21,
    classroom: 'Room No. 301',
    startDate: '5th January 2024',
    endDate: '15th May 2024',
    createdDate: '2nd January 2024',
    labAvailability: 'NA'
  },
  {
    id: 1,
    name: '2nd Semester CSD 2024',
    semester: '2nd',
    branch: 'CSD',
    facultyAdvisor: 'Dr. Santosh K. Sahu',
    courses: 6,
    credits: 21,
    classroom: 'Room No. 301',
    startDate: '5th January 2024',
    endDate: '15th May 2024',
    createdDate: '2nd January 2024',
    labAvailability: 'NA'
  },
  {
    id: 1,
    name: '2nd Semester CSD 2024',
    semester: '2nd',
    branch: 'CSD',
    facultyAdvisor: 'Dr. Santosh K. Sahu',
    courses: 6,
    credits: 21,
    classroom: 'Room No. 301',
    startDate: '5th January 2024',
    endDate: '15th May 2024',
    createdDate: '2nd January 2024',
    labAvailability: 'NA'
  },
  {
    id: 1,
    name: '2nd Semester CSD 2024',
    semester: '2nd',
    branch: 'CSD',
    facultyAdvisor: 'Dr. Santosh K. Sahu',
    courses: 6,
    credits: 21,
    classroom: 'Room No. 301',
    startDate: '5th January 2024',
    endDate: '15th May 2024',
    createdDate: '2nd January 2024',
    labAvailability: 'NA'
  },
  {
    id: 1,
    name: '2nd Semester CSD 2024',
    semester: '2nd',
    branch: 'CSD',
    facultyAdvisor: 'Dr. Santosh K. Sahu',
    courses: 6,
    credits: 21,
    classroom: 'Room No. 301',
    startDate: '5th January 2024',
    endDate: '15th May 2024',
    createdDate: '2nd January 2024',
    labAvailability: 'NA'
  },
  // Add more semester data as needed
];

const ManageSemester = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);

  return (
    <div className="flex">
      <Navbar Admin/>

      <div className="flex flex-col w-4/5 pt-8 h-80%">

        <div className="flex flex-row">

            <div className="bg-gray-300 flex flex-col w-[445px] h-[665px] pl-8 py-4 rounded-xl ">
                <h2 className="text-2xl font-bold mb-4">Manage Semesters</h2>

                <div className="flex flex-row mb-4 w-auto mr-9 outline-black">
                  <input type="text" placeholder="Search for Faculty Name" className="flex-1 p-2 rounded-xl border " />
                </div>

                <div className="flex-1 items-center w-auto h-[400px] overflow-auto">
                      {semestersData.map(semester => (
                       <SemesterCard key={semester.id} semester={semester} onSelect={setSelectedSemester} />
                      ))}
                </div>
                
            </div>

        <div className="flex-1 pl-4 w-full h-[665px]">
          {selectedSemester ? 
          (
            <>
              <SemesterDetails semester={selectedSemester} />
            </>
          ) : (
            <p>Please select a semester to see details.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ManageSemester;
