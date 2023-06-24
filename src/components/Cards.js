import React, { useState } from "react";
import Card from "./Card";
import { toast } from "react-toastify";

const Cards = (props) => {
  let courses = props.courses;
  //console.log("Printing Data");
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }
  return (
    <div>
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Cards;
