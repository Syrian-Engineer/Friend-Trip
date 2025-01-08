import React from "react";

interface NavProps {
  currentPage: number; // Accept currentPage as a prop
}

const Nav: React.FC<NavProps> = ({ currentPage }) => {
  return (
    <nav className="flex gap-2 justify-around items-center ">
      <div className={`row rounded-full w-16 h-0.5 p-2 ${currentPage === 1 ? 'bg-blue-300' : 'bg-gray-900'}`}></div> 
      <div className={`row rounded-full w-16 h-0.5  p-2 ${currentPage === 2 ? 'bg-blue-400' : 'bg-gray-900'}`}></div>
      <div className={`row rounded-full w-16 h-0.5  p-2 ${currentPage === 3 ? 'bg-blue-500' : 'bg-gray-900'}`}></div>
      <div className={`row rounded-full w-16 h-0.5  p-2 ${currentPage === 4 ? 'bg-blue-600' : 'bg-gray-900'}`}></div>
    </nav>
  );
};

export default Nav;
