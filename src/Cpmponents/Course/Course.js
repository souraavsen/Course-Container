import React from "react";
import './course.css';

const Course = (props) => {
    const { Name, Duration, Instrctor, Rating, Img, Fee } = props.course;

    return (
      <div className='bg-white bg-opacity-30 m-5 rounded-md backdrop-filter backdrop-blur-lg'>
        <div className='flex flex-col'>
          <div className='mx-auto my-8'>
            <img className='h-24 w-24 rounded-full shadow-xl' src={Img} alt='' />
          </div>
          <div className='px-4 pb-6'>
            <p className="text-base py-1">
              <span className='font-semibold'>Title: </span>
              {Name}
            </p>
            <p className="text-base py-1">
              Instructor: <span>{Instrctor}</span>
            </p>
            <p className="text-base py-1">
              Duration:{" "}
              <span className='px-3 rounded-full bg-green-400'>{Duration}h</span>
            </p>
            <p className="text-base py-1">Fee: ${Fee}</p>
            <p className="text-base py-1">Rating: {Rating}</p>
          </div>
        </div>
      </div>
    );
};

export default Course;
