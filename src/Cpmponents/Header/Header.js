import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex items-center justify-between px-12 py-2 bg-darkblue fixed'>
        <h2 className='font-bold text-3xl py-2'>Course Container</h2>
        {/* total budget  */}
        <h3>
          Your Budget: <span className="bg-green-400 bg-opacity-70 px-2 rounded-full">$10000</span>
        </h3>
      </div>
      <p className='font-light pt-28 text-center'>
        Here you will find all the course to enhance your Web Development
        career. Enroll and Explore.
      </p>
    </div>
  );
};

export default Header;
