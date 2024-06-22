import React from "react";
import Image from 'next/image';
import { useState } from "react";
import { useForm } from "react-hook-form";

const SemesterDetails = ({ semester }) => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (data) => {
    setData(data)
  }

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
  };

return ( 
  <div className="bg-gray-300 p-4 rounded w-auto h-[665px]">
      <div className="flex flex-row justify-between w-full position-float">
        <h2 className="text-2xl font-bold mb-4 ml-8">{semester.name} Details</h2>
            <div className=" bg-white px-8 mb-4 mr-6 rounded-xl flex justify-center align-bottom font-bold">
                      <button>
                      <span className="">List of courses available</span>
                      </button>
            </div>
      </div>

      <div className="bg-gray-400 p-4 w-auto h-[500px] ml-8 mr-6 my-2 rounded-2xl pb-24 mb-8 overflow-auto">
                <div className="text-2xl mb-4">
                  <p>Semester: {semester.semester}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Branch: {semester.branch}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Faculty Advisor: {semester.facultyAdvisor}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Number of Courses: {semester.courses}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Number of Credits: {semester.credits}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Classroom: {semester.classroom}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Semester Started on: {semester.startDate}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Semester Ending on: {semester.endDate}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Lab Availability: {semester.labAvailability}</p>
                </div>
                <div className="text-2xl mb-4">
                  <p>Semester Created on: {semester.createdDate}</p>
                </div>
          </div>
          <div className="flex flex-row justify-between mx-8">
            
              <button className="bg-white p-1 px-8 rounded-xl font-bold">
                  Delete Semester
              </button>
            
              <button className="bg-white p-1 px-8 rounded-xl">
                  
                  <div className="flex justify-center align-bottom font-bold">
                                    <button onClick={togglePopup}>
                                    <span className="">Add New Semester</span>
                                    </button>
                  </div>
                                    {isPopupVisible && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                        <div className="bg-white p-8 rounded shadow-lg">
                                        <h2 className="text-center text-xl mb-4">Adding New Semester</h2>
                                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col justify-evenly">
                                          <div className="flex flex-col w-[500px] h-[450px] overflow-auto">
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Semester" {...register("semester")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Branch" {...register("branch")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Faculty Advisor" {...register("facultyAdvisor")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Number of Courses" {...register("courses")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Number of Credits" {...register("credits")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Classroom" {...register("classroom")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Semester Started on" {...register("startDate")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Semester Ending on" {...register("endDate")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Lab Availability" {...register("labAvailability")} />
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Semester Created on" {...register("createdDate")} />
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

export default SemesterDetails;
