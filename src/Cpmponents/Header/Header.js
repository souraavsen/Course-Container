import React from 'react'
import "./header.css"

const Header = () => {
    return (
      <div>
        <h2 className='font-bold text-4xl py-8'>Course Container</h2>
        <p className='font-light pb-4'>
          Here you will find all the course to enhance your Web Development
          career. Enroll and Start
        </p>
        <h3>You Budget: 10000</h3>
      </div>
    );
}

export default Header
