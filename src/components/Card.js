import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import toast from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //phle se like para hua hai
    }
  }
  return (
    <div>
      <div>
        <img src={course.image.url} alt="" />
      </div>

      <div>
        <button onClick={clickHandler}>
          <FcLike />
        </button>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
