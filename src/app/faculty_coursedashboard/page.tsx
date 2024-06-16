// CourseDetail.js
"use client";
import React, {useState} from "react";
import CreateModal from "../createModal";
import Image from "next/image";
import Navbar from "@/components/Navbar Faculty/Navbar Faculty"

const CourseDetail = () => {

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

    <div className = "bg-[#e6e6e6] h-auto flex">

        <Navbar/>

        <div flex flex-col>
            <div className="flex flex-col items-center w-full p-8">
                <div className="w-full h-auto bg-white shadow-md rounded-[15px] p-8 mb-8">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-black text-white">
                    <tr>
                        <th className="border-b-2 p-4">Name</th>
                        <th className="border-b-2 p-4">Roll Number</th>
                        <th className="border-b-2 p-4">Batch</th>
                        <th className="border-b-2 p-4">Section</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Add rows dynamically as needed */}
                    {[...Array(5)].map((_, i) => (
                        <tr key={i}>
                        <td className="border-b p-4">Student {i + 1}</td>
                        <td className="border-b p-4">Roll {i + 1}</td>
                        <td className="border-b p-4">Batch {i + 1}</td>
                        <td className="border-b p-4">Section {i + 1}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>

                <div className="flex flex-row justify-between w-auto float">

                        <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-[15px] w-[20%] h-[220px] hover:bg-gray-200 transition">
                            <Image src={require("/public/Edit Create Evaluation Scheme.png")} className="object-contain w-20 h-20 mb-4" alt={"Edit Create Evaluation Scheme"}/>
                            <div className="text-center font-bold">
                                <button onClick={() => window.location.href='/faculty_create_evaluation_scheme'} >
                                    EDIT/CREATE EVALUATION SCHEME
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-[15px] w-[20%] h-[220px] hover:bg-gray-200 transition">
                            <Image src={require("/public/Mark Evaluation.png")} className="object-contain w-20 h-20 mb-4" alt={"Mark Evaluation"}/>
                            <div className="text-center font-bold">
                                <button onClick={() => window.location.href='/faculty_marks_evaluation'} >
                                    MARK EVALUATION
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-[15px] w-[20%] h-[220px] hover:bg-gray-200 transition">
                            <Image src={require("/public/Cutoff.png")} className="object-contain w-20 h-20 mb-4" alt={"Cutoff"}/>
                            <div className="text-center font-bold">
                            <button onClick={() => window.location.href='/faculty_cutoff'} >
                            CUT OFF
                            </button>   
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-[15px] w-[20%] h-[220px] hover:bg-gray-200 transition">
                            <Image src={require("/public/Lock marks.png")} className="object-contain w-20 h-20 mb-4 align-middle" alt={"Lock Marks"}/>
                        <button onClick={()=>setGenerateGrade(true)}>
                            
                            <div className="text-center font-bold">LOCK MARKS AND GENERATE GRADE</div> 
                        </button>
                                    <CreateModal open={generateGrade} onClose={()=> setGenerateGrade(false)}>
                                        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
                                            <h1 className="text-xl font-bold text-card-text w-fit">Are you sure you want to lock the marks?</h1>
                                            <h1 className="text-xl font-bold text-card-text w-fit m-auto">(Note: This action is irreversible)</h1>
                                            <div className="flex gap-5 m-auto py-7 w-fit">
                                                <button className="text-button-cancel-text font-bold w-32 bg-button-cancel h-12 rounded-lg" onClick={()=> setGenerateGrade(false)}>Cancel</button>
                                                <button className="text-button-submit-text font-bold w-32 bg-button-submit h-12 rounded-lg" onClick={()=>{
                                                    setGenerateGrade(false);
                                                    simulateGradeGeneration();
                                                }}>Lock</button>
                                            </div>
                                        </div>
                                    </CreateModal>
                                    <CreateModal open={startGenerateGrade} onClose={()=> setStartGenerateGrade(false)}>
                                        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
                                            <h1 className="text-xl font-bold text-card-text w-fit px-5">Locking Marks</h1>
                                            <div className="text-center py-5">
                                                <div role="status">
                                                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-background fill-button-submit" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </CreateModal>
                                    <CreateModal open = {viewGrade} onClose={()=> setViewGrade(false)}>
                                        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
                                            <h1 className="text-xl font-bold text-card-text w-fit">Marks Locked Successfully</h1>
                                            <div className="flex gap-5 m-auto py-7 w-fit">
                                                <button className="text-button-cancel-text font-bold w-32 bg-button-cancel h-12 rounded-lg" onClick={()=> setViewGrade(false)}>Close</button>
                                                <button className="text-button-submit-text font-bold w-32 bg-button-submit h-12 rounded-lg" onClick={() => window.location.href='/results'}>View Grades</button>
                                            </div>
                                        </div>
                                    </CreateModal>
                        </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
