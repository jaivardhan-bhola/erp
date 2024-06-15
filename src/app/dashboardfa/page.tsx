"use client";
import React, {useState} from "react";
import { MultiSelect } from "react-multi-select-component";
import CreateModal from "../createModal";

const FADashboard = () => {
    const [openCourse, setOpenCourse] = useState(false);
    const [openRegistration, setOpenRegistration] = useState(false);
    const [generateGrade, setGenerateGrade] = useState(false);
    const [startGenerateGrade, setStartGenerateGrade] = useState(false);
    const [viewGrade, setViewGrade] = useState(false);
    const [semester, setSemester] = useState(1);
    const [courseCode, setCourseCode] = useState("CSE 101");
    const [courseName, setCourseName] = useState("Introduction to Programming");
    const [faculty, setFaculty] = useState("Dr. Nishant Namdev");
    const [lab, setLab] = useState("No");
    const [slot1, setSlot1] = useState([]);
    const [slot2, setSlot2] = useState([]);
    const [slot3, setSlot3] = useState([]);
    const [slot4, setSlot4] = useState([]);
    const [slot5, setSlot5] = useState([]);
    const [slot6, setSlot6] = useState([]);
    const [slot7, setSlot7] = useState([]);
    const [slot8, setSlot8] = useState([]);


    const courseOptions =[
        {label: "CSE 101", value: "CSE 101"},
        {label: "CSE 102", value: "CSE 102"},
        {label: "CSE 103", value: "CSE 103"},
        {label: "CSE 104", value: "CSE 104"},
        {label: "CSE 105", value: "CSE 105"},
        {label: "CSE 106", value: "CSE 106"},
    ]
    const simulateGradeGeneration = () => {
        setStartGenerateGrade(true);
        setTimeout(() => {
            setStartGenerateGrade(false);
            setViewGrade(true);
        }, 5000);
    }

    interface Course {
        code: string;
        name: string;
    }
    const handleCourseCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCourseCode = e.target.value;
        setCourseCode(selectedCourseCode);

        const courses: Course[] = [
            { code: "CSE 101", name: "Introduction to Programming" },
            { code: "CSE 102", name: "Data Structures and Algorithms" },
            { code: "CSE 103", name: "Computer Networks" },
            { code: "CSE 104", name: "Operating Systems" },
            { code: "CSE 105", name: "Database Management Systems" },
            { code: "CSE 106", name: "Software Engineering" },
        ];

        const selectedCourse = courses.find(course => course.code === selectedCourseCode);
        if (selectedCourse) {
            setCourseName(selectedCourse.name);
        }
    }
    const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSemester(parseInt(e.target.value));
    }

    const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFaculty(e.target.value);
    }

    const handleLabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLab(e.target.value);
    }

    const handleSubmit = () => {
        console.log("Course created");
        console.log("Semester: ", semester);
        console.log("Course Code: ", courseCode);
        console.log("Course Name: ", courseName);
        console.log("Faculty: ", faculty);
        console.log("Lab: ", lab);
        setOpenCourse(false);
    }

    const handleStart = () => {
        console.log("Registration Started");
        console.log("Slot 1: ", slot1);
        console.log("Slot 2: ", slot2);
        console.log("Slot 3: ", slot3);
        console.log("Slot 4: ", slot4);
        console.log("Slot 5: ", slot5);
        console.log("Slot 6: ", slot6);
        console.log("Slot 7: ", slot7);
        console.log("Slot 8: ", slot8);
        setOpenRegistration(false);
    }
    return (
        <>
         <div className="grid grid-cols-[25%_auto_auto_auto] h-screen overflow-y-hidden gap-5 p-5 bg-background">
            <div className="flex flex-col items-center justify-center h-full bg-navbar-bg rounded-lg row-span-2">
                <h1 className="text-4xl font-bold text-navbar-text ">Dashboard FA</h1>
                </div>
            <div className="flex flex-col items-center justify-center h-full bg-card-bg rounded-lg col-span-3">
                <div className="grid grid-cols-9 h-full w-full gap-2 pt-5 px-7 sm:grid-cols-3">
                    <div className="rounded-lg">
                        <h4 className="text-2xl font-bold text-black px-2">Manage Courses</h4>
                    </div>
                    <div className="rounded-lg flex justify-center">
                        <button className="text-white font-bold w-64 bg-black h-12 rounded-lg" onClick={()=>setOpenRegistration(true)}>Start Registration</button>
                        <CreateModal open={openRegistration} onClose={()=> setOpenRegistration(false)}>
                            <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 1</label>
                                        <button className="text-navbar-text font-bold w-7 h-7 bg-navbar-bg rounded-full absolute right-0" onClick={()=> setOpenRegistration(false)}>X</button>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2" onChange={(setSlot1)} options={courseOptions} value={slot1} labelledBy="Select"/>

                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 2</label>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2" onChange={(setSlot2)} options={courseOptions} value={slot2} labelledBy="Select"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 3</label>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2" onChange={(setSlot3)} options={courseOptions} value={slot3} labelledBy="Select"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 4</label>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2" onChange={(setSlot4)} options={courseOptions} value={slot4} labelledBy="Select"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 5</label>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2" onChange={(setSlot5)} options={courseOptions} value={slot5} labelledBy="Select"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 6</label>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2" onChange={(setSlot6)} options={courseOptions} value={slot6} labelledBy="Select"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 7</label>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2" onChange={(setSlot7)} options={courseOptions} value={slot7} labelledBy="Select"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="slot" className="text-lg font-bold text-card-text absolute left-0">Slot 8</label>
                                    </div>
                                    <MultiSelect className="rounded-lg h-10 border-2 mb-2" onChange={(setSlot8)} options={courseOptions} value={slot8} labelledBy="Select"/>
                                </div>
                                <button className="text-navbar-text font-bold w-64 bg-navbar-bg h-12 rounded-lg" onClick={handleStart}>Start Registration</button>
                            
                            </div>
                            
                        </CreateModal>
                    </div>                 
                    <div className="rounded-lg flex justify-center">
                        <button className="text-white font-bold w-64 bg-black h-12 rounded-lg" onClick={()=>setOpenCourse(true)}>Create new Course</button>
                        <CreateModal open={openCourse} onClose={()=> setOpenCourse(false)}>
                            <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
                                <div className="flex flex-col gap-2">
                                    <div className="relative pb-7">
                                        <label htmlFor="semester" className="text-lg font-bold text-card-text absolute left-0">Semester</label>
                                        <button className="text-navbar-text font-bold w-7 h-7 bg-navbar-bg rounded-full absolute right-0" onClick={()=> setOpenCourse(false)}>X</button>
                                    </div>
                                    <select name="semester" id="semester" className="rounded-lg h-10 border-2" onChange={(handleSemesterChange)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="courseCode" className="text-lg font-bold text-card-text">Course Code</label>
                                    <select name="courseCode" id="courseCode" className="rounded-lg h-10 border-2" onChange={handleCourseCodeChange}>
                                        <option value="CSE 101">CSE 101</option>
                                        <option value="CSE 102">CSE 102</option>
                                        <option value="CSE 103">CSE 103</option>
                                        <option value="CSE 104">CSE 104</option>
                                        <option value="CSE 105">CSE 105</option>
                                        <option value="CSE 106">CSE 106</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="courseName" className="text-lg font-bold text-card-text">Course Name</label>
                                    <h1 className="text-lg text-card-text">{courseName}</h1>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="faculty" className="text-lg font-bold text-card-text">Faculty</label>
                                    <select name="faculty" id="faculty" className="rounded-lg h-10 border-2" onChange={handleFacultyChange}>
                                        <option value="Dr. Nishant Namdev">Dr. Nishant Namdev</option>
                                        <option value="Dr. Nishant">Dr. Nishant</option>
                                        <option value="Dr. Namdev">Dr. Namdev</option>
                                        <option value="Dr. Nishant Namdev">Dr. Nishant Namdev</option>
                                        <option value="Dr. Nishant Namdev">Dr. Nishant Namdev</option>
                                        <option value="Dr. Nishant Namdev">Dr. Nishant Namdev</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="lab" className="text-lg font-bold text-card-text">Lab</label>
                                    <select name="lab" id="lab" className="rounded-lg h-10 border-2" onChange={handleLabChange}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <button className="text-navbar-text font-bold w-64 bg-navbar-bg h-12 rounded-lg" onClick={handleSubmit}>Create Course</button>
                                </div>
                            </div>
                        </CreateModal>
                    </div>
                    <div className="bg-card-bg rounded-lg grid grid-cols-4 sm:grid-cols-2 shadow-xl h-16 hover:bg-gray-200">
                        <div className="rounded-lg font-bold px-2 h-8">PS-CSD 2023</div>
                        <div className="rounded-lg text-right px-2 h-8">4 credits</div>
                        <div className="rounded-lg font-bold px-2 flex items-end h-8">Dr. Nishant Namdev</div>
                        <div className="rounded-lg px-2 flex items-end justify-end h-8">Lab NA</div>
                    </div>
                    <div className="bg-card-bg rounded-lg grid grid-cols-4 sm:grid-cols-2 shadow-xl h-16 hover:bg-gray-200">
                        <div className="rounded-lg font-bold px-2 h-8">PS-CSD 2023</div>
                        <div className="rounded-lg text-right px-2 h-8">4 credits</div>
                        <div className="rounded-lg font-bold px-2 flex items-end h-8">Dr. Nishant Namdev</div>
                        <div className="rounded-lg px-2 flex items-end justify-end h-8">Lab NA</div>
                    </div>
                    <div className="bg-card-bg rounded-lg grid grid-cols-4 sm:grid-cols-2 shadow-xl h-16 hover:bg-gray-200">
                        <div className="rounded-lg font-bold px-2 h-8">PS-CSD 2023</div>
                        <div className="rounded-lg text-right px-2 h-8">4 credits</div>
                        <div className="rounded-lg font-bold px-2 flex items-end h-8">Dr. Nishant Namdev</div>
                        <div className="rounded-lg px-2 flex items-end justify-end h-8">Lab NA</div>
                    </div>
                    <div className="bg-card-bg rounded-lg grid grid-cols-4 sm:grid-cols-2 shadow-xl h-16 hover:bg-gray-200">
                        <div className="rounded-lg font-bold px-2 h-8">PS-CSD 2023</div>
                        <div className="rounded-lg text-right px-2 h-8">4 credits</div>
                        <div className="rounded-lg font-bold px-2 flex items-end h-8">Dr. Nishant Namdev</div>
                        <div className="rounded-lg px-2 flex items-end justify-end h-8">Lab NA</div>
                    </div>
                    <div className="bg-card-bg rounded-lg grid grid-cols-4 sm:grid-cols-2 shadow-xl h-16 hover:bg-gray-200">
                        <div className="rounded-lg font-bold px-2 h-8">PS-CSD 2023</div>
                        <div className="rounded-lg text-right px-2 h-8">4 credits</div>
                        <div className="rounded-lg font-bold px-2 flex items-end h-8">Dr. Nishant Namdev</div>
                        <div className="rounded-lg px-2 flex items-end justify-end h-8">Lab NA</div>
                    </div>
                    <div className="bg-card-bg rounded-lg grid grid-cols-4 sm:grid-cols-2 shadow-xl h-16 hover:bg-gray-200">
                        <div className="rounded-lg font-bold px-2 h-8">PS-CSD 2023</div>
                        <div className="rounded-lg text-right px-2 h-8">4 credits</div>
                        <div className="rounded-lg font-bold px-2 flex items-end h-8">Dr. Nishant Namdev</div>
                        <div className="rounded-lg px-2 flex items-end justify-end h-8">Lab NA</div>
                    </div>
                    </div>
                </div>
            <div className="flex flex-col h-full bg-card-bg rounded-lg shadow-xl p-2">
                <h1 className="text-2xl font-bold text-black"> Course Dashboard</h1>
                <div className="p-2 bg-black text-white w-9/10 h-full rounded-lg">
                    <h1 className="text-l font-semibold text-white">Students Enrolled: 65</h1>
                    <h1 className="text-l font-semibold text-white">Course Code: CSL 112</h1>
                    <h1 className="text-l font-semibold text-white">Faculty Name: Dr. Nishant Namdev</h1>
                </div>
                </div>
            <div className="flex flex-col justify-center items-center h-full bg-card-bg rounded-lg shadow-xl">
                <button className="text-l font-bold text-white bg-black rounded-lg w-fit p-5"onClick={() => window.location.href='/results'} >STUDENT RESULTS</button>
                </div>
                
                <div className="flex flex-col justify-center items-center h-full bg-card-bg rounded-lg shadow-xl">
                <button className="text-l font-bold text-white bg-black rounded-lg w-fit p-5" onClick={()=>setGenerateGrade(true)}>LOCK MARKS AND<br/>GENERATE GRADE</button>
                <CreateModal open={generateGrade} onClose={()=> setGenerateGrade(false)}>
                    <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
                        <h1 className="text-xl font-bold text-card-text w-fit">Are you sure you want to generate grades?</h1>
                        <h1 className="text-xl font-bold text-card-text w-fit m-auto">(Note: This action is irreversible)</h1>
                        <div className="flex gap-5 m-auto py-7 w-fit">
                            <button className="text-button-cancel-text font-bold w-32 bg-button-cancel h-12 rounded-lg" onClick={()=> setGenerateGrade(false)}>Cancel</button>
                            <button className="text-button-submit-text font-bold w-32 bg-button-submit h-12 rounded-lg" onClick={()=>{
                                setGenerateGrade(false);
                                simulateGradeGeneration();
                            }}>Generate</button>
                        </div>
                    </div>
                </CreateModal>
                <CreateModal open={startGenerateGrade} onClose={()=> setStartGenerateGrade(false)}>
                    <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
                        <h1 className="text-xl font-bold text-card-text w-fit px-5">Generating Grades</h1>
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
                        <h1 className="text-xl font-bold text-card-text w-fit">Grades Generated Successfully</h1>
                        <div className="flex gap-5 m-auto py-7 w-fit">
                            <button className="text-button-cancel-text font-bold w-32 bg-button-cancel h-12 rounded-lg" onClick={()=> setViewGrade(false)}>Close</button>
                            <button className="text-button-submit-text font-bold w-32 bg-button-submit h-12 rounded-lg" onClick={() => window.location.href='/results'}>View Results</button>
                        </div>
                    </div>
                    </CreateModal>
                </div>
            </div>
        </>
    );
};

export default FADashboard;