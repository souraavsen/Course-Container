import React from "react";
// font awesome packge imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  // distructing props
    const { added,setAdded } = props;
    
    let totalFees = 0;
    // Calculating total fees
    for (const course of added) {
        totalFees = totalFees + course.Fee;
    }

  // remove course from cart
    const handleRemove = (id) => {
        setAdded(added.filter(course=>course.id!==id))
    }

  return (
    <div className='sticky top-20'>
      <div>
        <h1 className='pb-4 pt-4'>
          Details{" "}
          <FontAwesomeIcon
            className='text-2xl px-1 my-auto text-green-400'
            icon={faCheckCircle}
          />
        </h1>
        <h6 className='text-xl pb-2'>
          Selected Courses:{" "}
          {/* finding total number of courses added into the card $ */}
          <span className='text-green-400'>{added.length}</span>
        </h6>
        <h6 className='text-xl pb-4'>
          Total Fees: $
          {/* fixed the total result to 2 decimal number $ */}
          <span className='text-green-400'>{totalFees.toFixed(2)}</span>
        </h6>
      </div>
      <div className='max-h-60 overflow-y-auto px-2 pt-2'>
        {added.map((course, index) => (
          <div
            key={index}
            className='text-base bg-white bg-opacity-10 px-3 py-2 my-4 flex justify-between items-center rounded'
          >
            <li>
              {course.Name}{" "}
              <span className='text-sm'>
                <i>- $</i>
                <span className='text-green-300'>{course.Fee}</span>
              </span>
            </li>
            {/* handed remove course operation */}
            <button
              className='px-2 my-auto text-center ml-4 bg-red-500'
              onClick={() => handleRemove(course.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <button className='px-4 py-1 mt-4 bg-green-500 rounded-full text-lg mx-auto'>
        Enroll All
      </button>
    </div>
  );
};

export default Cart;
