import React, { useState } from "react";
import Book from "./components/Book";
import Header from "./components/Header";
import BookList from "./components/BookList";
import About from "./pages/About";
import Search from "./components/Search";

import data from "./models/books.json";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");

  async function findBooks(term) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print- type=books&projection=lite`
    ).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
    const newBooks = books.filter((book) => {
      if (title === book.volumeInfo.title) {
        return false;
      }
      return true;
    });

    setBooks(newBooks);
  }

  if (books.length === 0) {
    return "No books found";
  }

  return (
    <div className="background-grey">
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Header />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />

              <BookList books={books} addBook={addBook} />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/bookcase"
          render={() => (
            <React.Fragment>
              <Header />
              <p> Bookcase Page </p>
            </React.Fragment>
          )}
        />

        <Route
          exact
          path="/about"
          render={() => (
            <React.Fragment>
              <Header />
              <About />
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
};

export default App;
