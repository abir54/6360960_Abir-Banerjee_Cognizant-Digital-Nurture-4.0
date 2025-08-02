// src/App.js
import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [section, setSection] = useState('book');

  const books = [
    { title: "Clean Code", author: "Robert C. Martin" },
    { title: "Atomic Habits", author: "James Clear" }
  ];

  const blogs = [
    { title: "React Tips", date: "2025-07-01" },
    { title: "Advanced JS", date: "2025-08-01" }
  ];

  const courses = [
    { name: "React Basics", price: 2999 },
    { name: "Full Stack Bootcamp", price: 7999 }
  ];

  // Using variable element
  let content;
  if (section === 'book') {
    content = <BookDetails books={books} />;
  } else if (section === 'blog') {
    content = <BlogDetails blogs={blogs} />;
  } else {
    content = <CourseDetails courses={courses} />;
  }

  return (
    <div className="App">
      <h1>📝 Blogger App</h1>
      <div className="nav">
        <button onClick={() => setSection('book')}>Books</button>
        <button onClick={() => setSection('blog')}>Blogs</button>
        <button onClick={() => setSection('course')}>Courses</button>
      </div>

      {/* Conditional Rendering using variable */}
      {content}

      {/* Conditional Rendering using ternary */}
      <div className="footer">
        {section === 'book' ? (
          <p>📖 You're viewing book section</p>
        ) : section === 'blog' ? (
          <p>🗒 You're viewing blog section</p>
        ) : (
          <p>🎓 You're viewing course section</p>
        )}
      </div>
    </div>
  );
}

export default App;
