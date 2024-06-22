// Faculty Create Evaluation Screen
"use client";
import React, {useState} from "react";
import Image from "next/image";
import { extname } from "path";
import CreateModal from "../createModal";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar Faculty/Navbar Faculty"

const Cutoff = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  
    const onSubmit = (data) => {
      setData(data)
    }

    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const [generateGrade, setGenerateGrade] = useState(false);
    const [startGenerateGrade, setStartGenerateGrade] = useState(false);
    const [viewGrade, setViewGrade] = useState(false);
    const simulateGradeGeneration = () => 
    {
        setStartGenerateGrade(true);
        setTimeout(() => 
            {
            setStartGenerateGrade(false);
            setViewGrade(true);
            }, 5000);
    }

  return (
    <div className="bg-[#e6e6e6] h-auto flex">
      
      <Navbar/>

      <div className="flex flex-col justify-between w-full p-8">
        <div className="flex flex-row justify-between w-20% ">

                  <div className="w-full h-full bg-white shadow-md rounded-[15px] p-8 mb-8">
                      <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold mb-4">Evaluation Scheme</div>
                              <div className="w-full flex flex-col items-center">
                                {[
                                  { exam: "Sessional - 1", marks: 15 },
                                  { exam: "Sessional - 2", marks: 15 },
                                  { exam: "End Semester", marks: 60 },
                                ].map((evaluation, index) => (
                                  <div
                                    key={index}
                                    className="w-full flex justify-between p-4 bg-black text-white text-4xl rounded-md mb-4"
                                  >
                                    <div>{evaluation.exam}</div>
                                    <div>{evaluation.marks}</div>
                                  </div>
                                ))}
                              </div>

                                <div className="flex justify-center align-bottom m-32">
                                    <button 
                                    className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center"
                                    onClick={togglePopup}
                                    >
                                    <span className="text-5xl">+</span>
                                    </button>
                                </div>

                                            {isPopupVisible && (
                                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                                <div className="bg-white p-8 rounded shadow-lg">
                                                <h2 className="text-center text-xl mb-4">Marks Left : 20</h2>
                                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col justify-evenly">
                                                <div className="flex flex-col">
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Type" {...register("type")}/>
                                                  <input className="border-2 outline-none p-2 rounded-md m-4" placeholder="Marks" {...register("marks")}/>
                                                </div>
                                                <div className="flex justify-between mt-4">
                                                    <button 
                                                        type="button" 
                                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                                        onClick={togglePopup}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-green-500  text-white hover:bg-gray-800" type='submit'>
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

                          </div>
                    </div>
                  
                    <div className="flex flex-col justify-around w-auto h-full mx-20">
                          <div className="flex flex-col p-12 bg-white shadow-md rounded-[15px] w-[240px] ml-32 hover:bg-gray-200 transition">
                            <div className="text-center font-bold text-2xl mb-8">Marks Set</div>
                            <div className="text-center text-4xl font-black">80/100</div>
                          </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Cutoff;
