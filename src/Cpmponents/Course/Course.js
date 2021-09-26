import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import './course.css';


const Course = (props) => {
    const { id, Name, Duration, Instructor, Rating, Img, Fee } = props.course;

    return (
      <div className='card bg-opacity-30 m-5 rounded-md shadow-2xl'>
        <div className='flex flex-col'>
          <div className='mx-auto my-8'>
            <img
              className='h-24 w-24 rounded-full shadow-xl'
              src={Img}
              alt=''
            />
          </div>
          <div className='px-4 pb-6'>
            <p className='text-base py-1'>
              <span className='font-semibold'>Title: </span>
              {Name}
            </p>
            <p className='text-base py-1'>
              Instructor: <span>{Instructor}</span>
            </p>
            <p className='text-base py-1'>
              Duration:{" "}
              <span className='px-3 rounded-full bg-green-500'>
                {Duration}h
              </span>
            </p>
            <p className='text-base py-1'>Fee: ${Fee}</p>
            <p className='text-base py-1'>Rating: {Rating}</p>
          </div>
          <button
            className='bg-green-500 border-2 border-green-400 w-24 px-1 py-1 mx-auto mb-6 rounded-full text-xl cursor-pointer hover:bg-transparent'
            onClick={() => {
              props.handleEnroll(id);
            }}
          >
            <FontAwesomeIcon icon={faShare} /> Enroll
          </button>
        </div>
      </div>
    );
};

export default Course;
