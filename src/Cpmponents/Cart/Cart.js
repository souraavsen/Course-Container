import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    const { added,setAdded } = props;
    
    let totalFees = 0;

    for (const course of added) {
        totalFees = totalFees + course.Fee;
    }

    const handleRemove = (id) => {
        setAdded(added.filter(course=>course.id!==id))
    }

  return (
    <div>
      <div>
        <h1 className='pb-8'>
          Details{" "}
          <FontAwesomeIcon
            className='text-2xl px-1 my-auto text-green-400'
            icon={faCheckCircle}
          />
        </h1>
        <h6 className='text-xl pb-2'>
          Total Selected Courses:{" "}
          <span className='text-green-400'>{added.length}</span>
        </h6>
        <h6 className='text-xl pb-2'>
          Total Fees: $<span className='text-green-400'>{totalFees}</span>
        </h6>
      </div>
      <div className='pt-6'>
        {added.map((course, index) => (
          <div
            key={index}
            className='text-base bg-white bg-opacity-10 px-3 py-2 my-4 flex justify-between items-center rounded'
          >
            <li>
              {course.Name}{" "}
              <span className='text-sm'>
                <i>-by </i>{" "}
                <span className='text-green-300'>{course.Instructor}</span>
              </span>
            </li>
            <button className='px-2 my-auto text-center ml-4 bg-red-500' onClick={()=>handleRemove(course.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
