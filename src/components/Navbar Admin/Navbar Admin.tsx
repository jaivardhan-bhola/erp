"use client";
import Image from 'next/image';


const Navbar = ({ pageid }) => (        
            <div className="bg-black text-white w-auto h-auto flex flex-col items-center pt-4 m-8 rounded-[15px] sticky">
                        <div className="flex flex-col items-center mb-8">
                            <div className="text-lg font-semibold">Dr. Sameer</div>
                            <div className="text-sm text-gray-400">Admin</div>
                        </div>
                        
                        <div className="mb-8">
                        <Image src={require("/public/iiitn.png")} className="object-contain w-20 h-20" alt={"Student"}/>
                        </div>

                        <div className="flex flex-col items-left mb-8 text-left">
                            <div className=" flex flex-row mb-8 hover:bg-gray-100 hover:text-black rounded-[25px] px-8 py-1">
                                    <Image src={require("/public/All Courses.svg")} className="object-contain w-4 h-4" alt={"Student"}/>
                                    <div className="px-2">
                                        <button onClick={() => window.location.href='/admin_homescreen'} >
                                            Dashboard
                                        </button>
                                    </div>
                            </div>
                            <div className="flex flex-row mb-8 hover:bg-gray-100 hover:text-black rounded-[25px] px-8 py-1">
                                    <Image src={require("/public/Faculty Course Dashboard.svg")} className="object-contain w-4 h-4"/>
                                    <div className="px-2">
                                        <button onClick={() => window.location.href='/admin_manage_semesters'} >
                                            Manage Semester
                                        </button>
                                    </div>
                            </div>
                            <div className="mb-8 hover:bg-gray-100 hover:text-black rounded-[25px] px-8 py-1">
                                    <button onClick={() => window.location.href='/admin_manage_faculties'} >
                                        Manage Faculty
                                    </button>
                            </div>
                            <div className="mb-8 hover:bg-gray-100 hover:text-black rounded-[25px] px-8 py-1">
                                    <button onClick={() => window.location.href='/admin_manage_courses'} >
                                        Manage Courses
                                    </button>
                            </div>
                            <div className="mb-8 hover:bg-gray-100 hover:text-black rounded-[25px] px-8 py-1">
                                    <button onClick={() => window.location.href='/admin_homescreen'} >
                                        Settings
                                    </button>
                            </div>
                        </div>

                        <div className="mt-auto mb-8">
                            <div className="bg-white text-black rounded-full w-32 h-12 flex items-center justify-center hover:text-black hover:bg-blue-500">
                                    Logout
                            </div>
                        </div>
                        <div className="text-center text-sm mb-auto">
                                &copy; 2024 IIITN ERP
                        </div>
            </div>
);

export default Navbar;