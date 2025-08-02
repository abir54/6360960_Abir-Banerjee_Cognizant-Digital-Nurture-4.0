// src/components/BookDetails.js
import React from 'react';

function BookDetails({ books }) {
  return (
    <div className="card">
      <h2>📚 Book Details</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
