import React from "react";
import "./bookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-img">
        <img src={book.imageUrl} alt={`Book title ${book.title}`} />
      </div>
      <div className="book-information">
        <div className="title-and-author">
          <h1>{book.title}</h1>
          {book.authors.map((author) => (
            <h2 key={`${author} ${book.title}`}>{author}</h2>
          ))}
        </div>
        <div className="book-description">
          <p>{book.pageCount} paginas</p>
          <p>Editora {book.publisher}</p>
          <p>Publicado em {book.published}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
