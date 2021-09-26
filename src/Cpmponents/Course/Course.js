import React from "react";
// font awesome packge imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// rating star packge imported
import ReactStars from "react-rating-stars-component";
// imported font awesome icon
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./course.css";

const Course = (props) => {
  // destructing course details from the props
  const { id, Name, Duration, Instructor, Rating, Img, Fee } = props.course;

  return (
    <div className='card bg-opacity-30 m-4 rounded-md shadow-2xl'>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center'>
          <div className='mx-auto my-8'>
            <img
              className='h-24 w-24 rounded-full shadow-xl'
              src={Img}
              alt=''
            />
          </div>
          <div className='w-68 mx-4 px-4 pb-2 mb-4 shadow-lg'>
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
                {/* handeling time for less than 1 hour  */}
                {Duration < 1 ? Duration * 60 : Duration}
                {Duration < 1 ? "min" : "h"}
              </span>
            </p>
            <p className='text-base py-1'>Fee: ${Fee}</p>
            <p className='text-base py-1 flex'>
              <span className='mr-2'>Rating:</span>
              <ReactStars
                count={5}
                size={24}
                value={Rating}
                edit={false}
                isHalf={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                activeColor='#ffd700'
              />
              <span className='ml-1'>({Rating})</span>
            </p>
          </div>
        </div>
        <button
          className='bg-green-500 border-2 border-green-400 text-lg w-24 px-1 py-0.5 mx-auto mb-6 rounded-full cursor-pointer hover:bg-transparent'
          onClick={() => {
            // passing id of selected course in parameter
            props.handleEnroll(id);
            // importing font awesome icon
          }}
        >
          <FontAwesomeIcon icon={faShare} /> Enroll
        </button>
      </div>
    </div>
  );
};

export default Course;
