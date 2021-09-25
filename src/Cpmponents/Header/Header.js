import React from 'react'
import "./header.css"

const Header = () => {
    return (
      <div className='text-center mb-12'>
        <h2 className='font-bold text-4xl py-4'>Course Container</h2>
        <p className='font-light pb-2'>
          Here you will find all the course to enhance your Web Development
          career. Enroll and Start
        </p>
        <h3>You Budget: 10000</h3>
      </div>
    );
}

export default Header
