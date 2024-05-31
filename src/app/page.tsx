
import React from "react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
      <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
        <a href="/">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('./assets/crispr.png')} className="h-10 w-10" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
        </div>
        </a>
        <Link href={{
                        pathname: "/login",
                        query: { user: "fa" },
                      }
                      }
                    >
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('./assets/fa.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Faculty Advisor</span>
        </div>
        </Link>
        <a href="/complaints">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('./assets/faculty.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Faculty</span>
        </div>
        </a>
        <a href="/export">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('./assets/student.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Student</span>
        </div>
        </a>
        <a href="/export">
        <div className="group grid">
        <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><Image src={require('./assets/admin.png')} className="h-6 w-6" alt="logo"/></div>
        <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Admin</span>
        </div>
        </a>
      </div>
      <div className="h-screen ml-4 overflow-y-auto">
      <div className="flex min-h-screen min-w-screen items-center justify-center text-gray-600">
        <div className="relative">
          <div className="hidden sm:block h-56 w-56 text-black absolute a-z-10 -left-20 -top-30">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.6) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#a)"
              />
            </svg>
          </div>
          <div className="hidden sm:block h-28 w-28 text-black absolute a-z-10 -right-20 -bottom-10">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#b)"
              />
            </svg>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">

            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <Image src={require("./assets/fa.png")} className="object-contain w-20 h-20" alt={"FA"}/>
                </div>
                <div className="mb-4 flex justify-center">
                    <Link
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo- 600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      href={{
                        pathname: "/login",
                        query: { user: "fa" },
                      }
                      }
                    >
                     Faculty Advisor
                    </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <Image src={require("./assets/faculty.png")} className="object-contain w-20 h-20" alt={"Faculty"}/>
                </div>
                <div className="mb-4 flex justify-center">
                    <Link
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      href={{
                        pathname: "/login",
                        query: { user: "faculty" },
                      }
                      }
                    >
                      Faculty
                    </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <Image src={require("./assets/student.png")} className="object-contain w-20 h-20" alt={"Student"}/>
                </div>
                <div className="mb-4 flex justify-center">
                    <Link
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      href={{
                        pathname: "/login",
                        query: { user: "student" },
                      }
                      }
                    >
                     Student
                    </Link>                
                </div>
              </div>
            </div>
            <div className="relative flex flex-col sm:w-[15rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
              <div className="flex-auto p-6">
                <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <Image src={require("./assets/admin.png")} className="object-contain w-20 h-20" alt={"Student"}/>
                </div>
                <div className="mb-4 flex justify-center">
                    <Link
                      className="inline-block w-9/10 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                      href={{
                        pathname: "/login",
                        query: { user: "admin" },
                      }
                      }
                    >
                    Admin
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;