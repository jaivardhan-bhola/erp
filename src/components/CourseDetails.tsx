// components/CourseDetails.js
import React from "react";
import Image from 'next/image';
import { useState } from "react";
import { useForm } from "react-hook-form";


const CourseDetails = ({ course }) => {

  const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  
    const onSubmit = (data) => {
      setData(data)
    }

    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

  if (!course) return <div className="p-4">Select a course to view details</div>;

  return (
    <div className="bg-gray-300 p-4 rounded w-auto h-[665px]">
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-2xl font-bold mb-4 ml-8">Course Details</h2>
        <div className=" bg-white px-8 mb-4 p-1 mr-6 rounded-xl flex justify-center align-bottom font-bold">
                      
                      <span className="">List of courses assigned</span>
                      
            </div>
      </div>
      <div className="bg-gray-400 p-4 w-auto h-[500px] ml-8 mr-6 my-2 rounded-2xl pb-24 mb-8 overflow-auto">
        <div className="text-2xl mb-4">
          <p>Course Code: {course.code}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Name: {course.name}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Faculty: {course.faculty}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Credits: {course.credits}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Classroom: {course.classroom}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Started on: {course.startDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Ending on: {course.endDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Created on: {course.createdDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Lab Availability: {course.lab ? 'Available' : 'NA'}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-8">
        <button className="bg-white p-1 px-8 rounded-xl font-bold">
          Delete this Course
        </button>


        <button className="bg-white p-1 px-8 rounded-xl">
                  
                  <div className="flex justify-center align-bottom font-bold">
                                    <button onClick={togglePopup}>
                                    <span className="">Add New Course</span>
                                    </button>
                  </div>
                                    {isPopupVisible && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                        <div className="bg-white p-8 rounded shadow-lg">
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
              </button>


        <button className="bg-white p-1 px-8 rounded-xl font-bold">
          Edit this Course
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
