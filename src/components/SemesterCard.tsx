import React from 'react';

const SemesterCard = ({ semester, onSelect }) => {
  return (

        <div className="bg-white shadow-md rounded-xl p-4 mb-4 mr-4 cursor-pointer flex flex-row justify-between w-auto hover:bg-gray-300" onClick={() => onSelect(semester)}>
            <div>
              <div className="font-bold text-xl mb-3">
                <h3>{semester.name}</h3>
              </div>
              <div className="text-sm text-gray-500">
                <p>{semester.facultyAdvisor}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between mx-145 items-end">
              <div className="text-sm mb-4 mt-1 text-lime-900 font-bold">
                  
              </div>
              <div className={`text-sm text-right  'text-red-500' : 'text-green-500'}`}>
                  <p>{semester.classroom}</p>
              </div>
            </div>
        </div>
  );
};

export default SemesterCard;