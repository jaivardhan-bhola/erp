// Cutoff.js
"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar Faculty/Navbar Faculty"

const Cutoff = () => {

  return (
    <div className="bg-[#e6e6e6] h-auto flex">

      <Navbar/>

      <div className="flex flex-col justify-between w-full p-8">
        <div className="flex flex-row justify-between w-20% ">

                  <div className="w-full h-auto bg-white shadow-md rounded-[15px] p-8 mb-8">
                      <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold mb-4">Cut-Off Marks</div>
                              <div className="w-full flex flex-col items-center">
                                {[
                                  { grade: "AA", marks: 75 },
                                  { grade: "AB", marks: 72 },
                                  { grade: "BB", marks: 69 },
                                  { grade: "BC", marks: 62 },
                                  { grade: "CC", marks: 55 },
                                  { grade: "CD", marks: 48 },
                                  { grade: "DD", marks: 41 },
                                  { grade: "FF", marks: 34 },
                                ].map((cutoff, index) => (
                                  <div
                                    key={index}
                                    className="w-full flex justify-between p-4 bg-black text-white text-2xl rounded-md mb-4"
                                  >
                                    <div>{cutoff.grade}</div>
                                    <div>{cutoff.marks}</div>
                                  </div>
                                ))}
                              </div>
                          </div>
                    </div>
                  
                    <div className="flex flex-col justify-around w-auto h-full mx-20">

                          <div className="flex flex-col p-12 bg-white shadow-md rounded-[15px] w-[240px] ml-32 hover:bg-gray-200 transition">
                            <div className="text-center font-bold text-2xl mb-8">Highest Marks</div>
                            <div className="text-center text-4xl font-black">87/100</div>
                          </div>

                          <div className="flex flex-col p-12 bg-white shadow-md rounded-[15px] w-[240px] ml-32 hover:bg-gray-200 transition">
                            <div className="text-center font-bold text-2xl mb-8">Failed Students</div>
                            <div className="text-center text-4xl font-black">5/65</div>
                          </div>

                          <div className="flex flex-col p-8 bg-white shadow-md rounded-[15px] w-[240px] ml-32 mb-16 hover:bg-gray-200 transition">
                          <button className="text-center font-bold bg-black text-white py-2 px-4 rounded-md ">
                            LOCK CUT OFFS
                          </button>
                          </div>

                    </div>
        </div>
      </div>
    </div>
  );
};

export default Cutoff;
