import React, { useState } from 'react'
import Card from './Card';


const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);
  // console.log("printing data");
  // console.log(courses);


function getCourses() { 
  if(category === "All") {
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
  
    return allCourses;
  }
   else {
    // main sirf pecific category ka data array karunga
    return courses[category];
   }
}

  return (
    <div className= "flex flex-wrap justify-center gap-4 mb-4">
      {
       getCourses() && getCourses().map((course) => {
          return <Card key= {course.id}
           course = {course} 
           likedCourses = {likedCourses}
            setLikedCourses = {setLikedCourses}></Card>
        })
      }
    </div>
  )
}

export default Cards
