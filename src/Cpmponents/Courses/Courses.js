import React from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import "./courses.css";
import { useEffect, useState } from "react";

const Courses = () => {
  const [coursesdata, setCoursesdata] = useState([]);
  const [added, setAdded] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setCoursesdata(data);
      });
  }, []);

  const handleEnroll = (id) => {
    setAdded([...added,coursesdata.find(course=>course.id===id)])
  }

  console.log(added);

  return (
    <div className='container w-screen courses-container'>
      <div className='px-4 py-10 grid grid-cols-3 mx-auto'>
        {coursesdata.map((course) => (
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
