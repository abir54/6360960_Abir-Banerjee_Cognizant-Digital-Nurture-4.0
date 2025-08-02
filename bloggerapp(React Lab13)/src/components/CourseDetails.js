// src/components/CourseDetails.js
import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div className="card">
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong> - ₹{course.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
