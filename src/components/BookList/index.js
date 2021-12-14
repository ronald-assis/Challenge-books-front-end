import React, { useState } from "react";
import BookCard from "../BookCard";
import BookDetails from "../BookDetails";
import PageChange from "../PageChange";
// import RefreshToken from "../../service/refreshToken";
import "./bookList.css";

const BooksList = ({ books = [], allPages, page, setPage }) => {
  const [details, setDetails] = useState(false);
  // const [visible, setVisible] = useState("flex");
  const [bookDetails, setBookDetails] = useState({});
  // const WIDTH = 1632;
  const currentPage = page;
  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleClick = (book) => {
    setDetails(true);
    // setVisible("none");
    setBookDetails(book);
  };

  const handleClickPreviousPage = () => {
    if (currentPage <= 2) setPreviousDisabled(true);
    if (currentPage > 1) setNextDisabled(false);
    setPage(currentPage - 1);
  };

  const handleClickNextPage = () => {
    setPage(currentPage + 1);
    if (currentPage >= allPages - 1) setNextDisabled(true);
    if (currentPage <= allPages) setPreviousDisabled(false);
  };

  return (
    <main>
      {/* {console.log(RefreshToken())} */}
      <div
        className="main-content mobile"
        style={{ display: "flex" /* width: WIDTH */ }}
      >
        {books.map((book) => (
          <button key={book.id} type="button" onClick={() => handleClick(book)}>
            <BookCard book={book} />
          </button>
        ))}
      </div>
      <PageChange
        page={page}
        allPages={allPages}
        previousDisabled={previousDisabled}
        handleClickPreviousPage={handleClickPreviousPage}
        nextDisabled={nextDisabled}
        handleClickNextPage={handleClickNextPage}
      />
      {details && (
        <BookDetails
          book={bookDetails}
          closeDetails={setDetails}
          // visible={setVisible}
        />
      )}
    </main>
  );
};

export default BooksList;
