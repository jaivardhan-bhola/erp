// Cutoff.js
"use client";
import React, {useState} from "react";
import Image from "next/image";
import { extname } from "path";
import CreateModal from "../createModal";

const Cutoff = () => {

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
      <div className="bg-black text-white w-[392px] h-relative min-h-screen flex flex-col items-center pt-4 m-8 rounded-[15px]">
        
        <div className="flex flex-col items-center mb-8">
          <div className="text-lg font-semibold">Dr. Nishant Namdev</div>
          <div className="text-sm text-gray-400">Adjacent Faculty</div>
        </div>
                
        <div className="mb-8">
          <Image src={require("./iiitn.png")} className="object-contain w-20 h-20 mb-4 align-middle" alt={"IIITN Logo"}/>
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
                                                <form className="space-y-4">
                                                    <input type="text" placeholder="Name" className="w-full border border-gray-400 p-2 rounded" />
                                                    <input type="number" placeholder="Marks" className="w-full border border-gray-400 p-2 rounded" />
                                                    <div className="flex justify-between mt-4">
                                                    <button 
                                                        type="button" 
                                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                                        onClick={togglePopup}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button 
                                                        type="submit" 
                                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                                    >
                                                        Add
                                                    </button>
                                                    </div>
                                                </form>
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
