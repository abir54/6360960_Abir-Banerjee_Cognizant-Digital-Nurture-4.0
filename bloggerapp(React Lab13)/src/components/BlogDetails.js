// src/components/BlogDetails.js
import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="card">
      <h2>✍️ Blog Details</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <strong>{blog.title}</strong> - {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
