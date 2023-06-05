import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    //   let allCourse = [];

    function getCourses() {
        if (category && category !== "All") {
            return props.courses[category];
        } else {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses() && getCourses().map((course) => {
                    return (<Card key={props.courses.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />);
                })
            }
        </div>
    );
};

export default Cards;
