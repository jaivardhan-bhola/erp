// components/CourseCard.js
import React from "react";

const CourseCard = ({ course, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 mr-4 cursor-pointer flex flex-row justify-between w-auto hover:bg-gray-300" onClick={onClick}>
      <div>
        <div className="font-bold text-xl mb-3">{course.name}</div>
        <div className="text-sm text-gray-500">{course.faculty}</div>
      </div>
      <div className="flex flex-col justify-between mx-145 items-end">
        <div className="text-sm mb-4 mt-1 text-lime-900 font-bold">{course.credits} Credits</div>
        <div className={`text-sm text-right ${course.lab ? 'text-red-500' : 'text-green-500'}`}>{course.lab ? 'Lab Available' : 'Lab NA'}</div>
      </div>
    </div>
  );
};

export default CourseCard;
