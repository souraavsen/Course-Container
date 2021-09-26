import React from "react";
// impored components
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import "./courses.css";
import { useEffect, useState } from "react";

const Courses = () => {
  // usestate for all courses and also added courses 
  const [coursesdata, setCoursesdata] = useState([]);
  const [added, setAdded] = useState([]);

  // load data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setCoursesdata(data);
      });
  }, []);

  // select courses onclick 
  const handleEnroll = (id) => {
    const selectedCourse = coursesdata.find((course) => course.id === id);
    const ifExist = added.find((course) => course.id === id);

    // if course exist the skiping that one
    if (!ifExist) {
      setAdded([...added, selectedCourse]);
    }
  }

  return (
    <div className='container w-screen courses-container'>
      <div className='px-4 py-10 grid grid-cols-3 mx-auto'>
        {coursesdata.map((course) => (
          // passing data in props
          <Course
            key={course.id}
            course={course}
            handleEnroll={handleEnroll}
          ></Course>
          ))}
      </div>

      <div className='px-4 py-10 '>
        <Cart added={added} setAdded={setAdded}></Cart>
      </div>
    </div>
  );
};

export default Courses;
