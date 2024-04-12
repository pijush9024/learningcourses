import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;


  function clickHandler() {
    if(likedCourses.includes(course.id)) {
      // pahele se like hua padaha hai
      setLikedCourses( (prev) => prev.filter( (cid)=> (cid !== course.id)));
      toast.warning("Like removed");
    }
    else {
      // pehele se like dnehi hai
      // insert karna hai ye course liked course me
      if(likedCourses.length === 0) {
      setLikedCourses([course.id]);
      }
      else {
        // length non-empty thi
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

 
  
  return (
    <div className='w-[300px] bg-bgGrey bg-opacity-80 rounded-md overfolw-hidden'>

      <div className='relative'>
      <img src = {course.image.url}></img>
     

      <div  className= 'w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-1] grid place-items-center'>
        <button onClick={clickHandler}>
        {
          !likedCourses.includes(course.id) ? 
          ( <FcLikePlaceholder fontSize= "1.75rem"/>) : 
          (<FcLike fontSize= "1.75rem" />)
        }
        </button>
      </div>
      </div>

      <div className='p-4'>
       <p className='text-white font-semibold text-lg leading-6'> {course.title} </p>
       <p className='mt-2 text-white'> 
       {
        course.description.length > 100 ? 
        (course.description.substring(0,100)) + "..." : 
        (course.description)
       } 
       </p>

      </div>
    </div>
  )
}

export default Card
