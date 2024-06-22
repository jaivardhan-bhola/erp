// pages/index.js
"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import FacultyCard from "@/components/FacultyCard";
import FacultyDetails from "@/components/FacultyDetails";
import Navbar from "@/components/Navbar Admin/Navbar Admin";
import { useForm } from "react-hook-form";

const AdminHomeScreen = () => {

  const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  
    const onSubmit = (data) => {
      setData(data)
    }

    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };
  

  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const faculties = [
    { name: "Dr. Nishant Namdev", position: "Adjunct Asst. Prof", courses: 4, department: "Basic Science", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in" },
    { name: "Dr. Kamaljeet", position: "Adjunct Asst. Prof", courses: 5, department: "Basic Science", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in" },
    { name: "Mr. Vikrant Dhenge", position: "Adjunct Asst. Prof", courses: 6, department: "Basic Science", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in" },
    { name: "Dr. Chandrashekhar Kamargaonkar", position: "Adjunct Asst. Prof", courses: 6, department: "Electronics", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in"},
    { name: "Dr. Nishant Namdev", position: "Adjunct Asst. Prof", courses: 4, department: "Basic Science", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in" },
    { name: "Dr. Kamaljeet", position: "Adjunct Asst. Prof", courses: 5, department: "Basic Science", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in" },
    { name: "Mr. Vikrant Dhenge", position: "Adjunct Asst. Prof", courses: 6, department: "Basic Science", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in" },
    { name: "Mr. Vikrant Dhenge", position: "Adjunct Asst. Prof", courses: 6, department: "Basic Science", code: "123456", joiningDate: "2nd April 2022", status: "Permanent", subjects: ["PS", "ILA", "CDS"], contact: "1234567890", email: "abc@iiitn.ac.in" },
    // Add more faculties as needed
  ];

  return (
    <div className="bg-gray-200 flex">
        <div className="flex flex-row w-full h-screen">
      <Navbar/>


          <div className="bg-white flex flex-col w-4/5 my-8 h-auto rounded-2xl">
            <h2 className="text-2xl font-bold my-4 ml-8">Welcome Mr. Sameer</h2>
            <div className=" flex flex-row justify-between h-3/5 w-auto mx-8 mb-8">
                  <div className="bg-gray-300 flex flex-col h-auto w-[643px] mr-4 rounded-xl">
                        <h2 className="text-xl font-bold my-4 ml-8">Quick Stats</h2>
                        <h2 className="text-xl mb-4 ml-8">Total Facultes - 27</h2>
                        <h2 className="text-xl mb-4 ml-8">Total Courses - 71</h2>
                        <h2 className="text-xl mb-4 ml-8">Active Semesters - 8</h2>
                        <h2 className="text-xl mb-4 ml-8">View Report</h2>
                        
                  </div>
                  <div className="bg-gray-300 flex flex-col h-auto w-[643px] ml-4 rounded-xl">
                        <h2 className="text-xl font-bold my-4 ml-8">Quick Actions</h2>
                        <h2 className="text-xl mb-4 ml-8">
                              <button onClick={togglePopup}>
                                    <span className="">Add New Faculty +</span>
                              </button>
                              {isPopupVisible && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                        <div className="bg-white p-8 rounded shadow-lg">
                                        <h2 className="text-center text-xl mb-4">Adding New Faculty</h2>
                                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col justify-evenly">
                                          <div className="flex flex-col w-[500px] h-[450px] overflow-auto">
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Faculty Name" {...register("Faculty Name")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Faculty Code" {...register("Faculty Code")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Joining Date" {...register("Joining Date")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Faculty Status" {...register("Faculty Status")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Subjects Assigned" {...register("Subjects Assigned")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Number of courses" {...register("Number of courses")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Faculty Position" {...register("Faculty Position")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Contact Number" {...register("Contact Number")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Email Id" {...register("Email Id")}/>
                                          </div>
                                        <div className="flex justify-between mt-4">
                                            <button 
                                                type="button" 
                                                className="bg-red-500 text-white px-4 py-2 rounded"
                                                onClick={togglePopup}
                                            >
                                                Cancel
                                            </button>
                                            <button className=" flex justify-center p-2 rounded-md w-1/4 self-center bg-green-500  text-white hover:bg-gray-800" type='submit'>
                                                <span>
                                                    Submit
                                                </span> 
                                            </button>
                                            </div>
                                        </form>
                                        
                                        <div className='h-4'>  
                                            <p> 
                                              Data: {JSON.stringify(data)}
                                            </p> 
                                        </div>
                                        
                                        </div>
                                    </div>
                                    )}

                        </h2>
                        <h2 className="text-xl mb-4 ml-8">
                              <button onClick={togglePopup}>
                                    <span className="">Add New Semester +</span>
                              </button>
                            

                        </h2>
                        <h2 className="text-xl mb-4 ml-8">
                                <button onClick={togglePopup}>
                                    <span className="">Add New Course +</span>
                                </button>
                                {isPopupVisible && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                        <div className="bg-white p-8 rounded shadow-lg ">
                                        <h2 className="text-center text-xl mb-4">Adding New Course</h2>
                                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col justify-evenly">
                                          <div className="flex flex-col w-[500px] h-[450px] overflow-auto">
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Course Name" {...register("Course Name")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Course Code" {...register("Course Code")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Course Faculty" {...register("Course Faculty")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Course Credits" {...register("Course Credits")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Course Classroom" {...register("Course Classroom")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Starting Date" {...register("Starting Date")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Ending Date" {...register("Ending Date")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Lab Availability" {...register("Lab Availability")}/>
                                            <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Creation Date" {...register("Creation Date")}/>
                                          </div>
                                        <div className="flex justify-between mt-4">
                                            <button 
                                                type="button" 
                                                className="bg-red-500 text-white px-4 py-2 rounded"
                                                onClick={togglePopup}
                                            >
                                                Cancel
                                            </button>
                                            <button className=" flex justify-center p-2 rounded-md w-1/4 self-center bg-green-500  text-white hover:bg-gray-800" type='submit'>
                                                <span>
                                                    Submit
                                                </span> 
                                            </button>
                                            </div>
                                        </form>
                                        
                                        <div className='h-4'>  
                                            <p> 
                                              Data: {JSON.stringify(data)}
                                            </p> 
                                        </div>
                                        
                                        </div>
                                    </div>
                                    )}
                            
                        </h2>
                  </div>
            </div>
            <div className=" flex flex-row justify-between h-3/5 w-auto mx-8 mb-8 ">
                  <div className="bg-gray-300 flex flex-col h-auto w-[643px] mr-4 rounded-xl">
                        <h2 className="text-xl font-bold my-4 ml-8">Recent Activities</h2>
                        <h2 className="text-xl mb-4 ml-8">Dr. Nishant Namdev added to Faculty list</h2>
                        <h2 className="text-xl mb-4 ml-8">New course 'MAL106 - Probability and Statistics' created</h2>
                        <h2 className="text-xl mb-4 ml-8">Semester CSD 2024 activated</h2>
                  </div>
                  <div className="bg-gray-300 flex flex-col h-auto w-[643px] ml-4 rounded-xl">
                        <h2 className="text-xl font-bold my-4 ml-8">Profile</h2>
                        <h2 className="text-xl mb-4 ml-8">Name - Mr. Sameer</h2>
                        <h2 className="text-xl mb-4 ml-8">Position - Admin</h2>
                        <h2 className="text-xl mb-4 ml-8"></h2>
                  </div>
            </div>

          </div>
        </div>
    </div>
  );
};  

export default AdminHomeScreen;
