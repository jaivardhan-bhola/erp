// pages/student.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface marks {
  id: number;
  name: string;
  section: string;
  sessional1:number;
  sessional2:number;
  endsem:number;
  ta:number;
  lab:number;
  total?:number;
}

const Marks: React.FC = () => {
  const initialData: marks[] = [
    {
      id: 1,
      name: "student1",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 2,
      name: "student2",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 3,
      name: "student3",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 4,
      name: "student4",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 5,
      name: "student5",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 6,
      name: "student6",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 7,
      name: "student7",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 8,
      name: "student8",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 9,
      name: "student9",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 10,
      name: "student10",
      section: "A",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 11,
      name: "student11",
      section: "B",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 12,
      name: "student12",
      section: "B",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 13,
      name: "student13",
      section: "B",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 14,
      name: "student14",
      section: "B",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
    {
      id: 15,
      name: "student15",
      section: "B",
      sessional1: 15,
      sessional2: 13,
      endsem: 55,
      ta: 5,
      lab: 23,
    },
  ];
  
  const [data, setData] = useState<marks[]>(initialData);
  const [editMode, setEditMode] = useState<number | null>(null);

  const handleInputChange = (id: number, field: string, value: string) => {
    // Parse the value to an integer, or fallback to 0 if empty or NaN
    const parsedValue = value.trim() !== '' ? parseInt(value) : 0;
    
    const updatedData = data.map((student) =>
      student.id === id ? { ...student, [field]: parsedValue } : student
    );
    setData(updatedData);
  };

  const handleSave = async (id: number) => {
    const studentToSave = data.find((student) => student.id === id);

    if (studentToSave) {
      try {
        const response = await fetch("/api/saveStudentData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentToSave),
        });

        if (response.ok) {
          // Handle success response
          console.log("Data saved successfully:", studentToSave);
        } else {
          // Handle error response
          console.error("Failed to save data");
        }
      } catch (error) {
        console.error("Error while saving data:", error);
      }
    }

    setEditMode(null); // Exit edit mode after saving
  };

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
        <a href="/marksfa">
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
        <div className="h-screen ml-4">
          <p className="text-3xl text-center font-bold mt-10 mb-5">Subject 1</p>
          <div className="overflow-y-auto h-5/6 mr-10 rounded-xl no-scrollbar">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-black sticky top-0">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Section
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Sessional 1
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Sessional 2
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    End Sem
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Teacher Assessment
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Lab
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pr-6"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {item.name}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {item.section}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.sessional1}
                          onChange={(e) =>
                            handleInputChange(item.id, "sessional1", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sessional1
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.sessional2}
                          onChange={(e) =>
                            handleInputChange(item.id, "sessional2", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sessional2
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.endsem}
                          onChange={(e) =>
                            handleInputChange(item.id, "endsem", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.endsem
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.ta}
                          onChange={(e) =>
                            handleInputChange(item.id, "ta", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.ta
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.lab}
                          onChange={(e) =>
                            handleInputChange(item.id, "lab", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.lab
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {(item.sessional1+item.sessional2+item.endsem+item.ta)*0.75+item.lab}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <button
                          onClick={() => handleSave(item.id)}
                          className="text-white bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => setEditMode(item.id)}
                          className="text-white bg-green-500 hover:bg-green-700 px-3 py-1 rounded-md"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marks;
