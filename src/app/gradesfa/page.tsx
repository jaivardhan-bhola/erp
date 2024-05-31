"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface StudentData {
  id: number;
  name: string;
  section: string;
  sub1: string;
  sub2: string;
  sub3: string;
  sub4: string;
  sub5: string;
  sub6: string;
  total: string;
}

const Student: React.FC = () => {
  const initialData: StudentData[] = [
    {
      id: 1,
      name: "student1",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 2,
      name: "student2",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 3,
      name: "student3",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 4,
      name: "student4",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 5,
      name: "student5",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 6,
      name: "student6",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 7,
      name: "student7",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 8,
      name: "student8",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 9,
      name: "student9",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 10,
      name: "student10",
      section: "A",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 11,
      name: "student11",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 12,
      name: "student12",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 13,
      name: "student13",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 14,
      name: "student14",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 15,
      name: "student15",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 16,
      name: "student16",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 17,
      name: "student17",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 18,
      name: "student18",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 19,
      name: "student19",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 20,
      name: "student20",
      section: "B",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 21,
      name: "student21",
      section: "C",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 22,
      name: "student22",
      section: "C",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 23,
      name: "student23",
      section: "C",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 24,
      name: "student24",
      section: "C",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },
    {
      id: 25,
      name: "student25",
      section: "C",
      sub1: "AA",
      sub2: "AB",
      sub3: "BB",
      sub4: "BC",
      sub5: "CC",
      sub6: "CD",
      total: "BB",
    },

  ];

  const [data, setData] = useState<StudentData[]>(initialData);
  const [editMode, setEditMode] = useState<number | null>(null);

  const handleInputChange = (id: number, field: string, value: string) => {
    const updatedData = data.map((student) =>
      student.id === id ? { ...student, [field]: value } : student
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
          <p className="text-3xl text-center font-bold mt-10 mb-5">Students</p>
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
                    Subject 1
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Subject 2
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Subject 3
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Subject 4
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Subject 5
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Subject 6
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pr-6"
                  >
                    Total Grade
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
                          value={item.sub1}
                          onChange={(e) =>
                            handleInputChange(item.id, "sub1", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sub1
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.sub2}
                          onChange={(e) =>
                            handleInputChange(item.id, "sub2", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sub2
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.sub3}
                          onChange={(e) =>
                            handleInputChange(item.id, "sub3", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sub3
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.sub4}
                          onChange={(e) =>
                            handleInputChange(item.id, "sub4", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sub4
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.sub5}
                          onChange={(e) =>
                            handleInputChange(item.id, "sub5", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sub5
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.sub6}
                          onChange={(e) =>
                            handleInputChange(item.id, "sub6", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.sub6
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-gray-500 sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.total}
                          onChange={(e) =>
                            handleInputChange(item.id, "total", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.total
                      )}
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

export default Student;
