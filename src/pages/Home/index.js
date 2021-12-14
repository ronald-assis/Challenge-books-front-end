import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import BooksList from "../../components/BookList";
import booksApi from "../../service/booksApi";
import "./home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [allPages, setAllPages] = useState(1);
  const [pages, setPage] = useState(1);

  useEffect(() => {
    booksApi(pages).then(({ data, totalPages, page }) => {
      setBooks(data);
      setPage(page);
      setAllPages(totalPages.toFixed(0));
    });
  }, [pages]);

  return (
    <div className="home">
      <Header />
      <BooksList
        books={books}
        allPages={allPages}
        page={pages}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;
