// components/FacultyDetails.js
import React from "react";
import Image from 'next/image';
import { useState } from "react";
import { useForm } from "react-hook-form";

const FacultyDetails = ({ faculty }) => {
  

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  
    const onSubmit = (data) => {
      setData(data)
    }

    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

  if (!faculty) return <div className="p-4">Select a faculty to view details</div>;

  return (
    <div className="bg-gray-300 p-4 rounded w-auto h-[665px]">
      <div className="flex flex-row justify-between w-full position-float">
        <h2 className="text-2xl font-bold mb-4 ml-8">Faculty Details</h2>
            <div className=" bg-white px-8 mb-4 rounded-xl flex justify-center align-bottom font-bold">
                      <button onClick={togglePopup}>
                      <span className="">List of courses assigned</span>
                      </button>
            </div>
      </div>

          <div className="bg-gray-400 p-4 w-auto h-[500px] ml-8 mr-6 my-2 rounded-2xl pb-24 mb-8 overflow-auto flex flex-row justify-between">
            <div>
                <div className="text-2xl mb-4">
                  <p>Faculty Name: {faculty.name}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Faculty Code: {faculty.code}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Joining Date: {faculty.joiningDate}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Faculty Status: {faculty.status}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Subjects Assigned: {faculty.subjects.join(", ")}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Number of Courses Assigned: {faculty.courses}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Faculty Position: {faculty.position}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Contact Number: {faculty.contact}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Email ID: {faculty.email}</p>
                </div>
          </div>
          <div>
                <div className="items-end">
                  <Image src={require("/public/Avatar.png")} className="object-contain w-40 h-40" alt={"Student"}/>
                </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mx-8">
            
              <button className="bg-white p-1 px-8 rounded-xl font-bold">
                  Discharge Faculty
              </button>
            
              <button className="bg-white p-1 px-8 rounded-xl">
                  
                  <div className="flex justify-center align-bottom font-bold">
                                    <button onClick={togglePopup}>
                                    <span className="">Add New Faculty</span>
                                    </button>
                  </div>
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
              </button>
            
              <button className="bg-white p-1 px-8 rounded-xl font-bold">
                  Edit Details
              </button>
            
          </div>
    </div>
  );
};

export default FacultyDetails;
