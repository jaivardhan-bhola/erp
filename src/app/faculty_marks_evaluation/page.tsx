"use client";
import React, {useState} from "react";
import Image from 'next/image'
import Navbar from "@/components/Navbar Faculty/Navbar Faculty"

interface StudentData {
  id: number;
  name: string;
  section: string;
  s1: integer;
  s2: integer;
  es: integer;  
  ta: integer;
  lab: integer;
  total: integer;
}

const Marks = () => {
  const initialData: StudentData[] = [
    {
      id: 1,
      name: "student1",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 2,
      name: "student2",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 3,
      name: "student3",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 4,
      name: "student4",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 5,
      name: "student5",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 6,
      name: "student6",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 7,
      name: "student7",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 8,
      name: "student8",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 9,
      name: "student9",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 10,
      name: "student10",
      section: "A",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 11,
      name: "student11",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 12,
      name: "student12",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 13,
      name: "student13",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 14,
      name: "student14",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 15,
      name: "student15",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 16,
      name: "student16",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 17,
      name: "student17",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 18,
      name: "student18",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 19,
      name: "student19",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 20,
      name: "student20",
      section: "B",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 21,
      name: "student21",
      section: "C",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 22,
      name: "student22",
      section: "C",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 23,
      name: "student23",
      section: "C",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 24,
      name: "student24",
      section: "C",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
    },
    {
      id: 25,
      name: "student25",
      section: "C",
      s1: "11",
      s2: "21",
      es: "31",
      ta: "41",
      lab: "51",
      
      total: "31",
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
          console.log("Data saved su51essfully:", studentToSave);
        } else {
          console.error("Failed to save data");
        }
      } catch (error) {
        console.error("Error while saving data:", error);
      }
    }
    setEditMode(null);
  };

    return(
        <>
        <div className="grid grid-cols-[20%_auto_auto] h-screen overflow-y-hidden gap-5 p-5 bg-background">
          
          <div className="flex flex-col items-center justify-center h-relative min-h-screen bg-black rounded-[15px] row-span-3 text-white w-[292px] pt-8">
                <div className="flex flex-col items-center mb-8">
                    <div className="text-lg font-semibold">Dr. Nishant Namdev</div>
                    <div className="text-sm text-gray-400">Adjacent Faculty</div>
                </div>
                
                <div className="mb-8">
                        <Image src={require("/public/iiitn.png")} className="object-contain w-20 h-20" alt={"Student"}/>
                </div>

        <div className="flex flex-col items-center mb-8 text">
            <div className="mb-8">
                <div className="text-center">All Courses</div>
            </div>
            <div className="mb-8">
                <div className="text-center">Course Dashboard</div>
            </div>
            <div className="mb-8">
                <div className="text-center">Cut-Off</div>
            </div>
            <div className="mb-8">
                <div className="text-center">Mark Evaluation</div>
            </div>
        </div>

        <div className="mt-auto mb-8">
          <div className="bg-white text-black rounded-full w-32 h-12 flex items-center justify-center">
            Logout
          </div>
        </div>
        <div className="text-center text-sm mb-auto">&copy; 2024 IIITN ERP</div>
        </div>
          <div className="bg-card-bg rounded-lg col-span-2 min-h-full">
            <div className="grid grid-cols-5 gap-5 h-full">
              <div className="rounded-lg h-0 min-h-full col-span-2 p-5">
                <h1 className="text-xl font-bold text-card-text pb-5">Final Result overview</h1>
                <div className="rounded-lg bg-navbar-bg h-fit p-5 text-navbar-text">
                  <h1 className="text-xl font-bold pb-5">Highest Marks = 580 (BT23CSD066)</h1>
                  <h1 className="text-xl font-bold ">Highest Marks = 420 (BT23CSD063)</h1>
                </div>
                </div>

                <div className="rounded-lg col-span-3 h-0 min-h-full p-5">
                  <div className="rounded-lg bg-navbar-bg h-auto">
                    <h1 className="text-xl font-bold text-navbar-text p-5">Total number of students: 65</h1>
                    <h1 className="text-xl font-bold text-navbar-text pb-5 px-5">Number of Students passed in all subjects: 50</h1>
                    <h1 className="text-xl font-bold text-navbar-text pb-5 px-5">Number of Students failed in atleast one subject: 15</h1>             
                  </div>
                </div>
            </div>
          </div>
            <div className="bg-card-bg rounded-lg col-span-2 row-span-2 h-0 min-h-full">
            <div className="h-full overflow-auto rounded shadow-md no-scrollbar">
            <table className="min-w-full divide-y divide-slate-300 rounded-lg">
              <thead className="bg-navbar-bg sticky top-0">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                  >
                    Section
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                  >
                    Sessional 1
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                  >
                    Sessional 2
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                  >
                    End Semester
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                  >
                    Teacher Assessment
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pl-6"
                  >
                    Lab
                  </th>
                  
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pr-6"
                  >
                    Total Marks
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-navbar-text sm:pr-6"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-center">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="pl-4 pr-3 py-3 text-sm font-medium text-card-text sm:pl-6">
                      {item.name}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm font-medium text-card-text sm:pl-6">
                      {item.section}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.s1}
                          onChange={(e) =>
                            handleInputChange(item.id, "s1", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.s1
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.s2}
                          onChange={(e) =>
                            handleInputChange(item.id, "s2", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.s2
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                      {editMode === item.id ? (
                        <input
                          type="text"
                          value={item.es}
                          onChange={(e) =>
                            handleInputChange(item.id, "es", e.target.value)
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        item.es
                      )}
                    </td>
                    <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
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
                    <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
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

                    <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
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
                    <td className="pl-4 pr-3 py-3 text-sm text-card-text sm:pl-6">
                      {editMode === item.id ? (
                        <button
                          onClick={() => handleSave(item.id)}
                          className="text-navbar-text bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => setEditMode(item.id)}
                          className="text-navbar-text bg-green-500 hover:bg-green-700 px-3 py-1 rounded-md"
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