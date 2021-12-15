import React from "react";
import Quotes from "../../images/quotes.svg";
import "./bookDetails.css";

const BookDetails = ({ book, closeDetails, setPosition, setwidth }) => {
  const handleClick = () => {
    closeDetails(false);
    setPosition("relative");
    setwidth("auto");
  };

  return (
    <div className="book-details">
      <div className="details-button">
        <button type="button" onClick={handleClick}>
          X
        </button>
      </div>
      <div className="main-details">
        <div className="details-book-img">
          <img src={book.imageUrl} alt={`Book img ${book.title}`} />
        </div>
        <div className="details">
          <div className="book-title">
            <h1>{book.title}</h1>
            {book.authors.map((author) => (
              <h2 key={`${author} ${book.title}`}>{author}</h2>
            ))}
          </div>
          <div className="informaction">
            <p>INFORMAÇÕES</p>
            <div className="content-information">
              <div>
                <p>Pagina</p>
                <span>{`${book.pageCount} páginas`}</span>
              </div>
              <div>
                <p>editora</p>
                <span>{`Editora: ${book.publisher}`}</span>
              </div>
              <div>
                <p>publicão</p>
                <span>{`${book.published}`}</span>
              </div>
              <div>
                <p>idioma</p>
                <span>{`${book.language}`}</span>
              </div>
              <div>
                <p>titulo</p>
                <span>{`${book.title}`}</span>
              </div>
              <div>
                <p>ISBN-10</p>
                <span>{`${book.isbn10}`}</span>
              </div>
              <div>
                <p>ISBN-13</p>
                <span>{`${book.isbn13}`}</span>
              </div>
            </div>
          </div>
          <div className="review">
            <p>RESENHA DA EDITORA</p>
            <p>
              <span>
                <img src={Quotes} alt="Quotes" />
              </span>
              <span>{book.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
